import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'কক্সবাজার নিউজ'
const paperImage = 'https://www.coxsbazarnews.com/wp-content/uploads/2021/02/logo.png'
const urls = [
  'https://www.coxsbazarnews.com'
]

class CoxbazerNews extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls, true)
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll('.entryimage-container img')].map(element => element.src)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.list-latest a')].map(element => element.href)
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.entry-content')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default CoxbazerNews
