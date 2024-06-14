document.getElementById('closeNav').addEventListener("click", function(){
	console.log("hit");
	document.getElementById('sideNav').style.display = "none";
});
document.getElementById('openNav').addEventListener("click", function(){
		document.getElementById('sideNav').style.display = "block";
});

