/// <reference types="Cypress" />
describe('automationexercise test', function () {
	it('Verify Product quantity in Cart', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');
		// Click 'View Product' for any product on home page
		// cy.contains('View Product').should('have.length', '8');
		cy.get('div.choose>ul>li>a').eq(3).click();
		// Verify product detail is opened
		cy.url().should('include', '/product_details/4');
		// Increase quantity to 4
		cy.get('input[name="quantity"]').clear().type('4');
		// Click 'Add to cart' button
		cy.contains('button', 'Add to cart').click();
		// Click 'View Cart' button
		cy.contains('a', 'View Cart').click();
		// Verify that product is displayed in cart page with exact quantity
		cy.get('#product-4>td.cart_quantity>button').should('have.text', '4');
	});
});
