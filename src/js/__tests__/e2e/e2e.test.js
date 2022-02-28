import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
  test('check valid card Mastercard', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validator-input');
    const button = await page.$('.validator-button');
    await input.type('5205999264887386');
    await button.click();
    await page.waitForSelector('.validator-message-container');
  });
  test('check valid card Visa', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validator-input');
    await input.type('4929516490693639144');
    await input.press('Enter');
    await page.waitForSelector('.validator-message-container');
  });
  test('check valid card Maestro', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validator-input');
    const button = await page.$('.validator-button');
    await input.type('6762826111700384');
    await button.click();
    await page.waitForSelector('.validator-message-container');
  });
  test('check valid card JCB', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validator-input');
    await input.type('3540982359274475635');
    await input.press('Enter');
    await page.waitForSelector('.validator-message-container');
  });
  test('check not valid card', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validator-input');
    const button = await page.$('.validator-button');
    await input.type('6542224663786');
    await button.click();
    await page.waitForSelector('.validator-message-container');
  });
  test('check not valid card', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validator-input');
    await input.type('24940177020202');
    await input.press('Enter');
    await page.waitForSelector('.validator-message-container');
  });
  test('check valid not determined card', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validator-input');
    await input.type('6378696668839513');
    await input.press('Enter');
    await page.waitForSelector('.validator-message-container');
  });
  test('check valid not determined card', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.validator-input');
    const button = await page.$('.validator-button');
    await input.type('6399574315490995');
    await button.click();
    await page.waitForSelector('.validator-message-container');
  });
});
