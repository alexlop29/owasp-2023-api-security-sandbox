const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

/*
Assumes the server has started already!
*/
const getAuthenticationCookie = async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // does this follow redirects
    await driver.get("http://localhost:3000/login");
    const username = await driver
      .findElement(By.tagName("input") && By.name("username"))
      .sendKeys("alexanderlopez@owasp.orgs");
    console.log(username);
  } finally {
    await driver.quit();
  }
};

// (async function example() {
//   let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
//   try {
//     await driver.get("https://www.google.com/ncr");
//     await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
//     await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
//   } finally {
//     await driver.quit();
//   }
// })();

export { getAuthenticationCookie };
