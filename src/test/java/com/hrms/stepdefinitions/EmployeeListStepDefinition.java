package com.hrms.stepdefinitions;

import com.hrms.pages.EmployeeListPage;
import com.hrms.utils.CommomMethods;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class EmployeeListStepDefinition extends CommomMethods {

    @When("click on Employee List")
    public void click_on_Employee_List() {
       dashboardPage.clickEmployeeList();
    }

    @Then("enter valid {string} in Id textbox")
    public void enter_valid_in_Id_textbox(String employeeID) {
        employeeListPage.enterEmployeeID(employeeID);
    }

    @Then("click on search button")
    public void click_on_search_button() {
        employeeListPage.clickOnSearchBtn();
    }


    @Then("verify that emplyee with such {string} is displayed")
    public void verify_that_emplyee_with_such_is_displayed(String employeeID) {
        String expectedID = employeeID;
        String actualID = employeeListPage.getEmployeeID();
        Assert.assertEquals("IDs are NOT matching", expectedID, actualID);
    }

    @Then("enter {string} in Employee Name textbox")
    public void enter_in_Employee_Name_textbox(String employeename) {
        getWait().until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@class='ac_input inputFormatHint']")));
       employeeListPage.employeeNameBox.sendKeys(employeename, Keys.ENTER);
    }

    @Then("verify that employees with {string} is displayed")
    public void verify_that_employees_with_is_displayed(String employeename) {
        String expectedID = employeename;
        String actualID = employeeListPage.getEmployeeName();
        Assert.assertEquals("Verify employee is displayed", expectedID, actualID);
    }

    @When("search for job titles")
    public void search_for_job_titles() {
        storeAllDDValuesIntoList(employeeListPage.jobTitleDD);
    }



}
