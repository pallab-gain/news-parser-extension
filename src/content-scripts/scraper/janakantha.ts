import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'দৈনিক জনকণ্ঠ'
const paperImage = 'https://www.dailyjanakantha.com/media/common/janakantha-logo.png'
const urls = [
  'https://www.dailyjanakantha.com/archives/',
  'https://www.dailyjanakantha.com/bangladesh/'
]

class Janakantha extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.list-inline a')].map(element => {
      return element.textContent
    })
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.DDetailsContent img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.DCategoryListNews a, .DCatTopNews a, .DCatTopNewsList a, .DCatNewsList3 a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('#contentDetails')].map(element => {
      return [...element.querySelectorAll('p')].map(item => item.textContent)
    }).join('\n\n')
    return result
  }
}

export default Janakantha
