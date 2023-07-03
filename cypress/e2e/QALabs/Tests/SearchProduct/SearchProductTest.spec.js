import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import SearchProduct from "../../Pages/SearchPage/SearchProduct.spec";
import homePage from "../../Pages/HomePage/Homepage.spec";
import searchProduct from "../../Pages/SearchPage/SearchProduct.spec";

Given(/^user navigates to the website$/,()=>{
    homePage.enterURL();
});

When(/^I search the blog$/,(dataTable)=>{
    dataTable.hashes().forEach((element)=>{
        searchProduct.searchProduct(element.blog)
    })
});

Then(/^validate correct blog is found$/, (datatable) => {
    datatable.hashes().forEach((element) => {
    searchProduct.verifyProduct(element.searchValue);
    });
});