describe('automationexercise test', function () {
	it('Test Case 6: Contact Us Form', function () {
		// Navigate to url 'http://automationexercise.com'
		cy.visit('http://automationexercise.com');
		// Click on 'Contact Us' button
		cy.contains('a', ' Contact us').click();

		// Verify 'GET IN TOUCH' is visible
		cy.contains('h2', 'Get In Touch').should('be.visible');

		// Enter name, email, subject and message
		cy.get('[data-qa="name"]').type('Vreal');
		cy.get('[data-qa="email"]').type('vreal.fota@gmaill.com');
		cy.get('[data-qa="subject"]').type('Test Case 6: Contact Us Form');
		cy.get('[data-qa="message"]').type(
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		);

		// Upload file
		cy.get('input[name="upload_file"]').selectFile('batman.png');
		// Click 'Submit' button
		cy.get('[data-qa="submit-button"]').click();
		// Click OK button
		// Verify success message 'Success! Your details have been submitted successfully.' is visible
		cy.contains(
			'div',
			'Success! Your details have been submitted successfully.'
		).should('be.visible');
		// Click 'Home' button and verify that landed to home page successfully
		cy.contains('div a', ' Home').click();
		cy.url().should('eq', 'https://automationexercise.com/');
	});
});
