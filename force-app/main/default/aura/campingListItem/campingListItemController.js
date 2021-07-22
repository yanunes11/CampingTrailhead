({
    packItem : function(component, event, helper) {
        let packed = component.get("v.item.Packed__c");
        component.set("v.item.Packed__c", true);
        let packed2 = component.get("v.item.Packed__c");
        let btn = event.getSource();
        btn.set("v.disabled", true);
    },
})
