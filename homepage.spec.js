/// <reference types="cypress" />

context("Homepage", () => {
  beforeEach(() => {
    cy.visit("https://www.rockethomes.com");
  });

  it("should search for Detroit", () => {
    cy.get("#homepage-searchbar")
      .type("Detroit")
      .should("have.value", "Detroit");
  });

  it("should get buy link", () => {
    cy.get("#header-nav-buy").click();
    cy.url().should("include", "/buy");
  });

  it("should get sell link", () => {
    cy.get("#header-nav-sell").click();
    cy.url().should("include", "/sell");
    //.pause();
    //cy.screenshot();
  });

  it("should get mortgage link", () => {
    cy.get("#header-nav-mortgage").click();
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
