class PackagesPage {
    elements = {
      createNewPackageBtn: () => cy.get('[class="px-6 v-btn v-btn--depressed theme--dark v-size--default btn-primary"]'),
      packagenameInput: () => cy.get('[id*="input-26"], [id*="input-27"], [id*="input-28"], [id*="input-29"]'),
      continueBtn: () => cy.get('[class="ma-0 v-btn v-btn--depressed theme--dark v-size--default btn-primary"]'),
    //Templates screen    
      row1Template: () => cy.get('[id*="input-27"],[id*="input-28"], [id*="input-29"]'),
      row2Template: () => cy.get('[id*="input-30"], [id*="input-31"], [id*="input-32"]'),

    //Reference criteria screen
      referenceCriteria: () => cy.get('[id*="input-37"], [id*="input-38"], [id*="input-39"], [id*="input-40"]'),
      packageName: () => cy.get('[class*="reference-package-view__title mb-0 bold"]')
    };
  }
  
  export const packagesPage = new PackagesPage();