import type {
  Link,
  RequestAllUrls,
  RequestAllUrlsForPaper,
  RequestDomContent,
  RequestNewsLink
} from '../../types/message'
import { append } from '../tabs/tabs'

class SocketIO {
  private readonly socket: any

  constructor () {
    // @ts-expect-error
    this.socket = io('http://localhost:3000', { autoConnect: false })
  }

  onConnect = () => {
    console.info('connected')
  }

  onDisconnect = () => {
    console.info('disconnected')
  }

  onAllURLS = (callback: any): void => {
    const payload: RequestAllUrls = {
      type: 'scraper.request.all_urls'
    }
    // create a new dummy tab with google.com
    // @ts-expect-error
    chrome.tabs.create({ url: 'https://google.com' }, (tab) => {
      const tabId = tab.id
      append({ tabId, payload, callback })
    })
  }

  onAllURLSForPaper = (data: any, callback: any): void => {
    const { paper } = data
    const payload: RequestAllUrlsForPaper = {
      type: 'scraper.request.all_urls.paper',
      paper
    }
    // create a new dummy tab with google.com
    // @ts-expect-error
    chrome.tabs.create({ url: 'https://google.com' }, (tab) => {
      const tabId = tab.id
      append({ tabId, payload, callback })
    })
  }

  onNewsLinks = (data: any, callback: any): void => {
    const { url } = data
    const payload: RequestNewsLink = {
      type: 'scraper.request.news_links',
      url
    }
    // @ts-expect-error
    chrome.tabs.create({ url }, (tab) => {
      const tabId = tab.id
      append({ tabId, payload, callback })
    })
  }

  onDomContent = (data: any, callback: any): void => {
    const { url, paper } = data as Link
    const payload: RequestDomContent = {
      type: 'scraper.request.dom_content',
      link: {
        paper,
        url
      }
    }
    // @ts-expect-error
    chrome.tabs.create({ url }, (tab) => {
      const tabId = tab.id
      append({ tabId, payload, callback })
    })
  }

  connect = () => {
    this.socket.connect()
    this.socket.on('connect', this.onConnect)
    this.socket.on('disconnect', this.onDisconnect)
    this.socket.on('request.all_urls', this.onAllURLS)
    this.socket.on('request.all_urls.paper', this.onAllURLSForPaper)
    this.socket.on('request.news_links', this.onNewsLinks)
    this.socket.on('request.dom_content', this.onDomContent)
  }
}
const socketIO = new SocketIO()

// always expect that the server is up and running
export { socketIO }
