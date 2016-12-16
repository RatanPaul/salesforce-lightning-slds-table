global class Paginationcontroller 
{
    @AuraEnabled
    global static Integer totalOppRecord(String strSobjectName, String strFields)
    {
        String strQuery = 'Select '+String.join(strFields.split(','), ',' )+' From '+strSobjectName;
        return Database.Query(strQuery).size();
    }
    
 
    @AuraEnabled
    global static List<Opportunity> getOpportunities(Integer intPageSize, Integer intPageNum, String strOrderByFieldName, 
                                                        String strOrderByAscDesc, String strSobjectName, String strFields)
    {
        Integer intStartIndex = (intPageNum  - 1) * intPageSize;
        String strQuery = 'Select '+String.join(strFields.split(','), ',' )+' From '+strSobjectName;
        if(String.isNotBlank(strOrderByFieldName))
        {
            strQuery += ' ORDER BY '+strOrderByFieldName +' '+ strOrderByAscDesc +' ';
        }
        strQuery += ' limit '+intPageSize+' OFFSET '+intStartIndex;
        return Database.Query(strQuery);
    }
}