$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchEmployee.feature");
formatter.feature({
  "name": "Search Employee Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchname"
    }
  ]
});
formatter.step({
  "name": "enter \"\u003cEmployeeName\u003e\" in Employee Name textbox",
  "keyword": "Then "
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "verify that employees with \"\u003cEmployeeName\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EmployeeName"
      ]
    },
    {
      "cells": [
        "Daria Denchuk"
      ]
    },
    {
      "cells": [
        "Julia Garilova"
      ]
    },
    {
      "cells": [
        "Valentina Black"
      ]
    },
    {
      "cells": [
        "Chandler Muriel Bing"
      ]
    },
    {
      "cells": [
        "Jaco Alval"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.verify_dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on PIM",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.click_on_PIM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.click_on_Employee_List()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchname"
    }
  ]
});
formatter.step({
  "name": "enter \"Daria Denchuk\" in Employee Name textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.enter_in_Employee_Name_textbox(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".empsearch_employee_name_empName\"}\n  (Session info: chrome\u003d88.0.4324.96)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anastasiias-MBP.home\u0027, ip: \u0027fe80:0:0:0:450:709b:e34c:8f15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/qj/r0xy6vn55td...}, goog:chromeOptions: {debuggerAddress: localhost:50410}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5e65cb04c5485906b1b1285830fb2058\n*** Element info: {Using\u003dclass name, value\u003dempsearch_employee_name_empName}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\n\tat com.hrms.stepdefinitions.EmployeeListStepDefinition.enter_in_Employee_Name_textbox(EmployeeListStepDefinition.java:42)\n\tat ✽.enter \"Daria Denchuk\" in Employee Name textbox(file:///Users/agameganon/eclipse-workspace/CucumberFramework/src/test/resources/features/searchEmployee.feature:27)\n",
  "status": "failed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that employees with \"Daria Denchuk\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.verify_that_employees_with_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.verify_dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on PIM",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.click_on_PIM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.click_on_Employee_List()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchname"
    }
  ]
});
formatter.step({
  "name": "enter \"Julia Garilova\" in Employee Name textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.enter_in_Employee_Name_textbox(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using class name\u003dempsearch_employee_name_empName\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anastasiias-MBP.home\u0027, ip: \u0027fe80:0:0:0:450:709b:e34c:8f15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\n\tat com.hrms.stepdefinitions.EmployeeListStepDefinition.enter_in_Employee_Name_textbox(EmployeeListStepDefinition.java:42)\n\tat ✽.enter \"Julia Garilova\" in Employee Name textbox(file:///Users/agameganon/eclipse-workspace/CucumberFramework/src/test/resources/features/searchEmployee.feature:27)\n",
  "status": "failed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that employees with \"Julia Garilova\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.verify_that_employees_with_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.96)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anastasiias-MBP.home\u0027, ip: \u0027fe80:0:0:0:450:709b:e34c:8f15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/qj/r0xy6vn55td...}, goog:chromeOptions: {debuggerAddress: localhost:50497}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5e223c91d20afd879c8ad178b7529d79\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.hrms.utils.CommomMethods.takeScreenshot(CommomMethods.java:95)\n\tat com.hrms.stepdefinitions.Hooks.endTest(Hooks.java:20)\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.verify_dashboard_is_displayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d88.0.4324.96)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anastasiias-MBP.home\u0027, ip: \u0027fe80:0:0:0:450:709b:e34c:8f15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/qj/r0xy6vn55td...}, goog:chromeOptions: {debuggerAddress: localhost:50554}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b648493152c5e0b2f90391f8d27862fc\n*** Element info: {Using\u003dcss selector, value\u003da#welcome}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\n\tat com.hrms.stepdefinitions.LoginStepDefinition.verify_dashboard_is_displayed(LoginStepDefinition.java:29)\n\tat ✽.verify dashboard is displayed(file:///Users/agameganon/eclipse-workspace/CucumberFramework/src/test/resources/features/searchEmployee.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "click on PIM",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.click_on_PIM()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.click_on_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchname"
    }
  ]
});
formatter.step({
  "name": "enter \"Valentina Black\" in Employee Name textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.enter_in_Employee_Name_textbox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that employees with \"Valentina Black\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.verify_that_employees_with_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d88.0.4324.96)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anastasiias-MBP.home\u0027, ip: \u0027fe80:0:0:0:450:709b:e34c:8f15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/qj/r0xy6vn55td...}, goog:chromeOptions: {debuggerAddress: localhost:50554}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b648493152c5e0b2f90391f8d27862fc\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.hrms.utils.CommomMethods.takeScreenshot(CommomMethods.java:95)\n\tat com.hrms.stepdefinitions.Hooks.endTest(Hooks.java:20)\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.verify_dashboard_is_displayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d88.0.4324.96)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anastasiias-MBP.home\u0027, ip: \u0027fe80:0:0:0:450:709b:e34c:8f15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/qj/r0xy6vn55td...}, goog:chromeOptions: {debuggerAddress: localhost:50582}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 74cafd05373b24ff69e216a6e9bab7bf\n*** Element info: {Using\u003dcss selector, value\u003da#welcome}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\n\tat com.hrms.stepdefinitions.LoginStepDefinition.verify_dashboard_is_displayed(LoginStepDefinition.java:29)\n\tat ✽.verify dashboard is displayed(file:///Users/agameganon/eclipse-workspace/CucumberFramework/src/test/resources/features/searchEmployee.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "click on PIM",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.click_on_PIM()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.click_on_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchname"
    }
  ]
});
formatter.step({
  "name": "enter \"Chandler Muriel Bing\" in Employee Name textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.enter_in_Employee_Name_textbox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that employees with \"Chandler Muriel Bing\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.verify_that_employees_with_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d88.0.4324.96)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anastasiias-MBP.home\u0027, ip: \u0027fe80:0:0:0:450:709b:e34c:8f15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/qj/r0xy6vn55td...}, goog:chromeOptions: {debuggerAddress: localhost:50582}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 74cafd05373b24ff69e216a6e9bab7bf\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.hrms.utils.CommomMethods.takeScreenshot(CommomMethods.java:95)\n\tat com.hrms.stepdefinitions.Hooks.endTest(Hooks.java:20)\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.LoginStepDefinition.verify_dashboard_is_displayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d88.0.4324.96)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anastasiias-MBP.home\u0027, ip: \u0027fe80:0:0:0:450:709b:e34c:8f15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/qj/r0xy6vn55td...}, goog:chromeOptions: {debuggerAddress: localhost:50617}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3a56f24dee914a05902b3e21ed135d89\n*** Element info: {Using\u003dcss selector, value\u003da#welcome}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\n\tat com.hrms.stepdefinitions.LoginStepDefinition.verify_dashboard_is_displayed(LoginStepDefinition.java:29)\n\tat ✽.verify dashboard is displayed(file:///Users/agameganon/eclipse-workspace/CucumberFramework/src/test/resources/features/searchEmployee.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "click on PIM",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.AddEmployeeStepDefinition.click_on_PIM()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Employee List",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.click_on_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchname"
    }
  ]
});
formatter.step({
  "name": "enter \"Jaco Alval\" in Employee Name textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.enter_in_Employee_Name_textbox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that employees with \"Jaco Alval\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepdefinitions.EmployeeListStepDefinition.verify_that_employees_with_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d88.0.4324.96)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anastasiias-MBP.home\u0027, ip: \u0027fe80:0:0:0:450:709b:e34c:8f15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/qj/r0xy6vn55td...}, goog:chromeOptions: {debuggerAddress: localhost:50617}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3a56f24dee914a05902b3e21ed135d89\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.hrms.utils.CommomMethods.takeScreenshot(CommomMethods.java:95)\n\tat com.hrms.stepdefinitions.Hooks.endTest(Hooks.java:20)\n",
  "status": "failed"
});
});