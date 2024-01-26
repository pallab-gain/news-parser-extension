import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'দৈনিক আজাদী'
const paperImage = 'https://dainikazadi.net/wp-content/uploads/logo/azadi_logo.png'
const urls = [
  'https://dainikazadi.net/category/%e0%a6%b8%e0%a6%b0%e0%a7%8d%e0%a6%ac%e0%a6%b6%e0%a7%87%e0%a6%b7/'
]

class Azadi extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')]
      .map(element => element.content)

    const otherImages = [...document.querySelectorAll('.td-post-content img')]
      .map(element => element.src)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.td-module-title a')]
      .map(element => element.href)

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

export default Azadi
