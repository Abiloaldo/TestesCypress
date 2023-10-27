//pontos para testar uma aplicação web
//POC - Prova de Conceito

// const { expect } = require("chai")

// describe('spec soma', () => {
//     expect
// })

describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://www.magazineluiza.com.br')
        cy.get('[data-testid="input-search"]').type('smartphone')
        cy.get('[data-testid="search-submit"]').click()
        cy.get(':nth-child(1) > [data-testid="product-card-container"] > .sc-ijtseF > [data-testid="image"]').click()
        cy.get(':nth-child(2) > [data-testid="bagButton"]').click()
        cy.get('.sc-kOHTFB').click()
        // let valorTotal = 0
        for(let i =1; i <= 8; i++) {
            cy.get(':nth-child(1) > .BobbyCarousel > .BobbyContainer--compact > .slick-slider > .slick-list > .slick-track > .slick-current > :nth-child(1) > .BobbyCompactProduct > .BobbyCompactProduct-buttonRow > .BobbyCompactProduct-button > .BobbyCompactProduct-button-icon').click()
            // valorTotal += 
            setTimeout(() => {console.log("OI")}, 5000)
        }     
      })
  })