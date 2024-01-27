import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'নয়া দিগন্ত'
const paperImage = 'https://www.dailynayadiganta.com/resources/img/sitesetup/1_2.png'
const urls = [
  'https://www.dailynayadiganta.com/',
  'https://www.dailynayadiganta.com/country/7'
]

class NayaDiganta extends AbastractNewspaper {
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
    const otherImages = [...document.querySelectorAll('.image-holder img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.archive-news-list a, .column-no-left-padding a, h3 a, h2 a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.news-content p')]
      .map(element => {
        return element.textContent
      }).join('\n\n')
    return result
  }
}

export default NayaDiganta
