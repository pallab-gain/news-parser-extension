import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'আলোকিত বাংলাদেশ'
const paperImage = 'https://www.alokitobangladesh.com/templates/desktop-v1/images/logo.png'
const urls = [
  'https://www.alokitobangladesh.com/all-news',
  'https://www.alokitobangladesh.com/country-news'
]

class AlokitoBangladesh extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('#tags_list a')].map(element => element.textContent)
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll('.dtl_img_block img')].map(item => item.src)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.allnews a, #latest_contents_block a')].map(item => item.href)
    return result
  }

  getContent (): string {
    return [...document.querySelectorAll('.dtl_content_block')]
      .filter((element, index) => index === 0)
      .map(element => {
        const paragraphElements = element.querySelectorAll('p')
        const result = [...paragraphElements].map(item => item.textContent).join('\n\n')
        return result
      }).join('\n\n')
  }
}

export default AlokitoBangladesh
