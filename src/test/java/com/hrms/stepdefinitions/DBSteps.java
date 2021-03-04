package com.hrms.stepdefinitions;

import com.hrms.utils.DBUtils;
import com.hrms.utils.GlobalVariables;
import io.cucumber.java.en.Then;

public class DBSteps {

    @Then("collect employee data from hrms database")
    public void collect_employee_data_from_hrms_database() {
        String query = "select emp_firstname, emp_middle_name, emp_lastname from hs_hr_employees where employee_id=" + GlobalVariables.emp_ID;
        GlobalVariables.dbList = DBUtils.getDBDataIntoListOfMaps(query);
    }

    @Then("collect Job Titles data from hrms database")
    public void collect_Job_Titles_data_from_hrms_database() {
        String query = "select job_title from ohrm_job_title order by job_title;";
        GlobalVariables.dbList = DBUtils.getDBDataIntoListOfMaps(query);
    }

}
