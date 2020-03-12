describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('/')
      cy.get('.md > .hydrated > .ion-page > .md:nth-child(2) > .md').click()
 
    cy.get('#ion-overlay-1 > .alert-wrapper > .alert-input-group > .alert-input-wrapper > #alert-input-1-0').click()
 
    cy.get('#ion-overlay-1 > .alert-wrapper > .alert-input-group > .alert-input-wrapper > #alert-input-1-0').type('admin')
 
    cy.get('#ion-overlay-1 > .alert-wrapper > .alert-input-group > .alert-input-wrapper > #password').click()
 
    cy.get('#ion-overlay-1 > .alert-wrapper > .alert-input-group > .alert-input-wrapper > #password').type('admin')
 
    cy.get('#ion-overlay-1 > .alert-wrapper > .alert-button-group > .ingresarButton').click()
    
    cy.wait(2000)
    cy.get('.md > .sc-ion-card-md-h > .md > #inputMonto > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputMonto > .native-input').type('1234')
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputCliente > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputCliente > .native-input').type('25000')
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputTarjeta > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputTarjeta > .native-input').type('25')
 
    cy.get('.ion-page > .md > .sc-ion-card-md-h > .md > .md:nth-child(7)').click()
    cy.wait(1500)
    cy.contains('FALLO').click()
    })
  })