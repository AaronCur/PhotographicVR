function hide() {
  document.getElementById("section_div").style.display = "none";
  document.getElementById("upload_div").style.display = "none";

}

function revealProgressDiv() {
  document.getElementById("upload_bar_div").style.display = "block";
}

function hideProgressDiv() {
  document.getElementById('fileButton').value = "";
  document.getElementById("upload_bar_div").style.display = "none";
}

function getEmail() {
  return JSON.parse(localStorage.getItem('user'));
}

function getEmailDataBase() {
  return JSON.parse(localStorage.getItem('userDataBase'));
}


function revealArea() {
  document.getElementById("section_div").style.display = "block";
}

function revealUpload() {
  document.getElementById("upload_div").style.display = "block";
}

function init(course, code) {
  localStorage.setItem('course', JSON.stringify(course));
  localStorage.setItem('code', JSON.stringify(code));
}

function getCourse() {
  return JSON.parse(localStorage.getItem('course'));
}

function getCode() {
  return JSON.parse(localStorage.getItem('code'));
}

function setHeader() {


  var course = localStorage.getItem('course');
  document.getElementById("course_head").innerHTML = "Upload to " + JSON.parse(course);
}