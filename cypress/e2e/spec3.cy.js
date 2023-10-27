// - 1
describe("Busca de Produtos", () => {
    it("Validar Resultados", () => {
        cy.visit("https://www.aliexpress.com");
        cy.get(".search-key").type("smartphone").type("{enter}");
        cy.get(".product-card").should("be.visible");
    });
});

    // // - 2
    // describe("Adicionar ao Carrinho", () => {
    //     it("Selecionar e Adicionar ao Carrinho", () => {
    //         cy.visit("https://www.aliexpress.com");
    //         cy.get(".search-key").type("Carrinho de Controle Remoto").type("{enter}");
    //         cy.get(".product-card").first().find(".add-to-cart-button").click();
    //         cy.get(".mini-cart-icon").should("be.visible").click();
    //         cy.get(".mini-cart-products").should("be.visible").contains("arrinho de Controle Remoto");
    //     });
    // });

    // // - 3
    // describe("Cadastro de Usuário", () => {
    //     it("Preencher Dados e Cadastrar", () => {
    //         cy.visit("https://www.aliexpress.com");
    //         cy.contains("Join").click();
    //         cy.get("#email").type("teste@gmail.com");
    //         cy.get("#password").type("123456");
    //         cy.get("#confirm-password").type("123456");
    //         cy.get(".register-button").click();
    //         cy.url().should("include", "/myaccount.htm");
    //     });
    // });
    