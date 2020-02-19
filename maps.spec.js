/// <reference types="cypress" />

context("openning location page", () => {
  beforeEach(() => {
    cy.visit("https://www.rockethomes.com/mi/detroit");
  });

  it("Verify double click to zoom in works on map", () => {
    cy.get("canvas.mapboxgl-canvas")
      .dblclick()
      .dblclick()
      .dblclick()
      .dblclick();
    cy.get("canvas.mapboxgl-canvas").should("be.visible");
    let currentURL;
    cy.url().then(url => {
      currentURL = url;
      expect(currentURL).to.have.string("zoom");
      expect(currentURL).to.have.string("nw_lat");
      expect(currentURL).to.have.string("nw_lng");
      expect(currentURL).to.have.string("se_lat");
      expect(currentURL).to.have.string("se_lng");

      cy.request(
        "GET",
        "/api/v1/bounding-boxes/42.395914868942015/-83.10789548341431/42.37507445994294/-82.99793189994328?expand[best_fit_location.monthly_listing_trends]=true&filter[best_fit_location.monthly_listing_trends.property_type]=all&filter[best_fit_location.monthly_listing_trends.bedrooms]=all&options[best_fit_location.detailed]=true"
      ).then(response => {
        expect(response).to.have.property("status", 200);
      });
      cy.request(
        "GET",
        "/api/v1/locations/listings?size=25&from=0&create_recent_search=true&top_left_lat=42.395914868942015&top_left_lon=-83.10789548341431&bottom_right_lat=42.37507445994294&bottom_right_lon=-82.99793189994328"
      ).then(response => {
        expect(response).to.have.property("status", 200);
      });
    });
  });
});
