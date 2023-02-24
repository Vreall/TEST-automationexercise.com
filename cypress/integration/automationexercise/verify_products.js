/// <reference types="Cypress" />
describe('automationexercise test', function () {
	it('Verify Test Cases Page', function () {
		// Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');
        
        // Click on 'Products' button
        cy.contains('a',' Products')
        // Verify user is navigated to ALL PRODUCTS page successfully
        // The products list is visible
        // Click on 'View Product' of first product
        // User is landed to product detail page
        // Verify that detail detail is visible: product name, category, price, availability, condition, brand
	});
});
