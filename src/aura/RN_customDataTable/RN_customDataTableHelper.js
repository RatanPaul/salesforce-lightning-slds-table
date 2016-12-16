({
    getTotalOppoCount: function(component, event, helper) {
        var action = component.get("c.totalOppRecord");
        action.setParams({
            "strSobjectName": component.get("v.sObjectName"),
            "strFields": component.get("v.sObjectFields")
        });
        
        action.setCallback(this, function(actionResult) {
            var totalRecordSize = actionResult.getReturnValue();
            var pageSize = component.get("v.PageSize");
            component.set("v.totalRecordSize", totalRecordSize);
            var totalPages = (totalRecordSize % pageSize == 0) ? 
                                parseInt(totalRecordSize / pageSize) : 
                                parseInt(totalRecordSize / pageSize) + 1;
            component.set("v.totalPageSize", totalPages);
        });
        $A.enqueueAction(action);
    },
    assignPageNoSelect: function(component, event, helper) {
        var opts = [];
        var totalPages = component.get("v.totalPageSize");
        //create select list options and assigned to InputSelectDynamic selectlist component
        for(var i = 1; i <= totalPages; i++)
        {
            if(i == component.get("v.PageNum"))
                opts.push({class: "optionClass", label: i, value: i, selected: "true"});
            else
                opts.push({class: "optionClass", label: i, value: i});
        }
        component.find("InputSelectDynamic").set("v.options", opts);
    },
    getOpportunityList: function(component, event, helper) {
        var action = component.get("c.getOpportunities");
        action.setParams({
            "intPageSize": component.get("v.PageSize").toString(),
            "intPageNum": component.get("v.PageNum").toString(),
            "strOrderByFieldName": component.get("v.strOrderByFieldName"),
            "strOrderByAscDesc": component.get("v.strOrderByAscOrDesc"),
            "strSobjectName": component.get("v.sObjectName"),
            "strFields": component.get("v.sObjectFields")
        });
        action.setCallback(this, function(actionResult) {
            component.set("v.lstOpp", actionResult.getReturnValue());
            helper.assignPageNoSelect(component, event, helper);
        });
        $A.enqueueAction(action);
    },
    prepareFieldList: function(component, event, helper) {
        var fieldsAPINames = component.get("v.sObjectFields");
        var fields = fieldsAPINames.split(',');
        component.set("v.lstFieldsApiNames", fields);
    },
    assignPageSizes: function(component, event, helper) {
        var pgSizeOptions = [];
        var pageSizes = component.get("v.pageSizes");
        for(var i = 0; i < pageSizes.length; i++)
        	pgSizeOptions.push({class: "optionClass", label: pageSizes[i], value: pageSizes[i]});
        component.find("pgSizeId").set("v.options", pgSizeOptions);
    }
})