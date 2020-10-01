describe("Blog posts", () => {
  beforeEach(() => {
    cy.visit("/blog");
  });
  it("has the correct <h1>", () => {
    cy.contains("h1", "Recent posts");
  });
});
