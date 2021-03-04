package com.hrms.utils;

import java.sql.*;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class DBUtils {

    private static Connection connection;
    private static Statement statement;
    private static ResultSet resultSet;

    public static Connection getConnection() {
        try {
            connection = DriverManager.getConnection(ConfigsReader.getPropertyValue("dbURL"),
                    ConfigsReader.getPropertyValue("dbUsername"),
                    ConfigsReader.getPropertyValue("dbPassword"));
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return connection;
    }

    public static ResultSet getResultSet(String query) {
       try{
        statement = getConnection().createStatement();
        resultSet = statement.executeQuery(query);
    } catch (SQLException e) {
       e.printStackTrace();
       }
       return resultSet;
    }

    public static List<Map<String, String>> getDBDataIntoListOfMaps(String query) {

        List<Map<String, String>> dbListOfMaps = new ArrayList<>();
        Map<String, String> map;
        try {
            ResultSetMetaData resultSetMetaData = getResultSet(query).getMetaData();
            while (resultSet.next()) { // loops through all rows
                map = new LinkedHashMap<>();
                for(int i = 1; i <= resultSetMetaData.getColumnCount(); i++) { // loop through each column of the row
                    map.put(resultSetMetaData.getColumnName(i), resultSet.getString(i));
                }
                dbListOfMaps.add(map);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return dbListOfMaps;

    }


    public static List<String> getDBDataIntoList(String query) {
        getResultSet(query);
        List<String> dbList = new ArrayList<>();;
        try {
            ResultSetMetaData resultSetMetaData = getResultSet(query).getMetaData();
            while (resultSet.next()) {
                dbList.add(resultSet.getString(1));
                }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeConnection();
        }
        return dbList;

    }
    public static void closeConnection () {
        try {
            if (resultSet != null) {
                resultSet.close();
            }
            if(statement != null) {
                statement.close();
            }
            if(connection != null) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
