Feature: Basic Calculator Operations

Scenario: Adding two numbers
    Given I have entered 5 into the calculator
    And I have entered 8 into the calculator
    When I press add
    Then the result should be 13 on the screen

Scenario: Multiplying two numbers
    Given I have entered 3 into the calculator
    And I have entered 4 into the calculator
    When I press multiply
    Then the result should be 12 on the screen

