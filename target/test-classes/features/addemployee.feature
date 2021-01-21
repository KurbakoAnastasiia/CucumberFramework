Feature: Add Employee Functionality

  Background:
    Given enter valid credentials
    And click on login button
    Then verify dashboard is displayed
    When click on PIM
    And click on Add Employee button


  @addEmployeeWithoutLogin
  Scenario: Add employee without login details
    Then enter first and last name
    And click on save button
    Then verify employee is added successfully

    @addEmployeeWithLogin
    Scenario: Add employee with login details and middle name
      Then enter first name, middle name and last name
      When click on Create Login Details
      Then enter login details
      And click on save button
      Then verify employee is added successfully

      @parameter
      Scenario: Add employee without login details but with middle name
        Then enter first name "Marta", middle name "Mary" and last name "Ostash"
        And click on save button
        Then verify that "Marta Mary Ostash" is added successfully

      @examples
     Scenario Outline: Adding multilple employees without login details
       When enter "<FirstName>", "<MiddleName>" and "<LastName>"
       And click on save button
       Then verify "<FirstName>", "<MiddleName>" and "<LastName>" is added successfully

            Examples:
                   |FirstName|MiddleName|LastName|
                   |Mark     |J         |Smith   |
                   |John     |K         |Wick    |


        @dtWithHeader
     Scenario: Adding multiple employees at one execution
       When add multiple employees and verify they are added successfully

          |FirstName|MiddleName|LastName|EmployeeId|
          |Jack     |J         |Toronto |123456582 |
          |David    |K         |Wick    |463920294 |



          @excel
      Scenario: Adding multiple employees from excel
        When add multiple employees "AddEmployee" from excel sheet and verify they are added