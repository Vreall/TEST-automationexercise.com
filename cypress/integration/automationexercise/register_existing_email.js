describe('automationexercise test', function () {
	it('Test Case 5: Register User with existing email', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');

		// Click on 'Signup / Login' button
		cy.contains('a', ' Signup / Login').click();
		// Verify 'New User Signup!' is visible
		cy.contains('h2', 'New User Signup!').should('be.visible');
		// Enter name and already registered email address
		cy.get('[data-qa="signup-name"').type('vreal');
		cy.get('[data-qa="signup-email"').type('vreal.fota@gmaill.com');
		// Click 'Signup' button
		cy.get('[data-qa="signup-button"').click();
		// Verify error 'Email Address already exist!' is visible
		cy.contains('p', 'Email Address already exist!').should('be.visible');
	});
});
