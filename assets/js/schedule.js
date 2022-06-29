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



   


//      save tasks to local storage
var saveCalendar = function() {
  console.log(this);
        
              
      const calInfo = document.getElementById("time").value;
            console.log(calInfo);
       localStorage.setItem("calendar", JSON.stringify(calInfo));
        console.log(saveCalendar);   
};


// load saved tasks from local storage
var loadCalendar = function() {
      var calendar = JSON.parse(localStorage.getItem("calendar"));

};
loadCalendar();
document.querySelector(".saveBtn").addEventListener("click", saveCalendar);
