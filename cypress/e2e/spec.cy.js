describe("Check for console.log only when Number is entered for armstrong", () => {
  it("Check for console.log only when Number is entered for armstrong", () => {
    cy.visit("http://localhost:3000/");

    cy.window()
      .its("console")
      .then((console) => {
        cy.spy(console, "log").as("log");
        cy.get("#input-2").type("8208");
      });
    cy.wait(1000);
    cy.get("@log")
      .invoke("getCalls")
      .should((calls) => {
        // change to check the log contains "Armstrong"
        expect(calls.some((call) => call.args[0].includes("Armstrong"))).to.be
          .true;
      });
  });
});

describe("Check for console.log only when Number is entered for prime", () => {
  it("Check for console.log only when Number is entered for prime", () => {
    cy.visit("http://localhost:3000/");

    cy.window()
      .its("console")
      .then((console) => {
        cy.spy(console, "log").as("log");
        cy.get("#input-1").type("8208");
      });
    cy.wait(1000);
    cy.get("@log")
      .invoke("getCalls")
      .should((calls) => {
        // change to check the log contains "prime"
        expect(calls.some((call) => call.args[0].includes("prime"))).to.be.true;
      });
  });
});
