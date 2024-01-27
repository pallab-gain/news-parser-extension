import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'ময়মনসিংহ প্রতিদিন'
const paperImage = 'https://mymensinghpratidin.com/wp-content/uploads/2023/08/MP.png'
const urls = [
  'https://mymensinghpratidin.com/'
]

class MMProtidin extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.td-category a')].map(element => {
      return element.textContent
    })

    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('img.wp-post-image')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('#home .tab_heading a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.single_contant')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default MMProtidin
