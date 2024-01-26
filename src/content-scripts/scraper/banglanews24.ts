import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'বাংলানিউজ২৪'
const paperImage = 'https://www.banglanews24.com/public/desktop/img/bn24_logo_3.jpg'
const urls = [
  'https://www.banglanews24.com/',
  'https://www.banglanews24.com/category/%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A7%9F/1'
]

class Banglanews24 extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.related_tag a')].map(element => element.textContent)
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll(['.news-article img'])].map(element => element.src)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.latest-readers-tab #latest a, .category-area a')].map(element => element.href)
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('article')].map(element => {
      return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
    })
      .join('\n\n')
    return result
  }
}

export default Banglanews24
