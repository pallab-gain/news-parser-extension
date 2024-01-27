import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'বাংলাদেশ প্রতিদিন'
const paperImage = 'https://www.bd-pratidin.com/assets/newDesktop/img/logo.png?v=2'
const urls = [
  'https://www.bd-pratidin.com',
  'https://www.bd-pratidin.com/country'
]

class BDProtidin extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.tagArea a')].map(element => element.textContent)
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll('.news-img img')].map(element => element.src)

    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.latest-news-top a, .cat-lead a, .cat-2nd-lead a, a.list-item')].map(element => element.href)
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('#bpsepnil p')].map(element => element.textContent).join('\n\n')
    return result
  }
}

export default BDProtidin
