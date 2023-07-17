import {
    Given, When, Then,  
  } from "@badeball/cypress-cucumber-preprocessor";
import { zincLoginPage } from "@pages/ZincLoginPage";
import { packagesPage } from "@pages/PackagesPage";

When("User navigated to packages screen", () => {
    zincLoginPage.elements.menubarPackages().click();
    cy.wait(500);
})

When("User selects Create new package", () => {
    packagesPage.elements.createNewPackageBtn().eq(0).click();
    packagesPage.elements.packagenameInput().type("Test");
    packagesPage.elements.continueBtn().click();
})

When("User selects template option", () => {
    packagesPage.elements.row1Template().eq(0).click({ force: true });
    packagesPage.elements.continueBtn().click();
})

When("User selects {string} template option", () => {
    packagesPage.elements.row2Template().eq(0).click({ force: true });
    packagesPage.elements.continueBtn().click();
})

When("User continues package flow row2", () => {
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.referenceCriteria().eq(0).click({ force: true });
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.continueBtn().click();
})

When("User continues package flow row1", () => {
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.referenceCriteria().eq(0).click({ force: true });
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.continueBtn().click();
    packagesPage.elements.continueBtn().click();

})

Then("User successfully created new package", () => {
    packagesPage.elements.packageName().should("contain.text", 'Test');
})