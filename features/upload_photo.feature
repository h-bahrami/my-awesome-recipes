Feature: Test image upload
    Test if upload process completes in normal situation and proper visual elements will be displayed

    Scenario: User selects a file
        Given User selects a PNG
        And backend server is up and running
        Then Upload components shows progress of the operation
        And at the end of upload process image will be shown

    Scenario: User selects a file
        And Selected file is not a PNG
        And backend server is up and running
        Then Upload should not start
        And Proper message should be shown to user

