const helloWorld = async (): Promise<void> => {
  console.info('Hello World')
}

void helloWorld().then(console.info)
