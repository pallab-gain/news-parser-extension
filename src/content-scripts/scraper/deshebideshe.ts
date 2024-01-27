import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'দেশে বিদেশে'
const paperImage = 'https://www.deshebideshe.com/wp-content/uploads/2023/02/news-logo-.png'
const urls = [
  'https://www.deshebideshe.com/',
  'https://www.deshebideshe.com/category/bangladesh/national/',
  'https://www.deshebideshe.com/category/bangladesh/dhaka-division/',
  'https://www.deshebideshe.com/category/bangladesh/chattogram-division/'
]

class DesheBideshe extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  removeAds (): void {
    super.removeAds()
    document.querySelectorAll('a[title="Deshe Bideshe"]').forEach((element: { remove: () => void }) => {
      element.remove()
    })
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('a.post-cat')].map(element => {
      return element.textContent
    })
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.entry-content img')].map(element => {
      return element.src
    })

    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('a.all-over-thumb-link, h2.post-title a, h2.post-title a, h2.post-title a')].map(element => {
      return element.href
    })
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('.entry-content')].map(element => {
      return [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n')
    }).join('\n\n')
    return result
  }
}

export default DesheBideshe
