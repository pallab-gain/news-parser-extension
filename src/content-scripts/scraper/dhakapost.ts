import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'ঢাকা পোস্ট'
const paperImage = 'https://flashn3ws-scraper.fly.dev/api/v1/dist/dhaka-post.jpeg'
const urls = [
  'https://www.dhakapost.com/latest-news',
  'https://www.dhakapost.com/country'
]

class DhakaPost extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('article')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('a[class*=bg]')].map(element => {
          return element.textContent
        })
      }).flat(1)
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('article')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('img')].map(element => {
          return element.src
        })
      })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('a.group')].map(element => {
      return element.href
    })

    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('article')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default DhakaPost
