import alokitobangladesh from '../scraper/alokitobangladesh'
import { type Details, type Link } from '../../types/message'

const newspapers = [
  new alokitobangladesh()
]

const getAllUrls = (): string[] => {
  return newspapers.map((newspaper) => {
    return newspaper.urls
  }).flat(1)
}

const getAllUrlsForPaper = (paper: string): string[] => {
  return newspapers
    .filter((newspaper) => newspaper.name === paper)
    .map((newspaper) => {
      return newspaper.urls
    }).flat(1)
}

const getContentUrls = (url: string): Link[] => {
  const newspaper = newspapers.find((newspaper) => {
    return newspaper.urls.includes(url)
  })
  if (!newspaper) {
    throw new Error('newspaper not found')
  }
  const links = newspaper.getNewsLinks()
  const retval = links
    .map((link): Link => {
      return {
        paper: newspaper.name,
        url: link
      }
    })

  return retval
}

const getNewsContent = (link: Link): Details => {
  const newspaper = newspapers.find((newspaper) => {
    return newspaper.name === link.paper
  })
  if (!newspaper) {
    throw new Error('newspaper not found')
  }

  const content = newspaper.getNewsContent({ link: link.url })
  return content
}

export { getAllUrls, getAllUrlsForPaper, getContentUrls, getNewsContent }
