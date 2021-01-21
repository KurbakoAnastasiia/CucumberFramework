package com.hrms.utils;

import com.hrms.testbase.BaseClass;
import com.hrms.testbase.PageInitializer;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CommomMethods extends PageInitializer {


    /**
     * This method will clear a textbox and send text to it
     * @param element
     * @param textToSend
     */

    public static void sendText(WebElement element, String textToSend) {
        element.clear();
        element.sendKeys(textToSend);
    }

    /**
     * This method will return an object of Explicit wait with time set to 20 sec
     * @return WebDriverWait
     */

    public static WebDriverWait getWait() {
        WebDriverWait wait = new WebDriverWait(driver, Constants.EXPLICIT_WAIT);
        return wait;
    }

    /**
     * This method will wait untill given element becomes clickable
     * @param element
     */
    public static void waitForClickability(WebElement element) {
        getWait().until(ExpectedConditions.elementToBeClickable(element));
    }

    public static void waitForVisibality(WebElement element) {
        getWait().until(ExpectedConditions.visibilityOf(element));
    }

    /**
     * This method will wait till and then click
     * @param element
     */
    public static void click(WebElement element) {
        waitForClickability(element);
        element.click();
    }

    /**
     * This method will return an Object of JavascriptExecutor
     * @return JavascriptExecutor
     */

    public static JavascriptExecutor getJSExecutor(){
        JavascriptExecutor js = (JavascriptExecutor) driver;
        return js;
    }
    /**
     * This method will click using JavascriptExecutor
     * @param element
     */

    public static void jsClick(WebElement element) {
        getJSExecutor().executeScript("arguments[0].click()", element);
    }


    public static void jsSendText(WebElement element, String textToSend) {
        getJSExecutor().executeScript("arguments[0].value='" + textToSend+ ";", element);
    }

    /**
     * This method will take screenshot and save it
     * @param fileName
     *
     */


    public static byte[] takeScreenshot(String fileName) {
        TakesScreenshot ts = (TakesScreenshot) driver;
        byte[] bytes = ts.getScreenshotAs(OutputType.BYTES);
        File sourceFile = ts.getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(sourceFile, new File(Constants.SCREENSHOT_FILEPATH + fileName + getTimeStamp("yyyy-MM-dd-HH-mm-ss") + ".png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return bytes;
    }

    public static String getTimeStamp(String pattern) {
        Date date = new Date();

        SimpleDateFormat sdf = new SimpleDateFormat(pattern);
        return sdf.format(date);
    }

    public static void clickCheckBoxIfIsNotSelected(WebElement webElement) {
        if(!webElement.isSelected()) {
            webElement.click();
        }
    }
}
