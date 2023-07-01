class HomePage{
    enterURL(){
        cy.visit(`https://qaautomationlabs.com/“`);

    }

    validateMenuHeaders(menus){
        cy.contains(menus);
        return this;
    }

    verifyPageTitle(){
        return cy.title().should('eq','About Us — QAAutomationLabs');
    }

    
}

const HomePage = new HomePage();
export default HomePage;

