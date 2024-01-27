import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'বণিক বার্তা'
const paperImage = 'https://bonikbarta.net/uploads/logo_image/bonikbarta_logo.png'
const urls = [
  'https://bonikbarta.net',
  'https://bonikbarta.net/home/desherbarta/10/0'
]
class BanikBarta extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.post-body')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('.btn-tag')].map(item => item.textContent)
      }).flat(1)

    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)

    const otherImages = [...document.querySelectorAll('.news_main_contents')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('img')].map(item => item.src)
      }).flat(1)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.recent-news .media-heading a, .news_content h4 a')]
      .map(element => element.href)
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.news_main_contents')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}
export default BanikBarta
