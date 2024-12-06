describe('API - Test to obtain a information of a product', () => {
  it('Search will show information of a product', () => {
    cy.request('GET', 'https://serverest.dev/produtos').then((response) => {
      expect(response.status).to.eq(200)
      const produto = response.body.produtos[0]
      cy.request(`https://serverest.dev/produtos/${produto._id}`).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.nome).to.eq(produto.nome)
      })
    })
  })
})