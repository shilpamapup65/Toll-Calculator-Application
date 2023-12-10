describe('Toll Calculator Application', () => {
	it('successfully loads', () => {
	  cy.visit('http://localhost:3000'); // Update with your local development server URL
	});
  
	it('calculates toll and displays route', () => {
	  // Assume the TollGuru API response and encoded polyline are mocked for testing
	  const mockedApiResponse = {
		// Mocked API response structure
	  };
  
	  cy.intercept('POST', '**/calculation', mockedApiResponse).as('calculateToll');
  
	  // Trigger the toll calculation (you may need to adjust selectors based on your UI)
	  cy.get('#calculateToll').click();
  
	  // Wait for the API request to be completed
	  cy.wait('@calculateToll').then((interception) => {
		const { request } = interception;
  
		// Assuming your response contains an encoded polyline
		const encodedPolyline = request.body.route;
  
		// Decode and assert on the decoded polyline
		const decodedPolyline = Cypress.env('decodePolylineFunction')(encodedPolyline);
		expect(decodedPolyline).to.have.length.greaterThan(0);
  
		// Assuming your UI is updated with the route information
		cy.get('#leafletMapContainer').should('exist');
	  });
	});
  });
  