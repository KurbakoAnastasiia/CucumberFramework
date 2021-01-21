package com.hrms.stepdefinitions;

import com.hrms.utils.CommomMethods;
import com.hrms.utils.Constants;
import com.hrms.utils.ExcelReading;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;
import java.util.Map;

public class AddEmployeeStepDefinition extends CommomMethods {


    @When("click on PIM")
    public void click_on_PIM() {
       dashboardPage.clickPIM();
    }

    @When("click on Add Employee button")
    public void click_on_Add_Employee_button() {
        dashboardPage.clickOnAddEmployeeBtn();
    }
    @When("enter first and last name")
    public void enter_first_and_last_name() {
        addEmployeePage.enterFirstAndLastName("Roman", "Pirogov");
    }

    @When("click on save button")
    public void click_on_save_button() {
        addEmployeePage.clickOnSaveBtn();
    }

    @Then("verify employee is added successfully")
    public void verify_employee_is_added_successfully() {
        String actualProfileName = personalDetailsPage.getUserProfileName();
        Assert.assertEquals("Personal Details are NOT Matched", "Roman Pirogov", actualProfileName);
    }


    @Then("enter first name, middle name and last name")
    public void enter_first_name_middle_name_and_last_name() {
        addEmployeePage.enterFirstMiddleLastName("Jane", "Kate", "Frank");
    }

        @When("click on Create Login Details")
    public void click_on_Create_Login_Details() {
        addEmployeePage.clickOnLoginDetails();
    }

    @Then("enter login details")
    public void enter_login_details() {
        addEmployeePage.enterLoginDetails("JaneKate2", "Kate1!2345");
    }

    @Then("enter first name {string}, middle name {string} and last name {string}")
    public void enter_first_name_middle_name_and_last_name(String firstname, String middlename, String lastname) {
        addEmployeePage.enterFirstMiddleLastName(firstname, middlename, lastname);
    }

    @Then("verify that {string} is added successfully")
    public void verify_that_is_added_successfully(String fullName) {
        String actualProfileName = personalDetailsPage.getUserProfileName();
        Assert.assertEquals("Personal Details are NOT Matched", fullName, actualProfileName);
    }

    @When("enter {string}, {string} and {string}")
    public void enter_and(String firstName, String middleName, String lastName) {
        addEmployeePage.enterFirstMiddleLastName(firstName, middleName, lastName);
    }

    @Then("verify {string}, {string} and {string} is added successfully")
    public void verify_and_is_added_successfully(String firstName, String middleName, String lastName) {
        String fullName = firstName + " " + middleName + " " + lastName;
        String actualProfileName = personalDetailsPage.getUserProfileName();
        Assert.assertEquals("Personal Details are NOT Matched", fullName, actualProfileName);
    }



    @When("add multiple employees and verify they are added successfully")
    public void add_multiple_employees_and_verify_they_are_added_successfully(DataTable employees) {
        List<Map<String, String>> employeeNames = employees.asMaps();

        for (Map<String, String> employeeName : employeeNames) {
            String firstName = employeeName.get("FirstName");
            String middleName = employeeName.get("MiddleName");
            String lastName = employeeName.get("LastName");
            String employeeID = employeeName.get("EmployeeId");

            addEmployeePage.enterFirstMiddleLastName(firstName, middleName, lastName);
            addEmployeePage.enterEmployeeId(employeeID);
            addEmployeePage.clickOnSaveBtn();
            String actualFullName = personalDetailsPage.getUserProfileName();
            String expectedFullName = firstName + " " + middleName + " " + lastName;
            Assert.assertEquals("Veryfying profile name", expectedFullName, actualFullName);
            dashboardPage.clickOnAddEmployeeBtn();
        }
    }
    @When("add multiple employees {string} from excel sheet and verify they are added")
    public void add_multiple_employees_from_excel_sheet_and_verify_they_are_added(String sheetName) {
        List<Map<String, String>> excelData = ExcelReading.excelIntoListMap(Constants.TESTDATA_FILEPATH, sheetName);

        for(Map<String, String> excelEmpName : excelData) {
            String firstName = excelEmpName.get("FirstName");
            String middleName = excelEmpName.get("MiddleName");
            String lastName = excelEmpName.get("LastName");
            String empIloyeeID = excelEmpName.get("EmployeeID");

            addEmployeePage.enterFirstMiddleLastName(firstName, middleName, lastName);
            addEmployeePage.enterEmployeeId(empIloyeeID);
            addEmployeePage.clickOnSaveBtn();

            String actualFullName = personalDetailsPage.getUserProfileName();
            String expectedFullName = firstName + " " + middleName + " " + lastName;
            Assert.assertEquals("Veryfying profile name", expectedFullName, actualFullName);
            dashboardPage.clickOnAddEmployeeBtn();
        }
    }


}
