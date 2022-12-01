//alliace *as* in javaascript

import {assert, expect as chaiExpect}  from 'chai';
import chai from 'chai';
let should=chai.should();


//should ,asser are left in chai
// import "chai/register-should";
describe("watches", () => {
  it("show the banner container", () => {
    browser.url("https://www.ebay.com/b/Wristwatches/31387/bn_2408451");
    const promoBanner = $("div.title-banner__right-image");
    expect(promoBanner).toBeDisplayed();
  });
  it("Banner Title", async() => {
    const infoTitle = $("h1.title-banner__title");
    const infoTitleText=await infoTitle.getText()

    expect(infoTitle).toHaveTextContaining("Wristwatch");
    chaiExpect(infoTitleText).to.not.be.empty;
    infoTitleText.should.not.be.empty;(infoTitleText)
    assert.isNotEmpty
  });
  it("should contain link on list data button and verify", async() => {
    const shopButton = $(".b-visualnav__tile:nth-child(1)");
    const tag=await shopButton.getTagName();

    expect(shopButton).toHaveLinkContaining("/Casio/");
    expect(shopButton).toBeClickable();
    chaiExpect(tag).to.equal("a");
    tag.should.be.equal("a")

  });
  it("should click the shop button and verify new url", async () => {
    const shopButton = $(".b-visualnav__tile:nth-child(1)");
    shopButton.click();
    const url = await browser.getUrl();
    chaiExpect(url).to.include("ebay");

    expect(browser).toHaveUrl(
      "https://www.ebay.com/b/Wristwatches/31387/bn_2408451"
    );
  });

});
