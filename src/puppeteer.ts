import puppeteer from 'puppeteer';
import Response from './models/response';

async function Puppeteer(name: string): Promise<Response | null> {
  let browser;
  try {
    browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?client=opera-gx&q=clima+em+${name}&sourceid=opera&ie=UTF-8&oe=UTF-8`);
    await page.setViewport({ width: 1080, height: 1024 });
    await page.type('input[name="q"]', 'automate beyond recorder');

    const temperature = await page.evaluate(() => {
      const element = document.querySelector('#wob_tm');
      return element ? element.textContent : null;
    });

    const rain = await page.evaluate(() => {
      const element = document.querySelector('#wob_pp');
      return element ? element.textContent : null;
    });

    const temp = await page.evaluate(() => {
      const element = document.querySelector('#wob_dc');
      return element ? element.textContent : null;
    });

    const humidity = await page.evaluate(() => {
      const element = document.querySelector('#wob_hm');
      return element ? element.textContent : null;
    });

    const img = await page.evaluate(() => {
      const element = document.querySelector('#wob_tci') as HTMLImageElement | null;
      return element ? element.src : null;
    });

    return new Response(temperature, rain, humidity, temp, img);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
    return null;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

export default Puppeteer;