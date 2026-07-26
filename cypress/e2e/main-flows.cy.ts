describe('Baemin client flows', () => {
  it('changes language and theme from the header', () => {
    cy.visit('/dashboard');
    cy.get('[data-cy="language-switcher"]').click();
    cy.contains('.ant-select-item-option-content', 'FR').click();
    cy.get('html').should('have.attr', 'lang', 'fr');

    cy.get('[data-cy="theme-switcher"]').click();
    cy.contains('.ant-select-item-option-content', 'Sombre').click();
    cy.get('html').should('have.attr', 'data-theme', 'dark');
  });

  it('navigates search from the header', () => {
    cy.visit('/dashboard');
    cy.get('[data-cy="site-search"]').find('input').type('ga ran{enter}');
    cy.location('pathname').should('eq', '/search');
    cy.location('search').should('contain', 'q=ga%20ran');
  });

  it('shows validation errors on login', () => {
    cy.visit('/login');
    cy.get('[data-cy="login-submit"]').click();
    cy.get('[role="alert"]').should('contain.text', 'Vui long');
  });

  it('shows validation errors on register', () => {
    cy.visit('/register');
    cy.get('[data-cy="register-submit"]').click();
    cy.get('[role="alert"]').should('contain.text', 'Vui long');
  });
});
