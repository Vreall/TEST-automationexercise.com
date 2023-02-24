/// <reference types="Cypress" />
describe('automationexercise test', function () {
	it('Verify Test Cases Page', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');

		// Click on 'Test Cases' button
		cy.contains('a', ' Test Cases').click();
		// Verify user is navigated to test cases page successfully
		cy.url().should('include', '/test_cases');
	});
});
