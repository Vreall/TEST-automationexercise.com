/// <reference types="Cypress" />
describe('automationexercise test', function () {
	it('Verify Test Cases Page', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');

		// Click on 'Products' button
		cy.contains('a', ' Products').click();
		// Verify user is navigated to ALL PRODUCTS page successfully
		cy.url().should('include', '/products');
		cy.contains('h2', 'All Products').should('be.visible');
		// The products list is visible
		cy.get('.features_items').should('be.visible');
		// Click on 'View Product' of first product
		cy.contains('a', 'View Product').eq(0).click();
		// User is landed to product detail page
		cy.url().should('include', 'product_details/1');
		// Verify that detail detail is visible: product name, category, price, availability, condition, brand
		cy.get('div.product-information h2').should('be.visible');
		cy.get('div.product-information p')
			.eq(0)
			.should('be.be.visible')
			.and('include.text', 'Category');
		cy.contains('div.product-information p b', 'Availability:').should(
			'be.be.visible'
		);
		cy.contains('div.product-information p b', 'Condition:').should(
			'be.be.visible'
		);
		cy.contains('div.product-information p b', 'Brand:').should(
			'be.be.visible'
		);
	});
});
