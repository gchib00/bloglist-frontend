/* eslint-disable no-undef */
describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Tim Gasovski',
      username: 'test',
      password: '123'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user) 
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('login')
  })
  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.get('#username').type('test')
      cy.get('#password').type('123')
      cy.contains('login').click()
      cy.contains('Tim Gasovski')
    })

    it('fails with wrong credentials', function() {
      cy.get('#username').type('wrongName')
      cy.get('#password').type('1')
      cy.contains('login').click()
      cy.contains('Wrong credentials')
    })
  })
  describe('When logged in', function() {
    beforeEach(function() {
      cy.get('#username').type('test')
      cy.get('#password').type('123')
      cy.contains('login').click()
      cy.contains('Tim Gasovski')
    })

    it('A blog can be created', function() {
      cy.contains('Add Blog').click()
        .get('#title').type('Title of my TEST blog')
        .get('#author').type('John Green Jr.')
        .get('#url').type('www.webiste.com/myblog')
      cy.contains('create').click()
      cy.contains('Title of my TEST blog John Green Jr.')
    })
  })
})