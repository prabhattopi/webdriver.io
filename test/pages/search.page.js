import Page from "./page";

class SearchPage extends Page {
  
  get SearchInput() {
    return $("#gh-ac");
  }
  get SearchBtn() {
    return $("#gh-btn");
    

  }
  get category(){
    return $("#gh-cat option:nth-child(1)")
  }
  open() {
   super.open("/");
  }
}
export default new SearchPage();
