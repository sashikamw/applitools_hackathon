/// <reference types="cypress"/>

describe("AppliFashion Page", () => {

    beforeEach(() => {
        cy.viewport(800,600);
        cy.visit('https://demo.applitools.com/gridHackathonV2.html');

    })

    afterEach(() => {
         cy.eyesClose()
    })

    it('should check for cross device elements', function () { 

        cy.eyesOpen({
            testName: 'Task 1',
        })

        cy.eyesCheckWindow({
            tag: "Cross-Device Elements Test",
            target: 'window',
            fully: true
        });

    });

    it('should filter black shoes', function () {

        cy.eyesOpen({
            testName: 'Task 2',
        })

        cy.get("#ti-filter").then($button => {
            if ($button.is(':visible')){
                cy.get('#ti-filter').click();
                cy.contains('Black', {timeout: 5000}).click();
                cy.get('#filterBtn').click();
               // cy.get('#product_grid .col-6').should('have.length', 2)
            }else{
                cy.contains('Black',{timeout: 5000}).click();
                cy.get('#filterBtn').click();
               // cy.get('#product_grid .col-6').should('have.length', 2)
            }
          })

        cy.eyesCheckWindow({
            tag: "Filter Results”",
            target: 'region',
            selector: {
                type: 'xpath',
                selector: '//*[@id="product_grid"]'

            }
        });

    });

    it('should dispaly product detailed page', function () {

        cy.eyesOpen({
            testName: 'Task 3',
        })

        cy.get("#ti-filter").then($button => {
            if ($button.is(':visible')){
                cy.get('#ti-filter').click();
                cy.contains('Black',{timeout: 5000}).click();
                cy.get('#filterBtn').click();
                cy.get('#product_1').click()
            }else{
                cy.contains('Black',{timeout: 5000}).click();
                cy.get('#filterBtn').click();
                cy.get('#product_1').click()
            }
          })

        cy.eyesCheckWindow({
            tag: "Product Details test”",
            target: 'window',
            fully: true
        });

    });
});