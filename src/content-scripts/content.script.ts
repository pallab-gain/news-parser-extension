import { type ExtensionMessage } from '../types/message'
import { getAllUrls, getAllUrlsForPaper, getContentUrls, getNewsContent } from './api-wrapper/newspapers'

const onMessage = (message: ExtensionMessage, sender: any, sendResponse: any) => {
  const type = message.type
  switch (message.type) {
    case 'scraper.request.all_urls':
      const urls = getAllUrls()
      sendResponse(urls)
      break
    case 'scraper.request.all_urls.paper':
      const { paper } = message
      const urlsForPaper = getAllUrlsForPaper(paper)
      sendResponse(urlsForPaper)
      break
    case 'scraper.request.news_links':
      const { url } = message
      const links = getContentUrls(url)
      sendResponse(links)
      break
    case 'scraper.request.dom_content':
      const { link } = message
      const content = getNewsContent(link)
      sendResponse(content)
      break
    default:
      console.info('unknown message: ', message)
      break
  }
}

// @ts-expect-error
chrome.runtime.onMessage.addListener(onMessage)
