import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'সুপ্রভাত বাংলাদেশ'
const paperImage = 'https://suprobhat.com/wp-content/uploads/2020/05/Logo.png'
const urls = [
  'https://suprobhat.com/',
  'https://www.bd-journal.com/bangladesh'
]

class SuprovatBD extends AbastractNewspaper {
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
    const otherImages = [...document.querySelectorAll('.td-post-content img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.entry-title.td-module-title a, .td-main-content .item-details a')].map(element => {
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

export default SuprovatBD
