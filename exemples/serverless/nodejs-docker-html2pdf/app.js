/**
 * @api {post} /pdf Generate PDF
 * @apiName Generate PDF
 *
 * Fonction serverless pour générer un PDF via Puppeteer.
 *
 */

const puppeteer = require("puppeteer");

async function initBrowser() {
    if (typeof page === "undefined") {
        var browser = await puppeteer.launch({
            executablePath: process.env.CHROMIUM_PATH || null,
            headless: true,
            args: [
                '--user-data-dir=/tmp/chromium-user-data',
                '--no-sandbox',
                '--single-process',
                '--no-zygote',
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--no-first-run',
                '--disable-setuid-sandbox',
                '--disable-infobars',

                '--disable-default-apps',
                '--disable-background-networking',
                '--disable-background-timer-throttling',
                '--disable-breakpad',
                '--disable-client-side-phishing-detection',
                '--disable-component-update',
                '--disable-domain-reliability',
                '--disable-extensions',
                '--disable-features=AudioServiceOutOfProcess',
                '--disable-notifications',
                '--disable-ipc-flooding-protection',
                '--disable-hang-monitor',
                '--disable-offer-store-unmasked-wallet-cards',
                '--disable-popup-blocking',
                '--disable-print-preview',
                '--disable-prompt-on-repost',
                '--disable-renderer-backgrounding',
                '--disable-speech-api',
                '--disable-sync',
                '--disk-cache-size=33554432',
                '--hide-scrollbars',
                '--ignore-gpu-blocklist',
                '--metrics-recording-only',
                '--mute-audio',
                '--no-default-browser-check',
                '--no-pings',
                '--password-store=basic',
                '--use-gl=swiftshader',
                '--use-mock-keychain'
            ]
        });
    
        var page = await browser.newPage();
    }
}

/**
 * @param {object} event
 * @returns {object}
 * 
 * event.body.url : URL de la page à convertir en PDF
 * ou
 * event.body.html: HTML à convertir en PDF
 */
module.exports.handler = async (event) => {
    console.log("event", event)

    await initBrowser();

    let body;
    try {
        body = event.body;
        body = JSON.parse(body);
    } catch (e) {
        return { statusCode: 400, body: JSON.stringify({ code: 400, message: "Unable to parse json content." }) };
    }

    const url = body.url;
    const html = body.html;
    if (url == null && html == null) {
        return {
            statusCode: 400,
            body: JSON.stringify({ code: 400, message: "\"url\" or \"html\" is required" })
        }
    }

    if (url) {
        await page.goto(url, { waitUntil: "networkidle0" });
    } else {
        await page.setContent(html);
    }

    const buffer = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: {
            top: "20px",
            bottom: "40px",
            left: "20px",
            right: "20px"
        }
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ pdf: { base64: buffer.toString('base64') } })
    };
};
