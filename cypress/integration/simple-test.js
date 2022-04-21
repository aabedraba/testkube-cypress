describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("https://testkube.kubeshop.io");

    cy.contains(
      "Testkube provides a Kubernetes-native framework for test definition, execution and results"
    ).should("be.visible");

    cy.contains(
      "Your friendly cloud-native testing framework for Kubernetes"
    ).should("be.visible");
  });
});
