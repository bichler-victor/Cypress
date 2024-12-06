describe('Search for a Product', () => {
  it('Search funcionality is working as expected', () => {
    cy.visit('https://front.serverest.dev/')

    cy.get('input[name="email"]').type('Victor@teste.com')
    cy.get('input[name="password"]').type('160593')
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
    cy.get('input[type="search"]').type('Playstation 5 modelo-2350313')
    cy.get('button[data-testid="botaoPesquisar"]').click()

    cy.contains('Produtos').should('be.visible')
    cy.contains('Playstation 5 modelo-2350313').should('be.visible')
  })
})