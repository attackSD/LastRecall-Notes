[CmdletBinding()]
param(
  [switch]$UseCommittedSource
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$contentRoot = Join-Path $repoRoot "content"
$outputRoot = Join-Path $contentRoot "zh-Hans"

Add-Type -AssemblyName Microsoft.VisualBasic

function Convert-ToSimplifiedChinese {
  param([string]$Text)

  $converted = [Microsoft.VisualBasic.Strings]::StrConv(
    $Text,
    [Microsoft.VisualBasic.VbStrConv]::SimplifiedChinese,
    2052
  )

  return $converted.Replace([char]0x9EBD, [char]0x4E48)
}

function Convert-WikiLinks {
  param([string]$Text)

  return [regex]::Replace(
    $Text,
    '(!?\[\[)([^\\|\]#]+)(\\?\|[^\]]*)?\]\]',
    {
      param($match)

      $target = $match.Groups[2].Value.TrimEnd()
      if ($target -notmatch '^(00|10|20|30|90) - ') {
        return $match.Value
      }

      return "{0}zh-Hans/{1}{2}]]" -f $match.Groups[1].Value, $target, $match.Groups[3].Value
    }
  )
}

function Get-SourceFiles {
  if ($UseCommittedSource) {
    return @(
      & git ls-tree -r --name-only HEAD content |
        Where-Object { $_ -like "content/*.md" -and $_ -notlike "content/en/*" -and $_ -notlike "content/zh-Hans/*" } |
        ForEach-Object { $_.Substring("content/".Length) }
    )
  }

  return @(
    Get-ChildItem -LiteralPath $contentRoot -Filter "*.md" -File -Recurse |
      ForEach-Object {
        $_.FullName.Substring($contentRoot.Length).TrimStart([char[]]@('\', '/')).Replace('\', '/')
      } |
      Where-Object { $_ -notlike "en/*" -and $_ -notlike "zh-Hans/*" }
  )
}

function Get-SourceText {
  param([string]$RelativePath)

  if ($UseCommittedSource) {
    $sourceText = & git show "HEAD:content/$RelativePath"
    if ($LASTEXITCODE -ne 0) {
      throw "Could not read the committed source note: $RelativePath"
    }

    return $sourceText -join "`n"
  }

  return [System.IO.File]::ReadAllText((Join-Path $contentRoot $RelativePath), [System.Text.UTF8Encoding]::new($false))
}

if (Test-Path -LiteralPath $outputRoot) {
  Remove-Item -LiteralPath $outputRoot -Recurse -Force
}

$generatedHeader = "<!-- This file is generated from the Traditional Chinese note. Edit the Traditional Chinese source, then run update_note.bat. -->`n`n"

foreach ($relativePath in (Get-SourceFiles)) {
  $destination = Join-Path $outputRoot $relativePath
  $destinationDirectory = Split-Path -Parent $destination
  New-Item -ItemType Directory -Path $destinationDirectory -Force | Out-Null

  $converted = Convert-ToSimplifiedChinese (Get-SourceText $relativePath)
  $converted = Convert-WikiLinks $converted
  [System.IO.File]::WriteAllText($destination, $generatedHeader + $converted, [System.Text.UTF8Encoding]::new($false))
}

Write-Host "Simplified Chinese notes synchronized."
