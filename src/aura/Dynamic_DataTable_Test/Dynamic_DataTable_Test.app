<aura:application >
    <!--c:Dynamic_DataTable query="SELECT Name, AccountNumber, Type FROM Account"/-->
    <!--c:removeCSS /-->
    <!--matlib:lightningStandardCoponent /-->
    <c:RN_customDataTable sObjectName="Account" sObjectFields="Name,AccountNumber,CreatedDate,NumberOfEmployees,Industry"
                               pageSizes="['10', '15', '20', '25', '50']"
                               strOrderByFieldName="CreatedDate"
                               strOrderByAscOrDesc="ASC"/>
</aura:application>