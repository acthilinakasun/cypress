/// <reference types="cypress" />

context("Homepage mobile test", () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit("https://www.rockethomes.com");
  });

  it("should search", () => {
    cy.get(".inset-0").click();
    cy.get(".ReactModal__Content > .flex > .border")
      .type("Detroit")
      .should("have.value", "Detroit");
  });

  it("should get buy link", () => {
    cy.get("#mobile-nav-logo").click();
    cy.get("#mobile-side-nav-buy").click();
    cy.url().should("include", "/buy");
  });

  it("should get sell link", () => {
    cy.get("#mobile-nav-logo").click();
    cy.get("#mobile-side-nav-sell").click();
    cy.url().should("include", "/sell");
  });

  it("should get mortgage link", () => {
    cy.get("#mobile-nav-logo").click();
    cy.get("#mobile-side-nav-mortgage").click();
    cy.url().should("include", "/mortgage");
  });

  it("should display a image in element div with class image", () => {
    cy.get(
      'div[class="shadow border rounded-8 overflow-hidden hover-transition"]'
    )
      .find("img")
      .should("be.visible");
  });
});
