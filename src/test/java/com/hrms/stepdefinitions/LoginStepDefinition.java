package com.hrms.stepdefinitions;

import com.hrms.utils.CommomMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;


public class LoginStepDefinition extends CommomMethods {

    @Given("navigate to HRMS login page")
    public void navigate_to_hrms_login_page() {
        setUp();
    }

    @When("enter valid credentials")
    public void enter_valid_credentials() {
        loginPage.login("Admin", "Hum@nhrm123");
    }

    @When("click on login button")
    public void click_on_login_button() {
        loginPage.clickOnLoginBtn();
    }

    @Then("verify dashboard is displayed")
    public void verify_dashboard_is_displayed() {
        Assert.assertTrue(dashboardPage.welcomeMessage.isDisplayed());
    }

    @Then("quit the browser")
    public void quit_the_browser() {
        tearDown();
    }

    @When("enter invalid credentials")
    public void enter_invalid_credentials() {
        loginPage.login("Admin123", "Hum@nhgdsrm12@3");
    }

    @Then("verify error message")
    public void verify_error_message() {
       Assert.assertEquals("Verifying error message", "Invalid credentials", loginPage.getErrorMessageText());
    }

    @When("enter empty username and valid password")
    public void enter_empty_username_and_valid_password() {
        loginPage.login("", "Hum@nhrm123");
    }

    @When("enter valid username and empty password")
    public void enter_valid_username_and_empty_password() {
       loginPage.login("Admin", "");
    }
    @Then("verify error message for empty username")
    public void verify_error_message_for_empty_username() {
        Assert.assertEquals("Verifying error message", "Username cannot be empty", loginPage.getErrorMessageText());
    }

    @Then("verify error message for empty password")
    public void verify_error_message_for_empty_password() {
        Assert.assertEquals("Verifying error message", "Password cannot be empty", loginPage.getErrorMessageText());
    }

}