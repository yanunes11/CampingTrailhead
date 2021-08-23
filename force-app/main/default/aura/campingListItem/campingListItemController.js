({
    packItem : function(component, event, helper) {
        let packed = component.get("v.item.Packed__c");
        component.set("v.item.Packed__c", true);
        let packed2 = component.get("v.item.Packed__c");
        let btn = event.getSource();
        btn.set("v.disabled", true);
    },
    clickCreate: function(component, event, helper) {
        let validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validItem){
            // Create the new expense
            let newItem = component.get("v.item");
            console.log("Create item: " + JSON.stringify(newItem));
            helper.createItem(component, newItem);
        }
    }
})