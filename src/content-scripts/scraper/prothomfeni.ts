import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'প্রথম-ফেনী.কম'
const paperImage = 'https://prothom-feni.com/wp-content/uploads/2022/04/Logo-prothom-fen-01.png'
const urls = [
  'https://prothom-feni.com/'
]

class ProthomFeni extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls, true)
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.post-content img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('li .single-tab.fix h4 a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.post-content')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default ProthomFeni
