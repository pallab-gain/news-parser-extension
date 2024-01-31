import { type Details, type Link } from '../../types/message'
import AlokitoBangladesh from '../scraper/alokitobangladesh'
import Amathersomoy from '../scraper/amathersomoy'
import Azadi from '../scraper/azadi'
import Banglanews24 from '../scraper/banglanews24'
import Banikbarta from '../scraper/banikbarta'
import Bbc24news from '../scraper/bbc24news'
import BBCBangla from '../scraper/bbcbangla'
import BDProtidin from '../scraper/bd-protidin'
import BDJournal from '../scraper/bdjournal'
import Bhorerkagoj from '../scraper/bhorerkagoj'
import Chadpurtimes from '../scraper/chadpurtimes'
import Chakarianews from '../scraper/chakarianews'
import Coxbazarnews from '../scraper/coxbazarnews'
import DailyInqilab from '../scraper/dailyinqilab'
import Dailysangram from '../scraper/dailysangram'
import DailyStarbangla from '../scraper/dailystarbangla'
import DainikBangla from '../scraper/dainikbangla'
import Deshebideshe from '../scraper/deshebideshe'
import Gramerkagoj from '../scraper/gramerkagoj'
import Ittefaq from '../scraper/ittefaq'
import Jagonews24 from '../scraper/jagonews24'
import Jaijaidin from '../scraper/jaijaidin'
import Janakantha from '../scraper/janakantha'
import Jugantor from '../scraper/jugantor'
import Lakshmiput24 from '../scraper/lakshmiput24'
import Manobkantha from '../scraper/manobkantha'
import MMProtidin from '../scraper/mmprotidin'
import MZamin from '../scraper/mzamin'
import Nayadiganta from '../scraper/nayadiganta'
import ProthomAlo from '../scraper/prothom-alo'
import Prothomfeni from '../scraper/prothomfeni'
import Purbanchal from '../scraper/purbanchal'
import Rajshahinews24 from '../scraper/rajshahinews24'
import Somokal from '../scraper/somokal'
import Suprovatbd from '../scraper/suprovatbd'
import Sylhetexpress from '../scraper/sylhetexpress'
import Dhakapost from '../scraper/dhakapost'

const newspapers = [
  new AlokitoBangladesh(),
  new Amathersomoy(),
  new Azadi(),
  new Banglanews24(),
  new Banikbarta(),
  new Bbc24news(),
  new BBCBangla(),
  new BDProtidin(),
  new BDJournal(),
  new Bhorerkagoj(),
  new Chadpurtimes(),
  new Chakarianews(),
  new Coxbazarnews(),
  new DailyInqilab(),
  new Dailysangram(),
  new DailyStarbangla(),
  new DainikBangla(),
  new Deshebideshe(),
  new Gramerkagoj(),
  new Ittefaq(),
  new Jagonews24(),
  new Jaijaidin(),
  new Janakantha(),
  new Jugantor(),
  new Lakshmiput24(),
  new Manobkantha(),
  new MMProtidin(),
  new MZamin(),
  new Nayadiganta(),
  new ProthomAlo(),
  new Prothomfeni(),
  new Purbanchal(),
  new Rajshahinews24(),
  new Somokal(),
  new Suprovatbd(),
  new Sylhetexpress(),
  new Dhakapost()
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
  if (newspaper == null) {
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
  if (newspaper == null) {
    throw new Error('newspaper not found')
  }

  const content = newspaper.getNewsContent({ link: link.url })
  return content
}

export { getAllUrls, getAllUrlsForPaper, getContentUrls, getNewsContent }
