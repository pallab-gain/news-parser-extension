import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'সিলেট এক্সপ্রেস'
const paperImage = 'https://sylhetexpress.net/images/logo.jpg'
const urls = [
  'https://sylhetexpress.net/'
]

class SylhetExpress extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls, true)
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.content img[class*=wp-image]')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('#LatestNewsList .list-group:first-child a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.content')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default SylhetExpress
