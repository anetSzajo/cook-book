/// <reference types="cypress" />

describe("should render history", () => {
    beforeEach(() => {
        for (let i=0; i<12; i++){
            window.localStorage.setItem(`query${i}`, '')
        }
        cy.visit('/');
    });

    it('should heading content be ', () => {
        cy.get('h2').should('contain', 'Last 10 searches')
    })
    it("should render 10 elements in history", () => {
        cy.get('ul').its('length').should('not.be.greaterThan', 10)
    })
    it("should render history item", () => {
        cy.get('#history').find('li').should('contain', 'query1')
    })
    it("should add input query to history", () => {
        cy.get('input').type('query example')
        cy.get('button').click()
        cy.get('#history').find('li').should('contain', 'query example')
    })
})