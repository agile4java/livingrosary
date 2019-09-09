window.onload = function() {
	var ctxL = document.getElementById('lineChart').getContext('2d');
	window.myLine = new Chart(ctxL, config);
};

// SideNav Button Initialization
$('.button-collapse').sideNav({
	breakpoint: 1290
});
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
var ps = new PerfectScrollbar(sideNavScrollbar);
