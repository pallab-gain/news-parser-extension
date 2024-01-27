import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'ভোরের কাগজ'
const paperImage = 'https://bhorerkagoj.com/uploads/settings/logo-black.png'
const urls = [
  'https://www.bhorerkagoj.com/',
  'https://www.bhorerkagoj.com/category/bangladesh/'
]
class Bhorerkagoj extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.desktopDetailTag')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('a')].map(item => item.textContent)
      }).flat(1)
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll('.desktopDetailPhoto')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('img')].map(item => item.src)
      }).flat(1)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.desktopSectionListMedia, .cat-normal-news a')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('a')].map(item => item.href)
      }).flat(1)
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.desktopDetailBody')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}
export default Bhorerkagoj
