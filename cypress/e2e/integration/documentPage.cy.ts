export const doc1 = "e981971c-ff57-46dc-a932-a60dc1804992";
export const doc2 = "40432a93-5434-4059-87b9-545fd1ad6ee0";

describe("Document page", () => {
  it("displays the default document", () => {
    cy.visit(`http://localhost:3000/documents/${doc1}`);
    cy.get('[data-testid="artboard-thumbnail"]').should("have.length", 16);
    cy.get('[data-testid="document-name"]').should("have.text", "Code test");
  });

  it("displays the other document", () => {
    cy.visit(`http://localhost:3000/documents/${doc2}`);

    cy.get('[data-testid="artboard-thumbnail"]').should("have.length", 2);
    cy.get('[data-testid="document-name"]').should(
      "have.text",
      "Code test (bonus)"
    );
  });

  it("goes to the artboard page", () => {
    cy.visit(`http://localhost:3000/documents/${doc1}`);
    cy.get('[data-testid="artboard-thumbnail"]').first().click();
    cy.url().should("contain", "artboards/0");
  });

  it("shoes an error message on entering a wrong document id", () => {
    cy.visit(`http://localhost:3000/documents/wrong.id`);
    cy.get('[data-testid="error-text"]').should(
      "have.text",
      "There has been an error. Please try again later or go back to the main page."
    );
  });
});
