package com.hrms.pages;

import com.hrms.utils.CommomMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class PIMConfigurationPage extends CommomMethods {

    @FindBy(id = "menu_pim_Configuration")
    public WebElement configurationDropDown;

    @FindBy(id = "menu_pim_configurePim")
    public WebElement optionalFields;

    @FindBy(xpath = "//input[@value = 'Edit']")
    public WebElement editBtn;

    @FindBy(xpath = "//li[@class = 'checkbox']")
    public List<WebElement> checkboxes;

    public void clickOnConfigDropDown() {
        jsClick(configurationDropDown);
    }

    public void clickOnOptionalField() {
        jsClick(optionalFields);
    }

    public void clickOnEditBtn() {
        jsClick(editBtn);
    }

    public PIMConfigurationPage() {
        PageFactory.initElements(driver, this);
    }
}
