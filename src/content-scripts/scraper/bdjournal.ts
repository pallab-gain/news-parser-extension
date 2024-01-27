import { AbastractNewspaper } from './_base/newspaper'

const paperName = 'বাংলাদেশ জার্নাল'
const paperImage = 'https://www.bd-journal.com/templates/web-v1/images/logo.png?v=1.7'
const urls = [
  'https://www.bd-journal.com/all-news',
  'https://www.bd-journal.com/bangladesh'
]

class BDJournal extends AbastractNewspaper {
  constructor () {
    super(paperName, paperImage, urls)
  }

  getTags (): string[] {
    const result = [...document.querySelectorAll('#tags_list a')].map(element => element.textContent)

    return result
  }

  getImages (): string[] {
    const mainImage = [...document.querySelectorAll('meta[property="og:image"]')].map(element => element.content)
    const otherImages = [...document.querySelectorAll('.dtl_img_section img')].map(element => element.src)
    return [...mainImage, ...otherImages]
  }

  getLink (): string[] {
    const result = [...document.querySelectorAll('.all_news_content_block a, .lead_top a, .lead_bottom a, .cat_summary_display_one a')]
      .map(element => element.href)
    return result
  }

  getContent (): string {
    const result = [...document.querySelectorAll('#newsDtl')]
      .filter((element, index) => index === 0)
      .map(element => [...element.querySelectorAll('p')].map(item => item.textContent).join('\n\n'))
      .join('\n\n')
    return result
  }
}

export default BDJournal
