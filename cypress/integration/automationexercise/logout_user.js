describe('automationexercise test', function () {
	it('Test Case 4: Logout User', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');
		//Click on 'Signup / Login' button
		cy.contains('a', ' Signup / Login').click();
		// Verify 'Login to your account' is visible
		cy.contains('h2', 'Login to your account').should('be.visible');
		// Enter correct email address and password
		cy.get('[data-qa="login-email"]').type('vreal.fota@gmaill.com');
		cy.get('[data-qa="login-password"]').type('haslo123');
		// Click 'login' button
		cy.get('[data-qa="login-button"]').click();
		// Verify that 'Logged in as username' is visible
		cy.contains('a', ' Logged in as ').should('be.visible');
		// Click 'Logout' button
		cy.contains('a', ' Logout').click();
		// Verify that user is navigated to login page
		cy.url().should('include', '/login');
	});
});
