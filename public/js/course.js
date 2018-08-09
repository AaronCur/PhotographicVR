function submit() {

  var courseName = document.getElementById("user_email_field").value;
  var code = document.getElementById("course_code_field").value;
  var num = document.getElementById("num_pictures_field").value;

  if (courseName === "") {
    window.alert("Error: You must select a name for your scene")
    localStorage.setItem('proceed', JSON.stringify(false));
  }

  if (isNaN(code) || code === "" || code.length != 4) {
    window.alert("Error: You must select a code (4 digits) to find your scene in the app")
    localStorage.setItem('proceed', JSON.stringify(false));
  }

  if (isNaN(num) || num === "" || num === "0") {
    window.alert("Error: You must select an amount of photos to be in your scene")
    localStorage.setItem('proceed', JSON.stringify(false));
  }

  if (JSON.parse(localStorage.getItem('proceed')) != false) {
    //    var numOfHoles = document.getElementById("holes").value;


    init(courseName);
    document.location.href = "upload.html";
  }

  localStorage.setItem('proceed', JSON.stringify(true));

}

function check(courses) {

  localStorage.setItem('proceed', JSON.stringify(true));

  for (var i = 0; i < courses.length; i++) {
    if (courses[i] === document.getElementById("user_email_field").value) {
      window.alert("Error: Folder already registered");
      localStorage.setItem('proceed', JSON.stringify(false));
    }
  }
}