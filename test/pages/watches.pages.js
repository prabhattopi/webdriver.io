import Page from "./page";



class WatchesPage extends Page {
  
  get infoTitle() {
    return $("h1.title-banner__title");
  }
  get SearchBtn() {
    return $("#gh-btn");
    

  }
  get shopButton(){
    return $(".b-visualnav__tile:nth-child(1)")
  }
  get category(){
    return $("#gh-cat option:nth-child(1)")
    // return $$("#gh-cat option:nth-child(1)")
  }
  open() {
   super.open("https://www.ebay.com/b/Wristwatches/31387/bn_2408451");
  }
}
export default new WatchesPage();
