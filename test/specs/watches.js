//alliace *as* in javaascript

import { expect as chaiExpect } from "chai";

import WatchesPage from "../pages/watches.pages";
import resources from "../resources";
import { waitAndClcik } from "../utilities/helper";
describe("watches", () => {
  // after(async ()=>{
  //   await browser.url('https://www.ebay.com')
  // })

  //  afterEach(()=>
  //   browser.refresh()
  //  })

  before(async () => {
    WatchesPage.open();
    WatchesPage.fashionLink.moveTo();
    // await browser.pause(1000)//Implicit Wait    not recommended by the browser

    await waitAndClcik(WatchesPage.WatchesLink, 5000);
  });

  it("should verify the watches category List", async () => {
    const watchesCategoryList = await WatchesPage.getWatchesCategoryListText();
    console.log(watchesCategoryList);
    chaiExpect(watchesCategoryList).to.deep.equal(resources.watchesCategoryArray);
  });
  it("show the banner container", async () => {
    WatchesPage.open();
    const promoBanner = $("div.title-banner__right-image");
    await expect(promoBanner).toBeDisplayed(); //explicit wait
  });
  it("Banner Title", async () => {
    await expect(WatchesPage.infoTitle).toHaveTextContaining("Wrist");
  });
  it("should contain link on list data button and verify", async () => {
    await expect(WatchesPage.shopButton).toHaveLinkContaining("/Casio/");
    await expect(WatchesPage.shopButton).toBeClickable();
  });
  it("should click the shop button and verify new url", async () => {
    await WatchesPage.shopButton.click();
    const url = await browser.getUrl();
    chaiExpect(url).to.include("/Casio-Watches/");

    await expect(browser).toHaveUrl(
      "https://www.ebay.com/b/Casio-Watches/31387/bn_2973204"
    );
  });
});
