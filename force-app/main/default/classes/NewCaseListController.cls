Public class NewCaseListController {
    List<Case> results = new List<Case>();
    
    
    private String sortOrder = 'CaseNumber';
    public List<Case> getCase() {
        
        results = [SELECT Id, CaseNumber FROM Case WHERE Status = 'New'];
    
        return results;
        }
    }
