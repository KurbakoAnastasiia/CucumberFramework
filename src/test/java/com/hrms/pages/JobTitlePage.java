package com.hrms.pages;

import com.hrms.utils.CommomMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class JobTitlePage extends CommomMethods {

    @FindBy(xpath = "//table[@id = 'resultTable']/tbody/tr/td[2]")
    public List<WebElement> jobTitlesList;

    public JobTitlePage() {
        PageFactory.initElements(driver, this);
    }
}
