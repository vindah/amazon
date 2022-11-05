import TelevisionPage from "../../page_objects/TelevisionPage";

const televisionPage = new TelevisionPage();

describe('Amazon Test - Television module', function (){
    before('Open Amazon website', function (){
        cy.visit(Cypress.env('url'))
    })
    it('should validate that user can click on the hamburger menu', function () {
        televisionPage.allMenu.should('be.visible').click({force:true})
        cy.wait(3000)
    });
    it('should validate that user can navigate to Televisions page', function () {
        televisionPage.menuList.contains('TV, Appliances, Electronics').click()
        televisionPage.menuList.contains('Televisions').should('be.visible').click()
    });
    it('should validate that user can filter by brand(Samsung)', function () {
        televisionPage.filterList.contains('Samsung').should('be.visible').click()
        //Assert that filter returns all cards containing Samsung
        televisionPage.nameCards.should('contain.text', 'Samsung')
    });
    it('should validate that user can sort price from high to low', function () {
        televisionPage.sortFilter.select('price-desc-rank', {force:true})
        cy.assertSortPrice()
    });
    it('should validate that user can click on the second item', function () {
        televisionPage.cards.eq(1).invoke('removeAttr', 'target').click()
    });
    it('should console log details about item', function () {
        televisionPage.aboutItemTitle.then($el=>{
            cy.log($el.text())
            console.log($el.text())
        })
        televisionPage.aboutItemList.each(($el, index, $list)=>{
            cy.log($el.text())
            console.log($el.text())
        })
    });
})