import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'BBC News বাংলা'
const paperImage = 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/BBC_Bangla_logo.svg/440px-BBC_Bangla_logo.svg.png'
const urls = [
  'https://www.bbc.com/bengali',
  'https://www.bbc.com/bengali/topics/c907347rezkt'
]

class BBCBangla extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('[aria-labelledby="related-topics"] a')].map(element => element.textContent)
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll('main img')].map(element => element.src)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('section[aria-labelledby="প্রধান-খবর"] a, div[data-testid="curation-grid-normal"] a')].map(element => element.href)
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('main')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p[dir="ltr"]')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default BBCBangla
