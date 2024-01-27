import { browser } from '../browser-singleton'
import { getExtensionPath } from '../extension/extension'
import ProthomAlo from './prothom-alo'
import Ittefaq from './ittefaq'
import BDProtidin from './bd-protidin'
import NayaDiganta from './nayadiganta'
import Jugantor from './jugantor'
import Dailysangram from './dailysangram'
import Mzamin from './mzamin'
import Amathersomoy from './amathersomoy'
import Banikbarta from './banikbarta'
import Somokal from './somokal'
import Janakantha from './janakantha'
import Jaijaidin from './jaijaidin'
import Bhorerkagoj from './bhorerkagoj'
import Deshebideshe from './deshebideshe'
import BBC24News from './bbc24news'
import Jagonews24 from './jagonews24'
import Banglanews24 from './banglanews24'
import Dainikbangla from './dainikbangla'
import AlokitoBangladesh from './alokitobangladesh'
import BDJournal from './bdjournal'
import SuprovatBD from './suprovatbd'
import Manabkantha from './manobkantha'
import DailyInqilab from './dailyinqilab'
import BBCBangla from './bbcbangla'
import DailyStarbangla from './dailystarbangla'
import Purbanchal from './purbanchal'
import Azadi from './azadi'
import MMProtidin from './mmprotidin'
import Gramerkagoj from './gramerkagoj'
import Chakarianews from './chakarianews'
import ProthomFeni from './prothomfeni'
import Lakshmiput24 from './lakshmiput24'
import Sylhetexpress from './sylhetexpress'
import ChadpurTimes from './chadpurtimes'
import Rajshahinews24 from './rajshahinews24'
import Coxbazarnews from './coxbazarnews'

