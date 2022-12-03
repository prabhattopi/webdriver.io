//alliace *as* in javaascript

import { expect as chaiExpect } from "chai";
import watchesPages from "../pages/watches.pages";
import WatchesPage from "../pages/watches.pages";
describe("watches", () => {
  // after(async ()=>{
  //   await browser.url('https://www.ebay.com')
  // })

  //  afterEach(()=>
  //   browser.refresh()
  //  })

  before(async () => {
      WatchesPage.open();
        watchesPages.fashionLink.moveTo();
    // await browser.pause(1000)//Implicit Wait    not recommended by the browser

    await watchesPages.WatchesLink.waitForDisplayed({ timeout:1000 });
    await watchesPages.WatchesLink.click();
  });

  it("should verify the watches category List", async () => {
    const watchesCategoryList = await WatchesPage.getWatchesCategoryListText();
    chaiExpect(watchesCategoryList).to.deep.equal([
      "Watches",
      "Wristwatches",
      "Pocket Watches",
      "Other Watches",
    ]);
  });
  it("show the banner container", async () => {
    watchesPages.open();
    const promoBanner = $("div.title-banner__right-image");
    await expect(promoBanner).toBeDisplayed();//explicit wait
  });
  it("Banner Title", async () => {
    await expect(WatchesPage.infoTitle).toHaveTextContaining("Wrist");
  });
  it("should contain link on list data button and verify", async () => {
    await expect(WatchesPage.shopButton).toHaveLinkContaining("/Casio/");
    await expect(watchesPages.shopButton).toBeClickable();
  });
  it("should click the shop button and verify new url", async () => {
    await watchesPages.shopButton.click();
    const url = await browser.getUrl();
    chaiExpect(url).to.include("/Casio-Watches/");

    await expect(browser).toHaveUrl(
      "https://www.ebay.com/b/Casio-Watches/31387/bn_2973204"
    );
  });
});
