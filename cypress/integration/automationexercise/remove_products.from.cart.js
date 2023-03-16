/// <reference types="Cypress" />
describe('automationexercise test', function () {
	it('Remove Products From Cart', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');

		// Add products to cart
		cy.get('div[class="product-image-wrapper"').eq(0).realHover('mouse');
		cy.wait(2000);
		cy.contains(
			'div[class="overlay-content"] a[data-product-id="1"]',
			'Add to cart'
		).click({ waitForAnimations: false });
		cy.contains('button', 'Continue Shopping').click();
		cy.get('div[class="product-image-wrapper"').eq(3).realHover('mouse');
		cy.wait(2000);
		cy.contains(
			'div[class="overlay-content"] a[data-product-id="4"]',
			'Add to cart'
		).click({ waitForAnimations: false });
		// Click 'Cart' button
		cy.contains('a', ' Cart').click();
		// Verify that cart page is displayed
		cy.url().should('include', '/view_cart');
		//Click 'X' button corresponding to particular product
		cy.get('[data-product-id="1"]').click();
		cy.get('[data-product-id="4"]').click();
		// Verify that product is removed from the cart
		cy.contains('p', 'Cart is empty!');
	});
});
