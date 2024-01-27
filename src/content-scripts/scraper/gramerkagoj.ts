import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'গ্রামের কাগজ'
const paperImage = 'https://www.gramerkagoj.com/login/public/storage/about/logo-2023-08-21-64e2f191e8483.jpg'
const urls = [
  'https://gramerkagoj.com/last.php?type=%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%B6%E0%A7%87%E0%A6%B7%20%E0%A6%B8%E0%A6%82%E0%A6%AC%E0%A6%BE%E0%A6%A6'
]

class GramerKagoj extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls, true)
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.details img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('#body_news a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.details')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default GramerKagoj
