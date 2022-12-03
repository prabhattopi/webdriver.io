import SearchPage from "../pages/search.page";

describe("Ebay Product Search", () => {
  it("should open the url and verify the title", async () => {
    SearchPage.open();
    await expect(browser).toHaveTitle(
      "Electronics, Cars, Fashion, Collectibles & More | eBay"
    );
  });
  it("Should search for a product and verify the search text value", () => {
    //always try with unique selectors
    // const searchInput = $("#gh-ac");
    // const searchButton = $("#gh-btn");
    SearchPage.SearchInput.addValue("Laptop");
    SearchPage.SearchBtn.click();

    // searchInput.addValue("Laptop");
    // searchButton.click();

    //assertion
    expect(SearchPage.SearchInput).toHaveValue("Laptop");
  });
  it("should redirect to a new page and verify the title", () => {
    expect(browser).toHaveTitle("Laptop for sale | eBay");
  });
  it("search category should be updated", async () => {
    await expect(SearchPage.category).toHaveText("All Categories");
  });
});
