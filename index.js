function loadData(){
    if ($("tbody > tr").length === 0) {
        
        var targetUrl = "https://aimtell.com/files/sites.json";
    
        $.getJSON(targetUrl)//AJAX

        .done(function( data ) {
            //console.log("Success");
            //console.log(data.sites);

            var theTemplateScript = $("#tableContent").html();  //handlebars.js
            var theTemplate = Handlebars.compile(theTemplateScript);
            var context = {
                tableBody: data.sites
            }  
            var theCompiledHtml = theTemplate(context);  
            $("tbody").append(theCompiledHtml);  
        })
    
        .fail(function(jqxhr, textStatus, error){
            var err = textStatus + ", " + error;
            alert( "Request from JSON link Failed: " + err );
        });

    }
}
