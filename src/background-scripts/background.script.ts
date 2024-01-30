import { socketIO } from './socketio/socketio'
import { getTabs } from './tabs/tabs'

const handleTabUpdate = (tabId: number, info: { status: string }): void => {
  if (info.status === 'complete') {
    const tab = getTabs(tabId)
    if (!(Boolean(tab))) {
      return
    }
    const reqId = tab.payload.reqId
    // @ts-expect-error
    chrome.tabs.sendMessage(tabId, tab.payload, (response) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      clearTimeout(reqId)
      // @ts-expect-error
      chrome.tabs.remove(tabId)
      tab.callback(response)
    })
  }
}

socketIO.connect()

// @ts-expect-error
chrome.tabs.onUpdated.addListener(handleTabUpdate)
