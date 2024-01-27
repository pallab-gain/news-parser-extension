import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'চকরিয়া নিউজ'
const paperImage = 'https://chakarianews.com/wp-content/uploads/2021/05/CN2.jpg'
const urls = [
  'https://chakarianews.com/'
]

class ChakariaNews extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls, true)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.breadcrumbs .item-cat a')].map(element => {
      return element.textContent
    })

    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.entryimage-container img')].map(element => element.src)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.lead-latest a')].map(element => {
      return element.href
    })
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

export default ChakariaNews
