import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'দৈনিক পূর্বাঞ্চল'
const paperImage = 'https://purbanchal.com/img/ratina_logo_544x180.png'
const urls = [
  'https://purbanchal.com/'
]

class Purbanchal extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls, true)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.entry-category a')].map(element => {
      return element.textContent
    })
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.td-post-content img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.entry-title a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.td-post-content')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default Purbanchal
