Feature: Search for products

    Background: I navigate to the website
        Given user navigates to the website

    Scenario: User wants to search for something
        When I search the blog 
            |blog    |
            |cypress |

        Then validate correct blog is found
            |searchValue |
            | cypress    |