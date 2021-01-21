Feature: Search Employee Functionality

  Background:
    Given enter valid credentials
    And click on login button
    Then verify dashboard is displayed
    When click on PIM
    And click on Employee List

    @search
  Scenario Outline: Search employee by ID
    Then enter valid "<EmployeeID>" in Id textbox
    And click on search button
    Then verify that emplyee with such "<EmployeeID>" is displayed

              Examples:
                 |EmployeeID|
                 |11830     |
                 |11831     |
                 |11832     |
                 |11833     |
                 |11834     |


  @searchname
      Scenario Outline:
        Then enter "<EmployeeName>" in Employee Name textbox
        And click on search button
    Then verify that employees with "<EmployeeName>" is displayed

              Examples:
                 |EmployeeName|
                 |Daria Denchuk|
                 |Julia Garilova|
                 |Valentina Black|
                 |Chandler Muriel Bing|
                 |Jaco Alval          |




