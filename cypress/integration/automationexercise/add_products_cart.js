/// <reference types="Cypress" />
describe('automationexercise test', function () {
	it('Add Products in Cart', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');

		// Click 'Products' button
		cy.contains('a', ' Products').click();
		// Hover over first product and click 'Add to cart'
		cy.get('div[class="product-image-wrapper"').eq(0).realHover('mouse');
		cy.wait(2000);
		cy.contains(
			'div[class="overlay-content"] a[data-product-id="1"]',
			'Add to cart'
		).click({ waitForAnimations: false });
		// Click 'Continue Shopping' button
		cy.get('[data-dismiss="modal"]').click();
		// Hover over second product and click 'Add to cart'
		cy.get('div[class="product-image-wrapper"').eq(1).realHover('mouse');
		cy.wait(2000);
		cy.contains(
			'div[class="overlay-content"] a[data-product-id="2"]',
			'Add to cart'
		).click({ waitForAnimations: false });
		// Click 'View Cart' button
		cy.contains('a', 'View Cart').click();
		// Verify both products are added to Cart
		cy.get('tbody').children().should('have.length', '2');
		// Verify their prices, quantity and total price
	});
});
