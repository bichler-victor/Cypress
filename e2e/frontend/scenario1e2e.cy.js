describe('Create a new user', () => {
  it('Create a new user successfully', () => {
    cy.visit('https://front.serverest.dev/')

    cy.get('a[type="button"]').click()

    cy.get('input[name="nome"]').type('Victor')
    cy.get('input[name="email"]').type(`usuario${Math.random().toString(36).substring(2)}@teste.com`)
    cy.get('input[name="password"]').type('senhaSegura')

    cy.get('button[type="submit"]').click()

    cy.contains('Cadastro realizado com sucesso').should('be.visible')
    cy.url().should('include', '/home')
  })
})