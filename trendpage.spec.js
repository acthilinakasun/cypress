/// <reference types="cypress" />

context("Trend page test", () => {
  beforeEach(() => {
    cy.visit("https://www.rockethomes.com/real-estate-trends/mi/detroit");
  });
  it("Verify the red color in Buyer's Report", () => {
    cy.get("#trends-report-type-toggle-buyer").click();
    cy.get(".content-center > .font-normal")
      .should("have.css", "color")
      .and("eq", "rgb(214, 76, 98)");
  });
});
