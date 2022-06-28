describe('Dynamic Loading Page', () => {
    it('wait for the hidden element to show',async () => {
            const btnStart = await $('#start button')
            const textFinish = await $('#finish h4')
            const elLoading = await $('#loading');
            browser.url('/dynamic_loading/1')

            btnStart.click();

            
           // const text = await textFinish.getText()
           //await textFinish.waitForDisplayed()

            //const tFinish = await textFinish.getText()
            elLoading.waitForDisplayed()
            elLoading.waitForDisplayed({reverse:true})
            //assert(tFinish === 'Hello World!')
           await expect(textFinish.getText()).toEqual("Hello World!");

            
    });
})