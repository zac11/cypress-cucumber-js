import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../Pages/HomePage/Homepage.spec";


beforeEach(() => {
    cy.viewport(1600, 720);
    });

    Given(/^I navigate to the website homepage$/, () => {
    homePage.enterURL();
    });


    Then(/^I validate the menus on the Page$/,(datatable) =>{
        datatable.hashes().forEach((element)=>{
            homePage.validateMenus(element.menu_name)
        });
    });

    Then(/^the title of page is validated$/,(datatable)=>{
        datatable.hashes().forEach((element)=>{
            homePage.verifyPageTitle(element.title);
        });
    });