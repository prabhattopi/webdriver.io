describe("Ebay Product Search", () => {
  beforeEach(

  
    ()=>{
   browser.url("https://course.masaischool.com/lectures/40279");

    }

)

    it("should open the url and verify the title", async () => {

      await expect(browser).toHaveTitle(
        "Masai School | Course"
      );
    });
    // it("Should search for a product and verify the search text value", () => {
    //   //always try with unique selectors
    //   const searchInput = $("#gh-ac");
    //   const searchButton = $("#gh-btn");
  
    //   searchInput.addValue("Laptop");
    //   searchButton.click();
  
    //   //assertion
    //   expect(searchInput).toHaveValue("Laptop");
    // });
    // it("should redirect to a new page and verify the title",()=>{
    //   expect(browser).toHaveTitle("Laptop for sale | eBay")
    // })
    // it("search category should be updated",()=>{
    //   const searchCategory=$("#gh-cat option:nth-child(1)")
    //   expect(searchCategory).toHaveText("PC Laptops & Netoks")
    // })

    // it("should click the shop button and verify new url", async() => {
    //     const shopButton = $("a.inline-flex.items-center:last-child");
    //     await shopButton.click();
    //     // const url = browser.getUrl();
    //     // chaiExpect("ebaydjfjf").to.include("ebay");
    
    //     await expect(browser).toHaveUrl(
    //       "https://course.masaischool.com/courses"
    //     );
    //   });
    
  });
  


