import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'যায়যায়দিন'
const paperImage = 'https://www.jaijaidinbd.com/templates/web-view/images/logo_new.png'
const urls = [
  'https://www.jaijaidinbd.com/all-news',
  'https://www.jaijaidinbd.com/wholecountry'
]

class Jaijaidin extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.breadcrumb a')].map(element => {
      return element.textContent
    })
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('img.detailImg')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.latest-most-news a, .common-lead-content a, .catsubMoremedianews a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.dtl_content_section')].map(element => {
      return [...element.querySelectorAll('p')].map(item => item.textContent)
    }).join('\n\n')
    return result
  }
}

export default Jaijaidin
