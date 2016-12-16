({
    doInit : function(component, event, helper) {
        helper.getTotalOppoCount(component, event, helper);
        helper.prepareFieldList(component, event, helper);
        helper.assignPageSizes(component, event, helper);
        helper.getOpportunityList(component, event, helper);
    },
    getNextPage : function(component, event, helper) {
        component.set("v.PageNum", parseInt(component.get("v.PageNum"))+1);
        helper.getOpportunityList(component, event, helper);
    },
    getPreviousPage : function(component, event, helper) {
        component.set("v.PageNum", parseInt(component.get("v.PageNum"))-1);
        helper.getOpportunityList(component, event, helper);
    },
    getFirstPage : function(component, event, helper) {
        component.set("v.PageNum", 1);
        helper.getOpportunityList(component, event, helper);
    },
    getLastPage : function(component, event, helper) {
        component.set("v.PageNum", parseInt(component.get("v.totalPageSize")));
        helper.getOpportunityList(component, event, helper);
    }, 
    gotoPage: function(component, event, helper) {
       var selectCmp = component.find("InputSelectDynamic").get("v.value");
       component.set("v.PageNum", parseInt(selectCmp));
       helper.getOpportunityList(component, event, helper);
    },
    updatePageSize: function(component, event, helper) {
      	var pageSizeSelected = component.find("pgSizeId").get("v.value");
        component.set("v.PageNum", 1);
        component.set("v.PageSize", parseInt(pageSizeSelected));
        helper.getTotalOppoCount(component, event, helper);
        helper.getOpportunityList(component, event, helper);
    },
    orderByField: function(component, event, helper) {
        var selectedOrderByFieldName = component.get("v.strOrderByFieldName");
        var selectedOrderByAscDesc = component.get("v.strOrderByAscOrDesc");
        event = event || window.event;
  		var source = event.target || event.srcElement;
  		console.log(source.text);
        if(selectedOrderByFieldName != source.text.trim()){
            component.set("v.strOrderByFieldName", source.text.trim());
            component.set("v.strOrderByAscOrDesc", "ASC");
        }
        else
            component.set("v.strOrderByAscOrDesc", (selectedOrderByAscDesc == 'ASC' ? 'DESC': 'ASC'));            

        helper.getOpportunityList(component, event, helper);
        
    },
	showSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : true });
        evt.fire();    
    },
    hideSpinner : function (component, event, helper) {
       var spinner = component.find('spinner');
       var evt = spinner.get("e.toggle");
       evt.setParams({ isVisible : false });
       evt.fire();    
    }
})