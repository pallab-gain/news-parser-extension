import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'বিবিসি ২৪ নিউজ'
const paperImage = 'https://www.bbc24news.com/cloud/archives/fileman/bbc-logo.jpg'
const urls = [
  'https://www.bbc24news.com/',
  'https://www.bbc24news.com/section/%e0%a6%9c%e0%a6%be%e0%a6%a4%e0%a7%80%e0%a7%9f'
]

class BBC24News extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('#content > .noprint > a[rel="category tag"]')].map(element => element.textContent)
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll(['#single img'])].map(element => element.src)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.entry-content a, .category .catbox a')].map(element => element.href)
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('#single')].map(element => {
      return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
    })
      .join('\n\n')
    return result
  }
}

export default BBC24News
