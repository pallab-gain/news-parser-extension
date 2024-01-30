const wait = async (ms: number): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, ms))
}

// look into puppeteer-service/socket.io.ts timeout. this timeout should be less than few seconds of socket timeout
const requestTimeoutInMs = 30 * 1000
export { wait, requestTimeoutInMs }
