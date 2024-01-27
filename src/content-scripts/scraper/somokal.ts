import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'সমকাল'
const paperImage = 'https://samakal.com/frontend/media/common/logo.png'
const urls = [
  'https://samakal.com/',
  'https://samakal.com/bangladesh'
]

class Samakal extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.tagArea li:not(:first-child)')].map(element => {
      return element.textContent
    })

    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.DNewsImg img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    this.maybeSolveCapcha()
    const result = [...document.querySelectorAll('.DLatestNewsList a, .DCatLead a, .Catcards a, .CatListNews a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    this.maybeSolveCapcha()
    const result = [...document.querySelectorAll('.dNewsDesc')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }

  // solve cloudflare capcha by clicking .ctp-checkbox-label selector if it is exist
  maybeSolveCapcha (): void {
    console.info('todo solve capcha')
  }
}

export default Samakal
