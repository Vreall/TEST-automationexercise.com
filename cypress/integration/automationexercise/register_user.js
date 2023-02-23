describe('automationexercise test', function () {
    it('Test Case 1: Register User', function () {
			// Navigate to url 'http://automationexercise.com' & Verify that home page is visible successfully
			cy.visit('http://automationexercise.com');

			//Click on 'Signup / Login' button
			cy.contains('a', ' Signup / Login').click();

			//Verify 'New User Signup!' is visible
			cy.contains('h2', 'New User Signup!').should('be.visible');

			//Enter name and email address
			cy.get('[data-qa="signup-name"').type('vreal');
			cy.get('[data-qa="signup-email"').type('vreal.fotoo@gmaill.comm');

			//Click 'Signup' button
			cy.get('[data-qa="signup-button"').click();

			//Verify that 'ENTER ACCOUNT INFORMATION' is visible
			cy.contains('b', 'Enter Account Information').should('be.visible');

			//Fill details: Title, Name, Email, Password, Date of birth
			cy.get('input[value="Mr"]').check();
			cy.get('[data-qa="password"]').type('haslo123');
			cy.get('[data-qa="days"]').select('7');
			cy.get('[data-qa="months"]').select('11');
			cy.get('[data-qa="years"]').select('1995');
			//Select checkbox 'Sign up for our newsletter!'
			cy.get('#newsletter').check();
			//Select checkbox 'Receive special offers from our partners!'
			cy.get('#optin').check();
			//Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
			cy.get('[data-qa="first_name"]').type('Marek');
			cy.get('[data-qa="last_name"]').type('Kowalski');
			cy.get('[data-qa="company"]').type('It factory');
			cy.get('[data-qa="address"]').type('Long Street 20c/10');
			cy.get('[data-qa="country"]').select('United States');
			cy.get('[data-qa="state"]').type('Florida');
			cy.get('[data-qa="city"]').type('Miami');
			cy.get('[data-qa="zipcode"]').type('33101');
			cy.get('[data-qa="mobile_number"]').type('123456789');

			//Click 'Create Account button'
			cy.get('[data-qa="create-account"]').click();

			//Verify that 'ACCOUNT CREATED!' is visible
			cy.contains('b', 'Account Created!').should('be.visible');
			//Click 'Continue' button
			cy.get('[data-qa="continue-button"]').click();

			//Verify that 'Logged in as username' is visible
			cy.contains('a', ' Logged in as ').should('be.visible');
			//Click 'Delete Account' button
			cy.contains('a', ' Delete Account').click();
			//Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
            cy.contains('b', 'Account Deleted!').should('be.visible');
            cy.get('[data-qa="continue-button"]').click();
		});
});
