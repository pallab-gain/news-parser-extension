import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'আমাদের সময়'
const paperImage = 'https://flashn3ws-scraper.fly.dev/api/v1/dist/amader-shomoy-logo.jpg'
const urls = [
  'https://dainikamadershomoy.com/latest/all',
  'https://dainikamadershomoy.com/category/sarades'
]

class AmatherSomoy extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTitle (): string {
    const title = [...document.querySelectorAll('head > title')].map(element => element.textContent)
    return title?.[0]
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.btm-tags')]
      .map(element => {
        return [...element.querySelectorAll('a')].map(item => item.textContent)
      }).flat(1)

    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll('.sub-content')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('img')].map(item => item.src)
      }).flat(1)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.random-news a, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a')]
      .map(element => element.href)
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.sub-content')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('.content p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default AmatherSomoy
