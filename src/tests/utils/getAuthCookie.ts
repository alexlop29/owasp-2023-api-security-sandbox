import { AUTH_USER, AUTH_PASSWORD } from "../../config/environment";

const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

type authenticationCookie = {
  domain: string;
  expiry: number;
  httpOnly: boolean;
  name: string;
  path: string;
  sameSite: string;
  secure: boolean;
  value: string;
};

const getAuthenticationCookie = async () => {
  let chromeOptions = new chrome.Options();
  chromeOptions.addArguments("--headless");
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
  try {
    await driver.get("http://localhost:3001/login");
    await driver.findElement(By.id("username")).sendKeys(AUTH_USER);
    await driver.findElement(By.id("password")).sendKeys(AUTH_PASSWORD);
    await driver
      .findElement(
        By.xpath(
          "/html/body/div/main/section/div/div[2]/div/form/div[3]/button",
        ),
      )
      .click();
    let cookieValue = await driver
      .manage()
      .getCookie("appSession")
      .then(function (cookie: authenticationCookie) {
        return cookie["value"];
      });
    return cookieValue;
  } catch (error) {
    console.log(`Unable to fetch authentication cookie`, error);
  } finally {
    await driver.quit();
  }
};

export { getAuthenticationCookie };
