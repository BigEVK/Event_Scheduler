var calendar = {};
// <script>
//  var dt = new Date();
//  document.getElementbyId('currentDay').innerHTML=dt;
//  </script>

// create celendar content
// var createTask = function(calText) {
//        var calLi = $("<li>").addClass("calendar");

//        var calP = $("<p>")       
//        .text(calP)

// calLi.append(calSpan);

// $("#calendar" + calText).append(calLi);

// };


// task text was clicked --- start
$(".calendar").on("click", "p", function() {
       // get current text of p element
       var text = $(this)
         .text()
         .trim();
     
       // replace p element with a new textarea
       var textInput = $("<textarea>").addClass("form-control").val(text);
       $(this).replaceWith(textInput);
     
       // auto focus new element
       textInput.trigger("focus");     

     });

      // task text was clicked --- end

// Add Save Button Click

// var element = document.getElementById("saveBtn");    
//      element.addEventListener("click", saveCalendar);

   


//      save tasks to local storage
var saveCalendar = function() {
    var element = document.getElementById("saveBtn");    
       element.addEventListener("click", saveCalendar);
       document.getElelementById("time").innerHTML
       localStorage.setItem("calendar", JSON.stringify("calendar"));
       
};


// load saved tasks from local storage
var loadCalendar = function() {
       calendar = JSON.parse(localStorage.getItem("calendar"));

};
