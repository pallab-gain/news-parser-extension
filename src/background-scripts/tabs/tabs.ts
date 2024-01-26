let callbacks: any[] = []

const getTabs = (tabId: any): any => {
  const tab = callbacks.find((item) => item.tabId === tabId)
  callbacks = callbacks.filter((item) => item.tabId !== tabId)
  return tab
}

const append = (payload: any) => {
  callbacks.push(payload)
}

export { getTabs, append }
