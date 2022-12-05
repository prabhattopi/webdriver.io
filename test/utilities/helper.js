export const waitforTextChange = async (el, text, timeout) => {
  await browser.waitUntil(async () => (await el.getText()) === text, {
    timeout,
  });
};

export const waitAndClcik=async(el,timeout)=>{
  await el.waitForDisplayed({ timeout}); 
    await el.click();
}