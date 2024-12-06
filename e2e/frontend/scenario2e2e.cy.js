describe('Testar o fluxo de login', () => {
  it('Fazer login com credenciais válidas', () => {
    cy.visit('https://front.serverest.dev/')

    cy.get('input[name="email"]').type('Victor@teste.com') //User must be created before running TC
    cy.get('input[name="password"]').type('160593')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/home')
    cy.contains('Serverest Store').should('be.visible')
  })
})