# salesforce-lightning-slds-table
Simple Generic Lightning Component

![alt tag](http://www.imageno.com/image.php?id=x896nwtczrax&kk=39968257http://www.imageno.com/thumbs/20161216/x896nwtczrax.jpghttp://www.imageno.com/thumbs/20161216/x896nwtczrax.jpghttp://www.imageno.com/thumbs/20161216/x896nwtczrax.jpg


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


