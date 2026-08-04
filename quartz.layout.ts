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
      const simplifiedFallbackTitles: Record<string, string> = {
        "zh-Hans/00---Project/Overview": "LastRecall \u4e13\u6848\u603b\u89c8",
        "zh-Hans/00---Project/Progress": "LastRecall \u76ee\u524d\u8fdb\u5ea6",
        "zh-Hans/00---Project/Updates": "LastRecall \u66f4\u65b0\u7eaa\u5f55",
        "zh-Hans/10---Gameplay/Game-Experience": "LastRecall \u6e38\u620f\u4f53\u9a8c",
        "zh-Hans/20---Content/Content-Direction": "LastRecall \u5185\u5bb9\u65b9\u5411",
        "zh-Hans/20---Content/Future-Ideas": "LastRecall \u529f\u80fd\u5efa\u8bae",
        "zh-Hans/30---Release/Known-Issues":
          "LastRecall \u5df2\u77e5\u95ee\u9898\u4e0e\u6d4b\u8bd5",
        "zh-Hans/30---Release/Resolved-Issues": "LastRecall \u5df2\u4fee\u6b63\u95ee\u9898",
        "zh-Hans/90---Archive/2026-08-04---Notes-Setup":
          "2026-08-04 \u4e13\u6848\u66f4\u65b0\u9875\u9762\u5efa\u7acb",
      }
      const simplifiedFallbackTitle = simplifiedFallbackTitles[node.slug]

      if (simplifiedFallbackTitle && /^[\x00-\x7F]+$/.test(node.displayName)) {
        node.displayName = simplifiedFallbackTitle
      }
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
