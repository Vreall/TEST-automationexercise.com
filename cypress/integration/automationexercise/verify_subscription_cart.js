/// <reference types="Cypress" />
describe('automationexercise test', function () {
	it('Verify Subscription in cart', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');

		// Click 'Cart' button
		cy.contains('a', ' Cart').click();
		// Scroll down to footer
		cy.scrollTo('bottom');
		// Verify text 'SUBSCRIPTION'
		cy.contains('footer h2', 'Subscription').should('be.visible');
		// Enter email address in input and click arrow button
		cy.get('footer input[type="email"]').type('mail@wp.pl');
		cy.get('footer button[type="submit"]').click();
		// Verify success message 'You have been successfully subscribed!' is visible
		cy.contains('div', 'You have been successfully subscribed!').should(
			'be.visible'
		);
	});
});
