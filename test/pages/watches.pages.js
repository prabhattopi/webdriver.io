import Page from "./page";

class WatchesPage extends Page {
  get infoTitle() {
    return $("h1.title-banner__title");
  }
  get SearchBtn() {
    return $("#gh-btn");
  }
  get shopButton() {
    return $(".b-visualnav__tile:nth-child(1)");
  }
  get category() {
    // return $("#gh-cat option:nth-child(1)")//find Element
    return $$("#gh-cat option:nth-child(1)")[0]; //find Elements with arrays
  }
  get watchesCategoryList() {
    return $$('section[id="s0-17-12_2-0-1[0]-0-0"] ul li'); //array of Elements
  }
  get fashionLink() {
    return $$('.hl-cat-nav__js-tab a[href*="Fashion"]:first-child')[0];
  }
  get WatchesLink() {
    return $('.hl-cat-nav__sub-cat-col a[href*="Wrist"]');
  }
  open() {
    super.open("/");
  }
  async getWatchesCategoryListText() {
    //array of Elements
    const watchesList = [];
    await this.watchesCategoryList;
    await this.watchesCategoryList.map(async (e) =>
      watchesList.push(await e.getText())
    );
    return watchesList;
  }
}
export default new WatchesPage();
