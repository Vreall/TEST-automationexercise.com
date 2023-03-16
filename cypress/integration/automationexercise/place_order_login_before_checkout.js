/// <reference types="Cypress" />
describe('automationexercise test', function () {
	it('Place Order: Login before Checkout', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');

		// Click 'Signup / Login' button
		cy.contains('a', ' Signup / Login').click();

		//Fill email, password and click 'Login' button
		cy.get('[data-qa="login-email"]').type('vreal.fota@gmailll.com');
		cy.get('[data-qa="login-password"]').type('haslo123');

		//Click 'Login' button
		cy.get('[data-qa="login-button"]').click();

		//Verify that 'Logged in as username' is visible
		cy.contains('a', ' Logged in as ').should('be.visible');
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
		// Click 'Proceed To Checkout' button
		cy.contains('a', 'Proceed To Checkout').click();

		// Verify Address Details and Review Your Order
		cy.get('ul#address_delivery > li.address_firstname').should(
			'include.text',
			'Marek Kowalski'
		);
		cy.get('ul#address_delivery > li.address_address1 ')
			.eq(0)
			.should('include.text', 'It factory');
		cy.get('ul#address_delivery > li.address_address1 ')
			.eq(1)
			.should('include.text', 'Long Street 20c/10');
		cy.get('ul#address_delivery > li.address_city ').should(
			'include.text',
			'Miami Florida'
		);
		cy.get('ul#address_delivery > li.address_country_name ').should(
			'include.text',
			'United States'
		);
		cy.get('ul#address_delivery > li.address_phone ').should(
			'include.text',
			'123456789'
		);
		cy.get('#product-1>td.cart_description>h4').should('have.text', 'Blue Top');
		cy.get('#product-4>td.cart_description>h4').should(
			'have.text',
			'Stylish Dress'
		);
		cy.get('#product-1>td.cart_quantity>button').should('have.text', '1');
		cy.get('#product-4>td.cart_quantity>button').should('have.text', '1');
		// Enter description in comment text area and click 'Place Order'
		cy.contains('a', 'Place Order').click();
		// Enter payment details: Name on Card, Card Number, CVC, Expiration date
		cy.get('[data-qa="name-on-card"]').type('Credit Card');
		cy.get('[data-qa="card-number"]').type('8983243255346');
		cy.get('[data-qa="cvc"]').type('908');
		cy.get('[data-qa="expiry-month"]').type('02');
		cy.get('[data-qa="expiry-year"]').type('2024');
		// Click 'Pay and Confirm Order' button
		cy.get('[data-qa="pay-button"]').click();
		// Verify success message 'Your order has been placed successfully!'
		cy.get('[data-qa="order-placed"] + p').should(
			'have.text',
			'Congratulations! Your order has been confirmed!'
		);
		// Click 'Delete Account' button
		cy.contains('a', ' Delete Account').click();
		// Verify 'ACCOUNT DELETED!' and click 'Continue' button
		cy.get('[data-qa="account-deleted"]').should(
			'have.text',
			'Account Deleted!'
		);
		cy.get('[data-qa="continue-button"]').click();
	});
});
