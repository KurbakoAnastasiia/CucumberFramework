package com.hrms.stepdefinitions;

import com.hrms.utils.CommomMethods;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.List;

public class PIMConfigurationStepDefinition extends CommomMethods {

    @When("click on configuration dropdown")
    public void click_on_configuration_dropdown() {
        pimConfigurationPage.clickOnConfigDropDown();
    }

    @When("click on optional fields")
    public void click_on_optional_fields() {
        pimConfigurationPage.clickOnOptionalField();
    }

    @Then("click on edit button")
    public void click_on_edit_button() {
        pimConfigurationPage.clickOnEditBtn();
    }

    @Then("uncheck unnecessary checkboxes")
    public void uncheck_unnecessary_checkboxes(DataTable checkBoxOptions) throws InterruptedException {
        List<String> expectedCheckBoxOptions = checkBoxOptions.asList();
        for(int i = 0; i < expectedCheckBoxOptions.size(); i++) {
            clickRadioOrCheckBoxByText(pimConfigurationPage.checkboxes, expectedCheckBoxOptions.get(i));
        }
    }
}
