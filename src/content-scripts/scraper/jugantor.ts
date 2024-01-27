import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'যুগান্তর'
const paperImage = 'https://flashn3ws-scraper.fly.dev/api/v1/dist/jugantor.png'
const urls = [
  'https://www.jugantor.com/all-news/',
  'https://www.jugantor.com/country-news'
]

class Jugantor extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.trending a')].map(element => {
      return element.textContent
    })
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.dtl-news-img img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('#most-recent-news a, #lead-news a, #news-list a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.news-element-text p')].map(element => {
      return element.textContent
    }).join('\n\n')
    return result
  }
}

export default Jugantor
