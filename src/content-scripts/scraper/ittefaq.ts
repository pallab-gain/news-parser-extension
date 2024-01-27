import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'দৈনিক ইত্তেফাক'
const paperImage = 'https://flashn3ws-scraper.fly.dev/api/v1/dist/daily-ittefaq.jpg'
const urls = [
  'https://www.ittefaq.com.bd/latest-news',
  'https://www.ittefaq.com.bd/country'
]

class Ittefaq extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('.topic_list a')].map(element => {
      return element.textContent
    })
    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => {
      return element.content
    })
    const otherImages = [...document.querySelectorAll('.featured_image img, div[itemprop="articleBody"] img, .gallery-content img')].map(element => {
      return element.src
    })
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.tag_title_holder a')].map(element => {
      return element.href
    })

    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('p[class="alignfull"]')].map(element => {
      return element.textContent
    }).join('\n\n')
    return result
  }
}

export default Ittefaq
