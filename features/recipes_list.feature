Feature: Displaying recipes to the users

    App should list all availbe recipes with proper sorting, search and paging

    Scenario: Users opens app's main page
        Given Backend is up and running normally
        When UI sends a fetch request
        And backend responses
        Then UI shows recipes in a list

    Scenario: A recipe gets created or updated
        Given A recipe successfully got updated
        And backend response received accordingly
        Then UI updates the recipes list

    Scenario: A recipe got deleted
        Given A recipe successfully deleted
        And backend response received accordingly
        Then UI updates the recipes list


