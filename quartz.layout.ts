import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

const languageExplorer = () =>
  Component.Explorer({
    filterFn: (node) => {
      if (node.slugSegment === "tags") return false

      const slug = document.body.dataset.slug ?? ""
      const activeLanguage =
        slug === "en" || slug.startsWith("en/")
          ? "en"
          : slug === "zh-Hans" || slug.startsWith("zh-Hans/")
            ? "zh-Hans"
            : "zh-Hant"
      const nodeLanguage =
        node.slug === "en" || node.slug.startsWith("en/")
          ? "en"
          : node.slug === "zh-Hans" || node.slug.startsWith("zh-Hans/")
            ? "zh-Hans"
            : "zh-Hant"

      return nodeLanguage === activeLanguage
    },
    mapFn: (node) => {
      if (node.slugSegment === "en") node.displayName = "English notes"
      if (node.slugSegment === "zh-Hans") node.displayName = "\u7b80\u4f53\u4e2d\u6587\u7b14\u8bb0"
    },
  })

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.LanguageSwitcher(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    languageExplorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ConditionalRender({
      component: Component.LanguageSwitcher(),
      condition: (page) => !page.fileData.slug?.startsWith("tags"),
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    languageExplorer(),
  ],
  right: [],
}
