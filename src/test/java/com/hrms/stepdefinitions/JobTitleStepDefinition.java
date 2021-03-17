package com.hrms.stepdefinitions;

import com.hrms.utils.CommomMethods;
import com.hrms.utils.GlobalVariables;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.*;

public class JobTitleStepDefinition extends CommomMethods {



    @When("click on Job Button and select Job Tittles")
    public void click_on_Job_Button_and_select_Job_Tittles() {
       dashboardPage.clickOnJobTitles(dashboardPage.jobTitleBtn);
    }

    @Then("verify that Job Titles data from UI and DB is matched")
    public void verify_that_Job_Titles_data_from_UI_and_DB_is_matched() {
        List<String> jobTitlesFromUI = new ArrayList<>();
        for (WebElement jobTitle : jobTitlePage.jobTitlesList) {
            String rowText = jobTitle.getText();
            jobTitlesFromUI.add(rowText);
        }
        List<String> jobTitlesFromDB = new ArrayList<>();
        for (Map<String,String> mapJobs:GlobalVariables.dbList) {
            Set<Map.Entry<String, String>> entries = mapJobs.entrySet();
            for (Map.Entry<String,String> entry:entries) {
                jobTitlesFromDB.add(entry.getValue());
            }
        }
        Collections.sort(jobTitlesFromDB);
        Collections.sort(jobTitlesFromUI);
        System.out.println(jobTitlesFromUI);
        System.out.println(jobTitlesFromDB);

        for (int i = 0; i < jobTitlesFromUI.size(); i++) {
            String expected = jobTitlesFromUI.get(i);
            String actual = jobTitlesFromDB.get(i);
            Assert.assertEquals("Data is not matching", expected, actual);
        }
    }

    @Then("verify that Job Titles data is matched")
    public void verify_that_Job_Titles_data_is_matched() {

    }
}

