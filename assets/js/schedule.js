var calendar = {};

var calIdCounter = 0;
// <script>
//  var dt = new Date();
//  document.getElementbyId('currentDay').innerHTML=dt;
//  </script>

// create celendar content
// var createTaskEl = function(calText) {
//        var calLi = $("<li>").addClass("calendar");

//       //  var calP = $("<p>")       
//       //  .text(calP)

// calLi.append("time");

// $("calendar" + calText).append(calLi);

// };

var tasks = [];


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

// create an id for each new Calendar Task --- start

var createTaskEl = function (taskDataObj) {
  var nineAmEl = document.createElement("li");
  nineAmEl.className = "nineAm";
  nineAmEl.setAttribute("data-task-id", calIdCounter);

  var tenAmEl = document.createElement("li");
  tenAmEl.className = "tenAm";
  tenAmEl.setAttribute("data-task-id", calIdCounter);

  calIdCounter++;
  console.log(taskDataObj);
  console.log(taskDataObj.status);
}



 // create an id for each new Calendar Task --- end



//      save tasks to local storage
var saveCalendarNine = function() {
  console.log(this);
        
              
      const calInfo = document.getElementById("timeNine").value;
            console.log(calInfo);
       localStorage.setItem("calendar", JSON.stringify(calInfo));
        console.log(saveCalendarNine);   
};
var saveCalendarTen = function() {
  console.log(this);
        
              
      const calInfo = document.getElementById("timeTen").value;
            console.log(calInfo);
       localStorage.setItem("calendar", JSON.stringify(calInfo));
        console.log(saveCalendarTen);   
};

// load saved tasks from local storage
var loadCalendar = function() {
      var calendar = localStorage.getItem("calendar");
      if (!calendar) {
        return false; 
      }
      console.log("Saved Calendar found!");
      // calendar = JSON.parse(calendar);
      // for (var i = 0; i < calendar.length; i++) {
      //   createTaskEl(calendar[i]);
      // }

};
loadCalendar();
document.querySelector(".saveBtn").addEventListener("click", saveCalendarNine);
document.querySelector(".saveBtn").addEventListener("click", saveCalendarTen);
