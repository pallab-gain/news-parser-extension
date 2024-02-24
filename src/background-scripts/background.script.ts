import { socketIO } from './socketio/socketio'
import { getTabs } from './tabs/tabs'

const handleTabUpdate = async (tabId: number, info: { status: string }): Promise<void> => {
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
      // chrome.tabs.remove(tabId)
      tab.callback(response)
    })
  }
}

socketIO.connect()

// @ts-expect-error
chrome.tabs.onUpdated.addListener(handleTabUpdate)
