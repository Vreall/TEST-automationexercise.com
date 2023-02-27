/// <reference types="Cypress" />
describe('automationexercise test', function () {
	it('Search Product', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');

		// Click on 'Products' button
		cy.contains('a', ' Products').click();

		// Verify user is navigated to ALL PRODUCTS page successfully
		cy.url().should('include', '/products');
		cy.contains('h2', 'All Products').should('be.visible');
		// Enter product name in search input and click search button
		cy.get('input[name="search"]').type('dress');
		cy.get('#submit_search').click();
		// Verify 'SEARCHED PRODUCTS' is visible

		cy.log(cy.contains('h2', 'Searched Products').should('be.visible'));
		// Verify all the products related to search are visible
		cy.get('div[class="product-image-wrapper"]').each(($el, index, $list) => {
			cy.get('div[class="product-image-wrapper"]')
				.eq(index)
				.contains('a', 'View Product')
				.click();
			cy.get('div.product-information p')
				.eq(0)
				.should('be.be.visible')
				.and('include.text', 'Dress');
			cy.go('back');
		});
	});
});
