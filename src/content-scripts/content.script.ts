import { type ExtensionMessage } from '../types/message'
import { getAllUrls, getAllUrlsForPaper, getContentUrls, getNewsContent } from './api-wrapper/newspapers'

const onMessage = (message: ExtensionMessage, sender: any, sendResponse: any): boolean => {
  if (message.type === 'scraper.request.all_urls') {
    const urls = getAllUrls()
    sendResponse(urls)
    return true
  }
  if (message.type === 'scraper.request.all_urls.paper') {
    const { paper } = message
    const urlsForPaper = getAllUrlsForPaper(paper)
    sendResponse(urlsForPaper)
    return true
  }
  if (message.type === 'scraper.request.news_links') {
    const { url } = message
    void getContentUrls(url).then((links) => {
      sendResponse(links)
    })
    return true
  }
  if (message.type === 'scraper.request.dom_content') {
    const { link } = message
    void getNewsContent(link)
      .then((content) => {
        sendResponse(content)
      }).catch(null)
    return true
  }
  return false
}

// @ts-expect-error
chrome.runtime.onMessage.addListener(onMessage)
