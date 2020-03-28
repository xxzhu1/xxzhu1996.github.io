$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    
     $("button#get_data2").click(function() {
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/app4f5MestpX8G4ap/category_detail?api_key=keyg8xnhMApLysSt4";
      var dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 items = [];
                     items.push(value.fields.category);
                     items.push(value.fields.amount);
                     dataSet.push(items);
                     console.log(items);
              });
              console.log(dataSet);

           var chart = c3.generate({
                data: {
                    columns: dataSet,
                    type : 'bar'
                },
                axis: {
                  x: {label: 'category'},
                  y: {label: '# of movies'}
                },
                bar: {
                    title: "# of Movies by Movie Category:",
                }
            });

      });

   });

});