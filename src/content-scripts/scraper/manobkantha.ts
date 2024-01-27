import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'মানবকণ্ঠ'
const paperImage = 'https://manage.manobkantha.com.bd/files/uploads/SA-Logo-Re.png?v=1'
const urls = [
  'https://www.manobkantha.com.bd/archive',
  'https://www.manobkantha.com.bd/country?division_id=1',
  'https://www.manobkantha.com.bd/country?division_id=2',
  'https://www.manobkantha.com.bd/country?division_id=5',
  'https://www.manobkantha.com.bd/country?division_id=3',
  'https://www.manobkantha.com.bd/country?division_id=7',
  'https://www.manobkantha.com.bd/country?division_id=8',
  'https://www.manobkantha.com.bd/country?division_id=6',
  'https://www.manobkantha.com.bd/country?division_id=4'
]

class Manabkantha extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.category-title a')].map(element => {
      return element.textContent
    })
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.post-content img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.card-title a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.post-content')]
      .filter((element, index) => index === 0)
      .map(element => {
        return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
      }).join('\n\n')
    return result
  }
}

export default Manabkantha
