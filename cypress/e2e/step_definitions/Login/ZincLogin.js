import {
    Given, When, Then,  
  } from "@badeball/cypress-cucumber-preprocessor";
import { zincLoginPage } from "@pages/ZincLoginPage";


//Prelude steps
Given("User is on sign-in page", () => {
    zincLoginPage.openURL();
    cy.wait(500);
  });
When("User selects sign-in", () => {
    zincLoginPage.elements.signinBtn().eq(1).click();
})

//Successful login
When("User enters correct credentials", () => {
    cy.wait(3000);
    zincLoginPage.elements.username().type("alex@zincwork.com");
    cy.get('[class*="c3768468a cd7c8bf9c c4a5884bf c127814b1 _button-login-id"]').click();
    zincLoginPage.elements.password().type("EveryBody78!");
    cy.get('[class*="c3768468a cd7c8bf9c c4a5884bf c127814b1 _button-login-password"]').click();
    
})

Then("User successfully logged into platform", () => {
    zincLoginPage.elements.ZincLogo().should('be.visible');
})

//Unsuccessful login
When("User enters incorrect credentials", () => {
  cy.wait(3000);
  zincLoginPage.elements.username().type("alex@zincwork.com");
  cy.get('[class*="c3768468a cd7c8bf9c c4a5884bf c127814b1 _button-login-id"]').click();
  zincLoginPage.elements.password().type("EveryBody!");
  cy.get('[class*="c3768468a cd7c8bf9c c4a5884bf c127814b1 _button-login-password"]').click();
  
})

Then("User receives error message {string}", (errorMessage) => {
  zincLoginPage.elements.errorMessage().should('contain.text', errorMessage);
})