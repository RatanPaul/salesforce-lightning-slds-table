# salesforce-lightning-slds-table
Simple Generic Lightning Component

![alt tag](http://picpaste.com/pics/lightning_table-d24rSlQw.1481880700.PNG)


How to Use:
```
<c:RN_customDataTable sObjectName="Account" sObjectFields="Name,AccountNumber,CreatedDate,NumberOfEmployees,Industry"
                               pageSizes="['10', '15', '20', '25', '50', '100']"
                               strOrderByFieldName="Name"
                               strOrderByAscOrDesc="ASC"/>
```


sObjectName = will be sobject Name 
sObjectFields = provide field names comma separated 


pageSizes 


