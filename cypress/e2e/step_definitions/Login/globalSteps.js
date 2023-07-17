import {
    Given, When, Then,  
  } from "@badeball/cypress-cucumber-preprocessor";
import { zincLoginPage } from "@pages/ZincLoginPage";


Given("User has logged in", () => {
    zincLoginPage.submitLogin();
    cy.wait(500);
  });