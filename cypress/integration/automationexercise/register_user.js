describe('automationexercise test', function () {
	it('Test Case 1: Register User', function () {
        cy.visit('http://automationexercise.com')
        // cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.contains('a', ' Signup / Login').click()
        cy.contains('h2','New User Signup!').should('be.visible')
	});
});
