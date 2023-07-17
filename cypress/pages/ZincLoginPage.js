class ZincLoginPage {
    elements = {
      signinBtn: () => cy.get(".v-btn__content"),
      username: () => cy.get("#username"),
      password: () => cy.get("#password"),
      errorMessage: () => cy.get("#error-element-password"),
      ZincLogo: () => cy.get('[class="uuid-3986f142-e4b2-4b3c-bbad-63e60cd10baa"]'),
      menubarWelcome: () => cy.get('[href="/welcome"]'),
      menubarRecruit: () => cy.get('[href="/recruit"]'),
      menubarAnalytics: () => cy.get('[href="/analytics"]'),
      menubarPackages: () => cy.get('[href="/packages"]'),
      menubarProfile: () => cy.get('[href="/profile"]')
    };

    openURL(){
      cy.visit("https://developmentapp.zincwork.com/sign-in");
    }
    
    submitLogin(){
        cy.visit("https://developmentapp.zincwork.com/sign-in");
        cy.wait(500);
        this.elements.signinBtn().eq(1).click();
        cy.wait(2000);
        this.elements.username().type("alex@zincwork.com");
        cy.get('[class*="c3768468a cd7c8bf9c c4a5884bf c127814b1 _button-login-id"]').click();
        this.elements.password().type("EveryBody78!");
        cy.get('[class*="c3768468a cd7c8bf9c c4a5884bf c127814b1 _button-login-password"]').click();
    }
   
  
  }
  
  export const zincLoginPage = new ZincLoginPage();