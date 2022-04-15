import TelevisionPage from "../page_objects/TelevisionPage";

const televisionPage = new TelevisionPage();

let lowest = 0;
let highest= 0;

Cypress.Commands.add('assertSortPrice', ()=>{
    //Assert that the high to low price sort works
    televisionPage.priceList.first().then($el=>{
        highest = parseFloat($el.text().replace(/[,]/g, ''))
    })
    televisionPage.priceList.last().then($el=>{
        lowest = parseFloat($el.text().replace(/[,]/g, ''))
    })
    televisionPage.priceList.each(($el, index, $list)=>{
        if (index <4){
            if (index!==$list.length - 2){
                expect(lowest).to.be.lessThan(parseFloat($el.text().replace(/[,]/g, '')))
            }
            if (index!==0){
                expect(highest).to.be.greaterThan(parseFloat($el.text().replace(/[,]/g, '')))
            }
        }
    })
})