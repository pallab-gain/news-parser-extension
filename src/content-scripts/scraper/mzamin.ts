import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'মানবজমিন'
const paperImage = 'https://mzamin.com/assets/images/logo.png'
const urls = [
  'https://mzamin.com/',
  'https://mzamin.com/category.php?cat=8/'
]

class MZamin extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('img.img-fluid.img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('h1 a, h2 a, h3 a, h4 a, h5 a')].map(element => {
      return element.href
    })

    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('article > div:not(:first-child) > div:first-child')]
      .map(element => {
        element.querySelectorAll('.card-body').forEach((item: { remove: () => any }) => item.remove())
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default MZamin
