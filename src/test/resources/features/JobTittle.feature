Feature: Job Title Page Fuctionality


  @jobtittle
  Scenario: Comparison UI Job Titles and Database Job Titles
    Given enter valid credentials
    And click on login button
    Then verify dashboard is displayed
    When click on Admin button
    And click on Job Button and select Job Tittles
    Then collect Job Titles data from hrms database
    And verify that Job Titles data from UI and DB is matched
