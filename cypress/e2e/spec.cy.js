describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-testid="form"]').should("exist");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "Enter your email")
      .type("admin@store.com")
      .should("have.value", "admin@store.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "Enter your password")
      .type("123456")
      .should("have.value", "123456");

    cy.get('[data-testid="submit"]').click();

    cy.get("div.home").should("be.visible");
    cy.get('[data-testid="sidebar"]').should("be.visible");
    cy.get('[data-testid="user"]').click();
    cy.url().should("include", "/users");
    cy.get("div.datatableTitle").contains("USERS");
  });
});
