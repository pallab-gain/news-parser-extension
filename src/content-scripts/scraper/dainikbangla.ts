import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'দৈনিক বাংলা'
const paperImage = 'https://flashn3ws-scraper.fly.dev/api/v1/dist/dainik_bangla.png'
const urls = [
  'https://www.dainikbangla.com.bd/allnews'
]

class DainikBangla extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.breadcrumb_container a')].map(element => {
      return element.textContent
    })
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll('.news_item')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('img')].map(item => item.src)
      })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.all-news-list a:nth-child(2)')].map(element => {
      return element.href
    })

    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.news_item')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('.news_body p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default DainikBangla
