({
	doInit : function(component, event, helper) 
    {
		var record = component.get("v.record");
        var fieldAPI = component.get("v.fieldVal");
        var fieldVal = record[fieldAPI];
        component.set("v.fieldVal", fieldVal);
	}
})