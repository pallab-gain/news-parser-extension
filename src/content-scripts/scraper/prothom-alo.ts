import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'প্রথম আলো'
const paperImage = 'https://flashn3ws-scraper.fly.dev/api/v1/dist/prothom-alo.png'
const urls = [
  'https://www.prothomalo.com/collection/latest/',
  'https://www.prothomalo.com/bangladesh',
  'https://www.prothomalo.com/opinion'
]

class ProthomAlo extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.tag-list a')].map(element => {
      return element.textContent
    })
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })

    const otherImages = [...document.querySelectorAll('.story-content .qt-image')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.wide-story-card > a, .news_with_item > a, .left_image_right_news > a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.story-content')]
      .filter((element, index) => index === 0)
      .map(element => {
        element.querySelectorAll('a, .also-read, .print-tags').forEach((item: { remove: () => any }) => item.remove())
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default ProthomAlo
