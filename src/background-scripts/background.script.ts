import { socketIO } from './socketio/socketio'
import { getTabs } from './tabs/tabs'

const handleTabUpdate = (tabId: number, info: { status: string }) => {
  if (info.status === 'complete') {
    const tab = getTabs(tabId)
    if (!tab) {
      return
    }
    // @ts-expect-error
    chrome.tabs.sendMessage(tabId, tab.payload, (response) => {
      tab.callback(response)
      // @ts-expect-error
      chrome.tabs.remove(tabId)
    })
  }
}

socketIO.connect()

// @ts-expect-error
chrome.tabs.onUpdated.addListener(handleTabUpdate)
