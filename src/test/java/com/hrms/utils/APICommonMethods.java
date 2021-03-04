package com.hrms.utils;

import com.hrms.API.generateTokenSteps;
import com.hrms.testbase.PageInitializer;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

public class APICommonMethods {

    public static RequestSpecification getOneEmployeeRequest(String token, String employeeID) {
        RequestSpecification request = given()
                .header(APIContants.HEADER_CONTENT_TYPE, APIContants.CONTENT_TYPE)
                .header(APIContants.HEADER_AITHORIZATION, token)
                .queryParam("employee_id", employeeID);
        return request;
    }
}
