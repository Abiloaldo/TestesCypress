// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://www.amazon.com.br/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F_encoding%3DUTF8%26adgrpid%3D79547423725%26hvadid%3D591863875878%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9102205%26hvnetw%3Dg%26hvpone%3D%26hvpos%3D%26hvptwo%3D%26hvqmt%3De%26hvrand%3D16847999573362521227%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26ref%3Dpd_sl_7rwd1q78df_e%26tag%3Dhydrbrabk-20%26ref_%3Dnav_custrec_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')
//     cy.get('#ap_customer_name').type('Vitor Drager Leão')
//     cy.get('#ap_email').type('bonitaoReiDelas@gmail.com')
//     cy.get('#ap_password').type('vItInHoGaYdEmAiS')
//     cy.get('#ap_password_check').type('vItInHoGaYdEmAiS')
//     cy.get('#continue').click()
//   })
// })

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.magazineluiza.com.br')
    cy.get('[data-testid="input-search"]').type('smartphone')
    cy.get('[data-testid="search-submit"]').click()
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.magazineluiza.com.br')
    cy.get('[data-testid="input-search"]').type('smartphone')
    cy.get('[data-testid="search-submit"]').click()
    cy.get(':nth-child(1) > [data-testid="product-card-container"] > .sc-wkolL > [data-testid="image"]').click()
    cy.get(':nth-child(2) > [data-testid="bagButton"]').click()
    cy.get('[data-testid="summary-continue-btn"]').click()
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.magazineluiza.com.br/')
    cy.get('[data-testid="numbered-btn-counter"]').click()
  })
})