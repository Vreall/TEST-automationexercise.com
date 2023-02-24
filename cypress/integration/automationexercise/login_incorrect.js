describe('automationexercise test', function () {
	it('Test Case 3: Login User with incorrect email and password', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');
		//Click on 'Signup / Login' button
		cy.contains('a', ' Signup / Login').click();
		// Verify 'Login to your account' is visible
		cy.contains('h2', 'Login to your account').should('be.visible');
		// Enter incorrect email address and password
		cy.get('[data-qa="login-email"]').type('vreale.fota@gmaill.com');
		cy.get('[data-qa="login-password"]').type('haslo123e');
		// Click 'login' button
		cy.get('[data-qa="login-button"]').click();
		// Verify error 'Your email or password is incorrect!' is visible
		cy.contains('p', 'Your email or password is incorrect!').should(
			'be.visible'
		);
	});
});
