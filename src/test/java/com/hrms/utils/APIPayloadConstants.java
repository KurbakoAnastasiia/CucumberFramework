package com.hrms.utils;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import net.minidev.json.JSONObject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class APIPayloadConstants {

   public static String createEmployeeBody() {
//        String createEmployeeBody = "{\n" +
//                "  \"emp_firstname\": \"Anastasiia\",\n" +
//                "  \"emp_lastname\": \"Hoteeva\",\n" +
//                "  \"emp_middle_name\": \"null\",\n" +
//                "  \"emp_gender\": \"F\",\n" +
//                "  \"emp_birthday\": \"1986-02-18\",\n" +
//                "  \"emp_status\": \"Employee\",\n" +
//                "  \"emp_job_title\": \"IT Analyst\"\n" +
//                "}";
//
//        return createEmployeeBody;

//        JSONObject obj = new JSONObject();
//        obj.put("emp_firstname", "Anastasiia");
//        obj.put("emp_lastname", "Hoteeva");
//        obj.put("emp_middle_name", "null");
//        obj.put("emp_gender", "F");
//        obj.put("emp_birthday", "1986-02-18");
//        obj.put("emp_status", "Employee");
//        obj.put("emp_job_title", "IT Analyst");
//
//        return obj.toString();


       File input = new File("/Users/agameganon/eclipse-workspace/CucumberFramework/src/test/resources/JsonData/createUser.json");
       JsonObject createUserData = null;
       try {
           //parsing the input file
           JsonElement fileElement = JsonParser.parseReader(new FileReader(input));
           createUserData = fileElement.getAsJsonObject();

       } catch (FileNotFoundException e) {
           e.printStackTrace();
       }
       return createUserData.toString();
    }



}
