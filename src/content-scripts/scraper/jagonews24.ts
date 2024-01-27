import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'জাগোনিউজ২৪'
const paperImage = 'https://cdn.jagonews24.com/media/common/logo.png'
const urls = [
  'https://www.jagonews24.com/archive',
  'https://www.jagonews24.com/national'
]

class Jagonews24 extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.photo-tags a')].map(element => {
      return element.textContent
    })
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.featured-image img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('h3 a')].map(element => {
      return element.href
    })

    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.content-details')].map(element => {
      return [...element.querySelectorAll('p')].map(item => item.textContent)
    }).join('\n\n')
    return result
  }
}

export default Jagonews24
