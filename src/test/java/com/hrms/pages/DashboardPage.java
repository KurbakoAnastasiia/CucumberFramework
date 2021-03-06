package com.hrms.pages;

import com.hrms.utils.CommomMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.List;

public class DashboardPage extends CommomMethods {
    @FindBy(css = "a#welcome")
    public WebElement welcomeMessage;

    @FindBy (xpath = "//b[text() = 'PIM']")
    public WebElement PIMBtn;

    @FindBy (xpath = "//a[text() = 'Add Employee']")
    public WebElement addEmployeeBtn;

    @FindBy (id = "menu_pim_viewEmployeeList")
    public WebElement employeeList;

    @FindBy (xpath = "//div[@class ='menu']/ul/li")
    public List<WebElement> dashTabs;

    @FindBy(id = "menu_admin_viewAdminModule")
    public WebElement adminBtn;

    @FindBy(id = "menu_admin_Job")
    public WebElement jobBtn;

    @FindBy(id = "menu_admin_viewJobTitleList")
    public WebElement jobTitleBtn;


    public void clickOnJobTitles(WebElement element) {
        moveToElementAction(jobBtn);
        jsClick(element);
    }

    public List<String> getDashTabs() {
        List<String> dashTabsText = new ArrayList<>();
        for (WebElement dashtab : dashTabs) {
            dashTabsText.add(dashtab.getText());
        }
        return dashTabsText;
    }
    public void clickPIM() {
        jsClick(PIMBtn);
    }

    public void clickEmployeeList() {
        jsClick(employeeList);
    }

    public void clickOnAddEmployeeBtn() {
        jsClick(addEmployeeBtn);
    }

    public void clickOnAdminBtn(){
        jsClick(adminBtn);
    }

    public DashboardPage() {
        PageFactory.initElements(driver, this);
    }


}
