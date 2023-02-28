/// <reference types="Cypress" />
describe('automationexercise test', function () {
	it('Verify Subscription in home page', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');
		// Scroll down to footer
		cy.scrollTo('bottom');
		// Verify text 'SUBSCRIPTION'
		cy.contains('footer h2', 'Subscription').should('be.visible');
		// Verify success message 'You have been successfully subscribed!' is visible
		cy.get('footer input[type="email"]').type('mail@wp.pl');
		cy.get('footer button[type="submit"]').click();
		cy.contains('div', 'You have been successfully subscribed!').should(
			'be.visible'
		);
	});
});
