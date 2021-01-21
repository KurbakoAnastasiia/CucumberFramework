package com.hrms.pages;

import com.hrms.utils.CommomMethods;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PersonalDetailsPage extends CommomMethods {

    @FindBy(xpath = "//div[@id = 'profile-pic']//following-sibling::h1")
    public WebElement userProfileName;

    @FindBy(xpath = "//h1[text() = 'Personal Details']")
    public WebElement personalDetail;

    @FindBy (id = "personal_txtEmployeeId")
    public WebElement employeeIDtxt;

    @FindBy (id = "personal_txtEmpFirstName")
    public WebElement firstNameText;

    @FindBy (id = "personal_txtEmpMiddleName")
    public WebElement middleNameText;

    @FindBy (id = "personal_txtEmpLastName")
    public WebElement lastNameText;

    public String getUserProfileName() {
        return userProfileName.getText();
    }

    public PersonalDetailsPage() {
        PageFactory.initElements(driver, this);
    }
}
