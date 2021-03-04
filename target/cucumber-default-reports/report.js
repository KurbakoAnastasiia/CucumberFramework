$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/apiWorkflow.feature");
formatter.feature({
  "name": "Syntax HRMS API Workflow",
  "description": "  Description: This feature file tests Syntax HRMS API Workflow",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating an Employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to create an employee",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_request_is_prepared_to_create_an_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a POST call is made to create an Employee",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_POST_call_is_made_to_create_an_Employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code for creating an employee is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_status_code_for_creating_an_employee_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee is created contains key \"Message\" and value \"Entry Created\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_employee_is_created_contains_key_and_value(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employeeID \"Employee[0].employee_id\" is stored in the global variable to be used for other calls",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_employeeID_is_stored_in_the_global_variable_to_be_used_for_other_calls(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieving the created employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to retrieve the created employee",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_request_is_prepared_to_retrieve_the_created_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a GET call is made to retrieve the created Employee",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_GET_call_is_made_to_retrieve_the_created_Employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code for retrieving the created employee is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_status_code_for_retrieving_the_created_employee_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the retrieved EmployeeID \"employee[0].employee_id\" matches the globally stored EmployeeID",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_retrieved_EmployeeID_matches_the_globally_stored_EmployeeID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the retrieved data matches the data used to create the employee",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_retrieved_data_matches_the_data_used_to_create_the_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the retrieved data at \"employee\" matches the data used to create the employee with employee ID \"employee[0].employee_id\"",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_retrieved_data_at_matches_the_data_used_to_create_the_employee_with_employee_ID(java.lang.String,java.lang.String,io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Update the created Employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to update the created employee",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_request_is_prepared_to_update_the_created_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a PUT call is made to update the employee",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_PUT_call_is_made_to_update_the_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the updated employee contains key \"Message\" and value \"Entry updated\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_updated_employee_contains_key_and_value(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieving the updated employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to retrieve the updated employee",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_request_is_prepared_to_retrieve_the_updated_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a GET call is made to retrieve the updated Employee",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_GET_call_is_made_to_retrieve_the_updated_Employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code for retrieving the updated employee is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_status_code_for_retrieving_the_updated_employee_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the retrieved Employee_Middle_Name \"employee[0].emp_middle_name\" matches the updated_middle_name",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_retrieved_Employee_Middle_Name_matches_the_updated_middle_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Partially updating the employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to partially update the employee",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_request_is_prepared_to_partially_update_the_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a PATCH call is made to partially update the employee",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_PATCH_call_is_made_to_partially_update_the_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the partially updated employee contains key \"Message\" and value \"Entry updated\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_partially_updated_employee_contains_key_and_value(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the partially updated employee \"employee[0].emp_firstname\" matches the updated_firstname",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_partially_updated_employee_matches_the_updated_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete the created employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to delete the employee",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_request_is_prepared_to_delete_the_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a DELETE call is made",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_DELETE_call_is_made()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee is successfully deleted with the \"message\" in response \"Entry deleted\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_employee_is_successfully_deleted_with_the_in_response(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the employee ID \"employee[0].employee_id\" is the same as the one stored in global",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_employee_ID_is_the_same_as_the_one_stored_in_global(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get all Employees",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to get all employees",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_request_is_prepared_to_get_all_employees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a GET call is made to retrive all employees",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_GET_call_is_made_to_retrive_all_employees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it contains key1 \"Total Employees\" and key2 \"Employees\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.it_contains_key1_and_key2(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "get all Employees status",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to get all employees status",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_request_is_prepared_to_get_all_employees_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a GET call is made to retrieve all employees status",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_GET_call_is_made_to_retrieve_all_employees_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it contains the value1 \"Employee\" value2 \"Worker\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.it_contains_the_value1_value2(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a JWT is generated",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.generateTokenSteps.a_JWT_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get Job Titles",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiWorkflow"
    }
  ]
});
formatter.step({
  "name": "a request is prepared to get job titles",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_request_is_prepared_to_get_job_titles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a GET call is made to retrive all job titles",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.a_GET_call_is_made_to_retrive_all_job_titles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response contains value1 \"Cloud Architect\" and value2 \"Cloud Consultant\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.API.ApiTestingFinalSteps.response_contains_value1_and_value2(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});