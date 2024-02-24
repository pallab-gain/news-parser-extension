import { type Details } from '../../../types/message'
import { wait } from '../../../utils/utils'

class AbastractNewspaper {
  private readonly _paper: string
  private readonly _paperImage: string
  private readonly _urls: string[]
  private readonly _isLocal: boolean

  constructor (_paper: string, _paperImage: string, _urls: string[], _isLocal: boolean = false) {
    this._paper = _paper
    this._paperImage = _paperImage
    this._urls = _urls
    this._isLocal = _isLocal
  }

  get name (): string {
    return this._paper
  }

  get paperImage (): string {
    return this._paperImage
  }

  public get urls (): string[] {
    return this._urls
  }

  get isLocal (): boolean {
    return this._isLocal
  }

  removeAds (): void {
    document.querySelectorAll('.googleNewsLink, script, [class*="ads"], #inline-related-post, noscript, .adv-img, .advertisement').forEach((element: { remove: () => void }) => { element.remove() })
  }

  getTitle (): string {
    const titles = [...document.querySelectorAll('meta[property="og:title"]')].map(element => element.content)
    return titles?.[0]
  }

  getSummary (): string {
    const summaries = [...document.querySelectorAll('meta[property="og:description"]')].map(element => element.content)
    return summaries?.[0]
  }

  getTags (): string[] {
    return []
  }

  getImages (): string[] {
    return []
  }

  getLink (): string[] {
    throw new Error('Not implemented')
  }

  getContent (): string {
    throw new Error('Not implemented')
  }

  async getNewsLinks (): Promise<string[]> {
    let links: string[] = []
    try {
      links = this.getLink()
    } catch (e) {
      console.info('error getting url', e)
    }

    return links
  }

  async getNewsContent (props: { link: string }): Promise<Details> {
    let details: Details = {} as Details
    try {
      this.removeAds()
      await wait(5 * 1000)
      const title = this.getTitle() ?? ''
      const summary = this.getSummary() ?? ''
      const tags = this.getTags()?.filter(item => !!item) ?? []
      const images = this.getImages()?.filter(item => !!item) ?? []
      const content = this.getContent() ?? ''
      details = {
        title,
        summary,
        content,
        link: props.link,
        tags,
        images,
        paper: this._paper,
        paperImage: this._paperImage,
        isLocal: this._isLocal
      }
    } catch (e) {
      console.info('-> error getting content', e)
    }

    return details
  }
}

export { AbastractNewspaper }
