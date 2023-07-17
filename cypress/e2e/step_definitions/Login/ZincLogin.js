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
    cy.get('[class*="cf1ef5a0b cd6a2dc65 c9f67a967 cd5d5f1f0 _button-login-id"]').click();
    zincLoginPage.elements.password().type("EveryBody78!");
    cy.get('[class*="cf1ef5a0b cd6a2dc65 c9f67a967 cd5d5f1f0 _button-login-password"]').click();
    
})

Then("User successfully logged into platform", () => {
    zincLoginPage.elements.ZincLogo().should('be.visible');
})

//Unsuccessful login
When("User enters incorrect credentials", () => {
  cy.wait(3000);
  zincLoginPage.elements.username().type("alex@zincwork.com");
  cy.get('[class*="cf1ef5a0b cd6a2dc65 c9f67a967 cd5d5f1f0 _button-login-id"]').click();
  zincLoginPage.elements.password().type("EveryBody!");
  cy.get('[class*="cf1ef5a0b cd6a2dc65 c9f67a967 cd5d5f1f0 _button-login-password"]').click();
  
})

Then("User receives error message {string}", (errorMessage) => {
  zincLoginPage.elements.errorMessage().should('contain.text', errorMessage);
})