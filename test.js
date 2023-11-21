function showMore(section){
// activate only the section that is clicked and hide when clicked again
if (document.getElementById(section).style.display == "none"){
  document.getElementById(section).style.display = "table-row";
} else {
  document.getElementById(section).style.display = "none";
}

// get all selection with class name selections and deactivate them which is not equal to section
var selections = document.getElementsByClassName("selections");
for (var i = 0; i < selections.length; i++) {
  if (selections[i].id != section){
    selections[i].style.display = "none";
  }
}
}
