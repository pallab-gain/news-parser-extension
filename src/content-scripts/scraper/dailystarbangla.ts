import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'দি ডেইলি স্টার বাংলা'
const paperImage = 'https://bangla.thedailystar.net/sites/all/themes/sloth/logo-bn.png'
const urls = [
  'https://bangla.thedailystar.net/todays-news',
  'https://bangla.thedailystar.net/news/bangladesh'
]

class DailyStarbangla extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.content-tags')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('.tags > a')].map(item => item.textContent)
      }).flat(1)
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.block-content > div:first-child .article-section .section-media img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.todays-news-table  a, .card-content a')].map(element => {
      return element.href
    })

    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.block-content > div:first-child .article-section')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default DailyStarbangla
