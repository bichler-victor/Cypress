describe('API - Test to create a user', () => {
  it('Must create a user successfully - endpoint - /usuarios', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'New User',
        email: `usuario${Math.random().toString(36).substring(2)}@teste.com`,
        password: '160593',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })
})