jest.setTimeout(60000)
beforeAll(async () => {
  const extensionPath = getExtensionPath()
  await browser.launch({extensionPath})
})
afterAll(async () => {
  await browser.dispose()
})
test('prothom-alo', async () => {
  const paper = new ProthomAlo()
  const links = await paper.getNewsLinks({link: 'https://www.prothomalo.com/opinion'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[4]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('ittefaq', async () => {
  const paper = new Ittefaq()
  const links = await paper.getNewsLinks({link: 'https://www.ittefaq.com.bd/latest-news'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[4]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('bdprotidin', async () => {
  const paper = new BDProtidin()
  const links = await paper.getNewsLinks({link: 'https://www.bd-pratidin.com/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[4]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('nayadiganta', async () => {
  const paper = new NayaDiganta()
  const links = await paper.getNewsLinks({link: 'https://www.dailynayadiganta.com/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[4]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('jugantor', async () => {
  const paper = new Jugantor()
  const links = await paper.getNewsLinks({link: 'https://www.jugantor.com/all-news'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[4]})
  expect(details).toHaveProperty('title')
  console.info(details)
})


test('dailysangram', async () => {
  const paper = new Dailysangram()
  const links = await paper.getNewsLinks({link: 'https://dailysangram.com'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[4]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('mzamin', async () => {
  const paper = new Mzamin()
  const links = await paper.getNewsLinks({link: 'https://mzamin.com'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[4]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('amathersomoy', async () => {
  const paper = new Amathersomoy()
  const links = await paper.getNewsLinks({link: 'https://dainikamadershomoy.com/latest/all'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[4]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('banikbarta', async () => {
  const paper = new Banikbarta()
  const links = await paper.getNewsLinks({link: 'https://bonikbarta.net'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[4]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('somokal', async () => {
  const paper = new Somokal()
  const links = await paper.getNewsLinks({link: 'https://samakal.com/bangladesh'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[1]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('janakantha', async () => {
  const paper = new Janakantha()
  const links = await paper.getNewsLinks({link: 'https://www.dailyjanakantha.com/archives/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('jaijaidin', async () => {
  const paper = new Jaijaidin()
  const links = await paper.getNewsLinks({link: 'https://www.jaijaidinbd.com/all-news'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('bhorerkagoj', async () => {
  const paper = new Bhorerkagoj()
  const links = await paper.getNewsLinks({link: 'https://www.bhorerkagoj.com/latest'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('deshebideshe', async () => {
  const paper = new Deshebideshe()
  const links = await paper.getNewsLinks({link: 'https://www.deshebideshe.com/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('bbc24news', async () => {
  const paper = new BBC24News()
  const links = await paper.getNewsLinks({link: 'https://www.bbc24news.com/section/%e0%a6%9c%e0%a6%be%e0%a6%a4%e0%a7%80%e0%a7%9f'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('jagonews24', async () => {
  const paper = new Jagonews24()
  const links = await paper.getNewsLinks({link: 'https://www.jagonews24.com/archive'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})


test('banglanews24', async () => {
  const paper = new Banglanews24()
  const links = await paper.getNewsLinks({link: 'https://www.banglanews24.com/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('dainikbangla', async () => {
  const paper = new Dainikbangla()
  const links = await paper.getNewsLinks({link: 'https://www.dainikbangla.com.bd/allnews'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('alokitobangladesh', async () => {
  const paper = new AlokitoBangladesh()
  const links = await paper.getNewsLinks({link: 'https://www.alokitobangladesh.com/all-news'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('bdjournal', async () => {
  const paper = new BDJournal()
  const links = await paper.getNewsLinks({link: 'https://www.bd-journal.com/all-news'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('suprovatbd', async () => {
  const paper = new SuprovatBD()
  const links = await paper.getNewsLinks({link: 'https://suprobhat.com/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('manobkantha', async () => {
  const paper = new Manabkantha()
  const links = await paper.getNewsLinks({link: 'https://www.manobkantha.com.bd/country?division_id=1'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('dailyinqilab', async () => {
  const paper = new DailyInqilab()
  const links = await paper.getNewsLinks({link: 'https://dailyinqilab.com/archive'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})


test('bbcbangla', async () => {
  const paper = new BBCBangla()
  const links = await paper.getNewsLinks({link: 'https://www.bbc.com/bengali'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('thedailystarbangla', async () => {
  const paper = new DailyStarbangla()
  const links = await paper.getNewsLinks({link: 'https://bangla.thedailystar.net/todays-news'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('pubanchal', async () => {
  const paper = new Purbanchal()
  const links = await paper.getNewsLinks({link: 'https://purbanchal.com'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('azadi', async () => {
  const paper = new Azadi()
  const links = await paper.getNewsLinks({link: 'https://dainikazadi.net/category/%e0%a6%b8%e0%a6%b0%e0%a7%8d%e0%a6%ac%e0%a6%b6%e0%a7%87%e0%a6%b7/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('mmprotidin', async () => {
  const paper = new MMProtidin()
  const links = await paper.getNewsLinks({link: 'https://mymensinghpratidin.com/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('gramerkagoj', async () => {
  const paper = new Gramerkagoj()
  const links = await paper.getNewsLinks({link: 'https://gramerkagoj.com/last.php?type=%E0%A6%B8%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%B6%E0%A7%87%E0%A6%B7%20%E0%A6%B8%E0%A6%82%E0%A6%AC%E0%A6%BE%E0%A6%A6'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})


test('chakarianews', async () => {
  const paper = new Chakarianews()
  const links = await paper.getNewsLinks({link: 'https://chakarianews.com/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('prothomfeni', async () => {
  const paper = new ProthomFeni()
  const links = await paper.getNewsLinks({link: 'https://prothom-feni.com/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('lakshmiput24', async () => {
  const paper = new Lakshmiput24()
  const links = await paper.getNewsLinks({link: 'https://lakshmipur24.news/?s&post_type=post'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('sylhetexpress', async () => {
  const paper = new Sylhetexpress()
  const links = await paper.getNewsLinks({link: 'https://sylhetexpress.net/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('chadpurtimes', async () => {
  const paper = new ChadpurTimes()
  const links = await paper.getNewsLinks({link: 'https://chandpurtimes.com/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})


test('rajshahinews24', async () => {
  const paper = new Rajshahinews24()
  const links = await paper.getNewsLinks({link: 'https://rajshahinews24.com/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})

test('coxbazernews', async () => {
  const paper = new Coxbazarnews()
  const links = await paper.getNewsLinks({link: 'https://www.coxsbazarnews.com/'})
  // eslint-disable-next-line jest/valid-expect
  expect(links.length > 0)
  const details = await paper.getNewsContent({link: links[0]})
  expect(details).toHaveProperty('title')
  console.info(details)
})
