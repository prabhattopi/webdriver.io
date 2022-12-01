//alliace *as* in javaascript

import { expect as chaiExpect } from "chai";
describe("watches", () => {
  it("show the banner container", () => {
    browser.url("https://www.ebay.com/b/Wristwatches/31387/bn_2408451");
    const promoBanner = $("div.title-banner__right-image");
    expect(promoBanner).toBeDisplayed();
  });
  it("Banner Title", () => {
    const infoTitle = $("h1.title-banner__title");
    expect(infoTitle).toHaveTextContaining("Wristwatch");
  });
  it("should contain link on list data button and verify", () => {
    const shopButton = $(".b-visualnav__tile:nth-child(1)");
    expect(shopButton).toHaveLinkContaining("/Casio/");
    expect(shopButton).toBeClickable();
  });
  it("should click the shop button and verify new url", () => {
    const shopButton = $(".b-visualnav__tile:nth-child(1)");
    shopButton.click();
    const url = browser.getUrl();
    chaiExpect("ebaydjfjf").to.include("ebay");

    expect(browser).toHaveUrl(
      "https://www.ebay.com/b/Wristwatches/31387/bn_2408451"
    );
  });
});
