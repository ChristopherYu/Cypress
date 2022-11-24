describe('Case 01', () => {
    it('go to home page', () => {
        cy.visit("https://www.cathaybk.com.tw/cathaybk")
        cy.contains("產品介紹").click()
        cy.contains("卡片介紹").click()
        cy.get(".cubre-a-kvTitle").should(($element) => {
            expect($element.text()).to.equal("信用卡介紹")
        })
    })
})
