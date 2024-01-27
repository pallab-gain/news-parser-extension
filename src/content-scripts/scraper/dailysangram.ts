import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'দৈনিক সংগ্রাম'
const paperImage = 'https://www.dailysangram.com/logos/logo.jpg'
const urls = [
  'https://dailysangram.com/',
  'https://dailysangram.com/section/bangladesh/'
]

class DainikSangram extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.breadcrumb li:not(:first-child) a')].map(element => element.textContent)
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll('.mediaContainer img')].map(element => element.src)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.lastUpdate a, .homeContent h1 a, .homeContent h2 a')].map(element => element.href)
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.postBody p')].map(element => {
      return element.textContent
    }).join('\n\n')
    return result
  }
}

export default DainikSangram
