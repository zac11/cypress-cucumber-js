Feature: Home Page Tests

    Background: Navigate to the website
        Given I navigate to the website homepage
    
    Scenario: Verify content on homepage
        Then I validate the menus on the Page
            | menu_name  |
            | Home       |
            | Blogs      |
            | Contact Us |

    
    Scenario: Validate title of homepage
        Then the title of page is validated
            | title                       |
            |About Us - QA AutomationLabs |