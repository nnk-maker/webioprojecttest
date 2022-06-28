describe('Main Block', () => {
    it('Verify list items', async () => {
        browser.url('/');
        const listExamples = $$("ul li"); //to find all Elements
       await expect(listExamples).toBeElementsArrayOfSize({gte:1});

    });
});