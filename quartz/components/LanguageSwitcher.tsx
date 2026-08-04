import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const LanguageSwitcher: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const slug = fileData.slug!
  const isEnglish = slug === "en" || slug.startsWith("en/")
  const counterpart = (isEnglish ? slug.replace(/^en\//, "") : `en/${slug}`) as FullSlug
  const target = counterpart === "en" ? ("en/index" as FullSlug) : counterpart

  return (
    <nav class="language-switcher" aria-label="Language selector">
      <span lang={isEnglish ? "en" : "zh-Hant"}>{isEnglish ? "English" : "中文"}</span>
      <span aria-hidden="true">/</span>
      <a href={resolveRelative(slug, target)} lang={isEnglish ? "zh-Hant" : "en"}>
        {isEnglish ? "中文" : "English"}
      </a>
    </nav>
  )
}

LanguageSwitcher.css = `
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.75rem;
  color: var(--darkgray);
  font-size: 0.9rem;
}

.language-switcher a {
  font-weight: 600;
}
`

export default (() => LanguageSwitcher) satisfies QuartzComponentConstructor
