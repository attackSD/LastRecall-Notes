import { Fragment } from "preact"
import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

type Language = "zh-Hant" | "zh-Hans" | "en"

const languageLabels: Record<Language, string> = {
  "zh-Hant": "\u7e41\u9ad4\u4e2d\u6587",
  "zh-Hans": "\u7b80\u4f53\u4e2d\u6587",
  en: "English",
}

function getLanguage(slug: FullSlug): Language {
  if (slug === "en" || slug.startsWith("en/")) return "en"
  if (slug === "zh-Hans" || slug.startsWith("zh-Hans/")) return "zh-Hans"
  return "zh-Hant"
}

function getLogicalSlug(slug: FullSlug, language: Language): FullSlug {
  if (language === "zh-Hant") return slug

  if (slug === language || slug === `${language}/index`) {
    return "index" as FullSlug
  }

  return slug.slice(language.length + 1) as FullSlug
}

function getTarget(language: Language, logicalSlug: FullSlug): FullSlug {
  if (language === "zh-Hant") return logicalSlug
  return `${language}/${logicalSlug}` as FullSlug
}

const LanguageSwitcher: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const slug = fileData.slug!
  const activeLanguage = getLanguage(slug)
  const logicalSlug = getLogicalSlug(slug, activeLanguage)
  const languages: Language[] = ["zh-Hant", "zh-Hans", "en"]

  return (
    <nav class="language-switcher" aria-label="Language selector">
      {languages.map((language, index) => (
        <Fragment key={language}>
          {index > 0 && <span aria-hidden="true">/</span>}
          {language === activeLanguage ? (
            <span lang={language}>{languageLabels[language]}</span>
          ) : (
            <a href={resolveRelative(slug, getTarget(language, logicalSlug))} lang={language}>
              {languageLabels[language]}
            </a>
          )}
        </Fragment>
      ))}
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
