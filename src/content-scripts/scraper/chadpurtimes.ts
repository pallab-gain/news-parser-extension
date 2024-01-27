import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'চাঁদপুর টাইমস'
const paperImage = 'https://chandpurtimes.com/wp-content/uploads/2019/09/Logo-Chandpur-Times-300x75.png'
const urls = [
  'https://chandpurtimes.com/'
]

class ChadpurTimes extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls, true)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('#crumbs a:not(:first-child)')].map(element => element.textContent)
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll('.single-post-thumb img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.posts-list .widget-container a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.post-inner .entry')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default ChadpurTimes
