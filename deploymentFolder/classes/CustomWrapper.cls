public with sharing class CustomWrapper {
     @AuraEnabled
     public Integer someInteger {get; set;}
     @AuraEnabled
     public String someString {get; set;}
     @AuraEnabled
     public List<String> someList {get; set;}
}