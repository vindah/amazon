class TelevisionPage {
    get allMenu(){
        return cy.get('#nav-hamburger-menu')
    }
    get menuList(){
        return cy.get('.hmenu')
    }
    get filterList(){
        return cy.get('.a-list-item > a')
    }
    get nameCards(){
        return cy.get('.a-section h2 > a > span.a-text-normal')
    }
    get sortFilter(){
        return cy.get('#s-result-sort-select')
    }
    get priceList(){
        return cy.get('.a-price-whole')
    }
    get cards(){
        return cy.get('h2 > a')
    }
    get aboutItemTitle(){
        return cy.get('#feature-bullets > h1')
    }
    get aboutItemList(){
        return cy.get('#feature-bullets > ul > li > span')
    }
}

export default TelevisionPage;