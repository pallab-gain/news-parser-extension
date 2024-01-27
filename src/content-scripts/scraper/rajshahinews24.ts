import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'রাজশাহী নিউজ 24'
const paperImage = 'https://rajshahinews24.com/public/templateimage/60ef5cebb8486.jpg'
const urls = [
  'https://rajshahinews24.com/'
]

class Rajshahinews24 extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls, true)
  }

  getSummary (): string {
    const summaries = [...document.querySelectorAll('meta[property="og:description"]')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return summaries
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.single-image img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('#home .news-titletab a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.single-page > div > div')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default Rajshahinews24
