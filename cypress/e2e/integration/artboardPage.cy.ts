describe("Artboard page", () => {
  const doc1 = "e981971c-ff57-46dc-a932-a60dc1804992";

  beforeEach(() => {
    cy.visit(`http://localhost:3000/documents/${doc1}/artboards/2`);
  });

  it("displays the artboard specified by the index in the URL", () => {
    cy.get('[data-testid="artboard-name"]').should("have.text", "Android");
    cy.get('[alt="Android"]').should("be.visible");
    cy.get('[data-testid="current-index"]').should("have.text", "3");
  });

  it("navigates to the previous artboard", () => {
    cy.get('[alt="previous image"]').click();
    cy.get('[data-testid="artboard-name"]').should(
      "have.text",
      "Etch a Sketch"
    );
    cy.get('[alt="Etch a Sketch"]').should("be.visible");
    cy.get('[data-testid="current-index"]').should("have.text", "2");
  });

  it("navigates to the next artboard", () => {
    cy.get('[alt="next image"]').click();
    cy.get('[data-testid="artboard-name"]').should("have.text", "Android 4");
    cy.get('[alt="Android 4"]').should("be.visible");
    cy.get('[data-testid="current-index"]').should("have.text", "4");
  });

  it("goes back to the Document View on closing it", () => {
    cy.get('[alt="Close"]').click();
    cy.url().should("contain", `documents/${doc1}`);
    cy.url().should("not.contain", `artboards/2`);
    cy.get('[data-testid="document-name"]').should("have.text", "Code test");
  });

  it("shows an error message on entering a wrong artboard index", () => {
    cy.visit(`http://localhost:3000/documents/${doc1}/artboards/asdasdasd`);
    cy.get('[data-testid="error-text"]').should(
      "have.text",
      "There has been an error. Please try again later or go back to the main page."
    );
  });
});
