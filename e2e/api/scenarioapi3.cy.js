describe('API - Delete User', () => {
  it('User delete is successfully made', () => {
    cy.request('POST', 'https://serverest.dev/usuarios', {
      nome: 'Usuário a ser removido',
      email: `usuario${Math.random().toString(36).substring(2)}@teste.com`,
      password: 'senhaSegura',
      administrador: 'true'
    }).then((response) => {
      const userId = response.body._id
      cy.request('DELETE', `https://serverest.dev/usuarios/${userId}`).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Registro excluído com sucesso')
      })
    })
  })
})