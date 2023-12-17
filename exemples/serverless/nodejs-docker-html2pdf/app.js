const puppeteer = require("puppeteer");

async function initBrowser() {
    if (typeof page === "undefined") {
        var browser = puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });
    
        var page = await browser.newPage();
    }
}

module.exports.handler = async (event) => {
    await initBrowser();

    let body;
    try {
        body = event.body;
        body = JSON.parse(body);
    } catch (e) {
        return { statusCode: 400, body: JSON.stringify({ code: 400, message: "Unable to parse json content." }) };
    }

    const url = body.url;
    if (url == null) {
        return {
            statusCode: 400,
            body: JSON.stringify({ code: 400, message: "url is required" })
        }
    }

    await page.goto(url, { waitUntil: "networkidle0" });

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
