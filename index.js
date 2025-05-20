import puppeteer from 'puppeteer';
import https from 'https';

async function hasInternetConnection() {
    return new Promise((resolve) => {
        const req = https.request({
            method: 'HEAD',
            host: 'www.google.com',
            path: '/',
            timeout: 2000,
        }, (res) => {
            resolve(true);
        });
        req.on('error', () => resolve(false));
        req.on('timeout', () => {
            req.destroy();
            resolve(false);
        });
        req.end();
    });
}

(async () => {
    if (await hasInternetConnection()) {
        console.log('Internet connection detected. Exiting.');
        return;
    }

    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        args: ['--disable-features=HttpsFirstBalancedModeAutoEnable', "--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('http://www.gstatic.com/generate_204');

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    await page.waitForSelector("#email");
    // Enter email
    await page.type('#email', 'why@arewedoingthis.com');
    await page.click("#agreement_agree")
    await page.click("a.button-box.login")

    // Wait for the page to load
    await page.waitForNavigation();
    await page.waitForSelector('input[name="cmd"]');
    // Print the full title
    //console.log('The title of this blog post is "%s".', fullTitle);
    console.log("found logout button");

    await browser.close();
})();