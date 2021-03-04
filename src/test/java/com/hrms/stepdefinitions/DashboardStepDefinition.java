package com.hrms.stepdefinitions;

import com.hrms.utils.CommomMethods;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class DashboardStepDefinition extends CommomMethods {

    @Then("verify the following tabs on dashboard")
    public void verify_the_following_tabs_on_dashboard(DataTable dashboardTabs) {

        List<String> expectedDashTabs = dashboardTabs.asList();
        List<String> actualDashTabs = dashboardPage.getDashTabs();
        System.out.println(expectedDashTabs);
        System.out.println(actualDashTabs);
        Assert.assertEquals("Verify dashboard tabs", expectedDashTabs, actualDashTabs);

    }

    @When("click on Admin button")
    public void click_on_Admin_button() {
        dashboardPage.clickOnAdminBtn();
    }
}
