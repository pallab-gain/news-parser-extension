export interface Link {
  paper: string
  url: string
}

export interface Details {
  paper: string
  link: string
  title: string
  paperImage: string
  images: string[]
  summary: string
  content: string
  tags: string[]
  isLocal: boolean
}

export interface RequestAllUrls {
  type: 'scraper.request.all_urls'
}

export interface RequestAllUrlsForPaper {
  type: 'scraper.request.all_urls.paper'
  paper: string
}

export interface RequestNewsLink {
  type: 'scraper.request.news_links'
  url: string
}

export interface RequestDomContent {
  type: 'scraper.request.dom_content'
  link: Link
}

export type ExtensionMessage =
    RequestAllUrls |
    RequestAllUrlsForPaper |
    RequestNewsLink |
    RequestDomContent
