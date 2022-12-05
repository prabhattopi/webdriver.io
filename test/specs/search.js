import SearchPage from "../pages/search.page";
import resources from "../resources";
import { waitforTextChange } from "../utilities/helper";

describe("Ebay Product Search", () => {
  it("should open the url and verify the title", async () => {
    SearchPage.open();
    await expect(browser).toHaveTitle(resources.homeTitle);
  });
  it("Should search for a product and verify the search text value", async () => {
    //always try with unique selectors
    // const searchInput = $("#gh-ac");
    // const searchButton = $("#gh-btn");
    await SearchPage.SearchInput.addValue("Laptop");
    await SearchPage.SearchBtn.click();

    // searchInput.addValue("Laptop");
    // searchButton.click();

    //assertion
    await expect(SearchPage.SearchInput).toHaveValue("Laptop");
  });
  it("should redirect to a new page and verify the title", async () => {
    await expect(browser).toHaveTitle(resources.laptopTitle);
  });
  it("search category should be updated", async () => {
    await waitforTextChange(SearchPage.category, "PC Laptops & Netbooks", 3000);
    await expect(SearchPage.category).toHaveText("PC Laptops & Netbooks");
  });
});
