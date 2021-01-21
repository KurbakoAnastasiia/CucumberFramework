package com.hrms.pages;

import com.hrms.utils.CommomMethods;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EmployeeListPage extends CommomMethods {
    @FindBy(id = "empsearch_id")
    public WebElement idEmployeeBox;

    @FindBy (className = "empsearch_employee_name_empName")
    public WebElement employeeNameBox;

    @FindBy (id = "searchBtn")
    public WebElement searchBtn;

    @FindBy (xpath = "//table[@id = 'resultTable']/tbody/tr[1]/td[2]")
    public WebElement cellID;

    @FindBy (xpath = "//table[@id = 'resultTable']/tbody/tr[1]/td[3]")
    public WebElement cellFirstMiddleName;

    @FindBy (xpath = "//table[@id = 'resultTable']/tbody/tr[1]/td[4]")
    public WebElement cellLastName;


    public void enterEmployeeID(String employeeID) {
        sendText(idEmployeeBox, employeeID);
    }

    public void clickOnEmployeeNameBox() {
        employeeNameBox.click();
    }

    public void clickOnSearchBtn() {
        searchBtn.click();
    }

    public String getEmployeeID() {
        return cellID.getText();
    }

    public String getEmployeeName() {
        return cellFirstMiddleName.getText() + " " + cellLastName.getText();
    }

    public EmployeeListPage() {
        PageFactory.initElements(driver, this);
    }
}
