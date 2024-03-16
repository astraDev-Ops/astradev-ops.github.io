let linkString = "https://astradev.xyz/docs/api#";
var copy = document.getElementsByClassName("copy");

for (i = 0; i < copy.length; i++) {
  copy[i].addEventListener("click", function() {
    var copyLink =  this.parentElement.id;
    var fullLink = linkString + copyLink;
    navigator.clipboard.writeText(fullLink);
  });
}