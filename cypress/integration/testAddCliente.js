describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('/')
      cy.get('.md > .hydrated > .ion-page > .md:nth-child(2) > .md').click()
 
    cy.get('#ion-overlay-1 > .alert-wrapper > .alert-input-group > .alert-input-wrapper > #alert-input-1-0').click()
 
    cy.get('#ion-overlay-1 > .alert-wrapper > .alert-input-group > .alert-input-wrapper > #alert-input-1-0').type('admin')
 
    cy.get('#ion-overlay-1 > .alert-wrapper > .alert-input-group > .alert-input-wrapper > #password').click()
 
    cy.get('#ion-overlay-1 > .alert-wrapper > .alert-input-group > .alert-input-wrapper > #password').type('admin')
 
    cy.get('#ion-overlay-1 > .alert-wrapper > .alert-button-group > .ingresarButton').click()

    cy.get('.hydrated > .ion-page > ion-tabs > .ion-color > #tab-button-clientes').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputNombre > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputNombre > .native-input').type('Camilaaaas')
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputApellido > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputApellido > .native-input').type('Chaves')
 
    cy.get('.ion-page:nth-child(2) > .md > .sc-ion-card-md-h > .md > .md:nth-child(5)').click()
 
    //cy.get('#ion-overlay-4 > .alert-wrapper > .alert-button-group > .alert-button > .alert-button-inner').click()

    cy.wait(2000)
    cy.contains('AGREGADO').click()
    })
  })