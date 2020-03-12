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

    cy.get('.hydrated > .ion-page > ion-tabs > .ion-color > #tab-button-clientes').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputNombre > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputNombre > .native-input').type('gghhhfygggd')
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputApellido > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputApellido > .native-input').type('ccccc')
 
    cy.get('.ion-page:nth-child(2) > .md > .sc-ion-card-md-h > .md > .md:nth-child(5)').click()

    cy.wait(2000)
    
    cy.contains('AGREGADO').click()

    cy.get('#ion-overlay-4 > .alert-wrapper > .alert-button-group > .alert-button > .alert-button-inner').click()

    cy.wait(2000)

    cy.get('.ion-page > ion-tabs > .ion-color > #tab-button-tarjetas > .md:nth-child(1)').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputNumero > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputNumero > .native-input').type('3234123412449995')
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputTipo > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputTipo > .native-input').type('VISA')
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputCodigo > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputCodigo > .native-input').type('111')
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputVencimiento > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputVencimiento > .native-input').type('202010')
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputMontoMax > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputMontoMax > .native-input').type('50000')
 
    cy.get('.ion-page > .md > .sc-ion-card-md-h > .md > .md:nth-child(11)').click()
    cy.wait(1500)
    cy.contains('AGREGADA').click()

    cy.get('#ion-overlay-6 > .alert-wrapper > .alert-button-group > .alert-button > .alert-button-inner').click()

    cy.get('.ion-page > ion-tabs > .ion-color > #tab-button-ventas > .md:nth-child(1)').click()

    cy.get('.md > .sc-ion-card-md-h > .md > #inputMonto > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputMonto > .native-input').type('123')
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputCliente > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputCliente > .native-input').type('25')
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputTarjeta > .native-input').click()
 
    cy.get('.md > .sc-ion-card-md-h > .md > #inputTarjeta > .native-input').type('26')
 
    cy.get('.ion-page > .md > .sc-ion-card-md-h > .md > #botonVender').click()

    cy.wait(1500)
    cy.contains('EXITOSA').click()


})
})
