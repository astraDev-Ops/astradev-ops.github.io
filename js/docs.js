var dropdown = document.getElementsByClassName('dropdown');
var a_tag = document.getElementById('sidebar').getElementsByTagName('a');
var listed_ids = document.getElementById('content').getElementsByTagName('h2');
var dataList = document.getElementById('datalist');
var search = document.getElementById('search');

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

window.addEventListener('load', function() {
    for (i = 0; i < dropdown.length; i++) {
        var dropdownContent = dropdown[i].nextElementSibling;
              dropdownContent.style.display = 'none';
    }
    for (i = 0; i < listed_ids.length; i++) {
        var element = document.createElement('option');
        element.textContent = listed_ids[i].id;
        dataList.appendChild(element);
    }
})

search.addEventListener('search', function(e){
    var elemental = document.getElementById(e.target.value);
    if (elemental === null){
        return;
    }else{
        elemental.scrollIntoView();
    }
})


