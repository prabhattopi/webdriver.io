describe("Ebay Product Search", () => {
  it("should open the url and verify the title", () => {
    browser.url("https://www.ebay.com/");
    expect(browser).toHaveTitle(
      "Electronics, Cars, Fashion, Collectibles &amp; More | eBay"
    );
  });
  it("Should search for a product and verify the search text value", () => {
    //always try with unique selectors
    const searchInput = $("#gh-ac");
    const searchButton = $("#gh-btn");

    searchInput.addValue("Laptop");
    searchButton.click();

    //assertion
    expect(searchInput).toHaveValue("Laptop");
  });
  it("should redirect to a new page and verify the title",()=>{
    expect(browser).toHaveTitle("Laptop for sale | eBay")
  })
  it("search category should be updated",()=>{
    const searchCategory=$("#gh-cat option:nth-child(1)")
    expect(searchCategory).toHaveText("PC Laptops & Netoks")
  })
  
});
