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

//      save tasks to local storage
var saveCalendar = function() {
       localStorage.setItem("event", JSON.stringify(calendar))
}
// task text was clicked --- end




// load saved tasks
// var loadCalendar = function() {
//        calendar = JSON.parse(localStorage.getItem("calendar"));
// // if nothing in local sotrage, creat new object to track all calendar arrays
// of (!calendar) {
//        calendar = {

//        }
// }


// };

