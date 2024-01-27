import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'লক্ষ্মীপুর24.কম'
const paperImage = 'https://lakshmipur24.news/wp-content/uploads/2023/12/Lakshmipur-24.png'
const urls = [
  'https://lakshmipur24.news/?s&post_type=post'
]

class Lakshmiput24 extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls, true)
  }

  getTitle (): string {
    const title = [...document.querySelectorAll('head > title')].map(element => {
      return element.textContent
    }).join('')
    return title
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.entry-taxonomies a')].map(element => {
      return element.textContent
    })
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.entry-feature-box-media img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.fn-archive-content h3.item-title a')].map(element => {
      return element.href
    })

    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.entry-body')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default Lakshmiput24
