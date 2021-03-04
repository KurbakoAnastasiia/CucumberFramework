package com.hrms.API;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.hamcrest.MatcherAssert;
import org.junit.Assert;
import org.junit.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
//import static org.hamcrest.CoreMatchers.equalTo;

public class HardCodedExamples {

    String baseURI = RestAssured.baseURI = "http://3.237.189.167/syntaxapi/api";
    String token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTQyMTcyMTMsImlzcyI6ImxvY2FsaG9zdCIsImV4cCI6MTYxNDI2MDQxMywidXNlcklkIjoiMjQ3OCJ9.1vqmheksdn1t57vIlXEwkKLO1IRwrQ_fmylQEGpffp8";

    @Test
    public void sampleTest() {
//       RestAssured.baseURI = "http://3.237.189.167/syntaxapi/api";
//       String token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTQxMjY1MjksImlzcyI6ImxvY2FsaG9zdCIsImV4cCI6MTYxNDE2OTcyOSwidXNlcklkIjoiMjQ3OCJ9.9MIRYCe1dTQ4fRYos_Vk_iZiYVvdB_5D16wx-m125ww";
        //preparing request to get one employee
        RequestSpecification preparingGetOneEmployeeRequest = given().header("Authorization", token)
                .header("Content-type", "Application/json")
                .queryParam("employee_id", "13023");
        //sending the request to the endpoint

        Response getOneEmployeeResponse = preparingGetOneEmployeeRequest.when().get("/getOneEmployee.php");

        //print the response
        // System.out.println(getOneEmployeeResponse.asString());
        getOneEmployeeResponse.prettyPrint();

        // Assert that status code is 200
        getOneEmployeeResponse.then().assertThat().statusCode(200);
    }


    @Test
    public void aPostCreateEmployee() {
        // preparing create an Employee Request
        RequestSpecification createEmployeeRequest = given().header("Authorization", token)
                .header("Content-type", "Application/json")
                .body("{\n" +
                        "  \"emp_firstname\": \"Anastasiia\",\n" +
                        "  \"emp_lastname\": \"Petrova\",\n" +
                        "  \"emp_middle_name\": null,\n" +
                        "  \"emp_gender\": \"F\",\n" +
                        "  \"emp_birthday\": \"1987-02-11\",\n" +
                        "  \"emp_status\": \"employee\",\n" +
                        "  \"emp_job_title\": \"IT Analyst\"\n" +
                        "}");

        //Making a Post call to Create Employee
        Response createEmployeeResponse = createEmployeeRequest.when().post("/createEmployee.php");
        //Printing Response
        createEmployeeResponse.prettyPrint();

        //Assert that status code is 201
        createEmployeeResponse.then().assertThat().statusCode(201);
        //Get Employee ID
//        String employeeID = createEmployeeResponse.jsonPath().getString("Employee[0].employee_id");
//        System.out.println(employeeID);

        JsonPath js = createEmployeeResponse.jsonPath();
        Object employeID = js.get("Employee[0].employee_id");
        System.out.println(employeID);

        //Assert that message contains Entry Created
        createEmployeeResponse.then().assertThat().body("Message", equalTo("Entry Created"));

        //Assert that firstname is Anastasiia
        createEmployeeResponse.then().assertThat().body("Employee[0].emp_firstname", equalTo("Anastasiia"));
    }


    @Test
    public void bgetCreateEmployee() {
        RequestSpecification getCreatedEmployee = given().header("Authorization", token)
                .header("Content-type", "Application/json").queryParam("employee_id", "15864A");

        Response getEmployeeResponce = getCreatedEmployee.when().get("/getOneEmployee.php");
        getEmployeeResponce.prettyPrint();
        String empID = getEmployeeResponce.body().jsonPath().getString("employee[0].employee_id");

        //we are checking if the empID is equal to the one mentioned in string
        boolean verifyEmployeeID = empID.equalsIgnoreCase("15864A");
        System.out.println(verifyEmployeeID);
        //Assert.assertTrue("Employee ID is not matching", verifyEmployeeID);

        getEmployeeResponce.then().assertThat().body("employee[0].employee_id", equalTo("15864A"));

    }

    @Test
    public void cUpdateEmployee() {
       RequestSpecification updateEmployeerequest = given().header("Authorization", token)
                .header("Content-type", "Application/json")
                .body("{\n" +
                        "  \"employee_id\": \"16063A\",\n" +
                        "  \"emp_firstname\": \"Gala\",\n" +
                        "  \"emp_lastname\": \"Uvarova\",\n" +
                        "  \"emp_middle_name\": \"null\",\n" +
                        "  \"emp_gender\": \"F\",\n" +
                        "  \"emp_birthday\": \"1981-07-18\",\n" +
                        "  \"emp_status\": \"Employee\",\n" +
                        "  \"emp_job_title\": \"IT Analyst\"\n" +
                        "}");

        Response updateEmployeeResponse = updateEmployeerequest.when().put("/updateEmployee.php");

        updateEmployeeResponse.prettyPrint();

        //assert that updated information is correct

        JsonPath js = updateEmployeeResponse.jsonPath();
        String employee_firstname = js.getString("employee[0].emp_firstname");
        System.out.println(employee_firstname);

        assertThat(employee_firstname, equalTo("Gala"));

        //in other way
        updateEmployeeResponse.then().assertThat().body("employee[0].emp_firstname", equalTo("Gala"));

        //the other way
        //create the boolean and assert from junit
    }

    @Test
    public void dPartiallyUpdateEmployee() {
        RequestSpecification partiallyUpdateEmployee = given().header("Authorization", token)
                                                              .header("Content-type", "Application/json")
                                                              .body("{\n" +
                                                                      "  \"employee_id\": \"16063A\",\n" +
                                                                      "  \"emp_lastname\": \"Sidorova\"\n" +
                                                                      "}");

        Response partiallyUpdateEmployeeResponse = partiallyUpdateEmployee.when().patch("/updatePartialEmplyeesDetails.php");

        partiallyUpdateEmployeeResponse.prettyPrint();

        //assert that body contains the Message Entry updated different ways to do assert

        //1st
        JsonPath js = partiallyUpdateEmployeeResponse.jsonPath();
        Object message = js.get("Message");
        System.out.println(message);
        assertThat(message, equalTo("Entry updated"));

        //2nd
        partiallyUpdateEmployeeResponse.then().body("Message", containsString("Entry updated"));
    }

    @Test
    public void dDeleteEmployeeRequest() {
       RequestSpecification deleteEmployeeRequest = given().header("Authorization", token)
                .header("Content-type", "Application/json")
                .queryParam("employee_id", "16077A");

       Response deleteEmployeeResponse = deleteEmployeeRequest.when().delete("/deleteEmployee.php");
       deleteEmployeeResponse.prettyPrint();


       deleteEmployeeResponse.then().assertThat().body("message", containsString("Entry deleted"));

    }

    @Test
    public void fdeleteEmployee() {

        given().header("Authorization", token)
                .header("Content-type", "Application/json")
                .queryParam("employee_id", "16077A").
                when().
                delete("/deleteEmployee.php")
                .then().assertThat().
                        body("message", containsString("Entry deleted"));
    }

    @Test
    public void fGetJobTitles() {
        given()
                .header("Authorization", token)
                .header("Content-type", "Application/json")
                .when()
                .get("/jobTitle.php")
                .then()
                .assertThat()
                .statusCode(200);
    }

}

