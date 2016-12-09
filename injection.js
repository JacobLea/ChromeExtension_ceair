// Show text as a notification.
function notifyText(conent){
	if(window.Notification && Notification.permission === "granted") {
		var note = new Notification("FromCeair", {body: conent});
		return;
	}
	if(window.Notification && (Notification.permission === "denied" || Notification.permission === "default")) {
		// required permission of notification.
		Notification.requestPermission(function(status) {
			if (Notification.permission !== status) {
				Notification.status = status;
			};
			if(status === "granted") {
				var note = new Notification("FromCeair", {icon:"ironHand_16.png", body: conent});
				return
			}
		});
	}
}
// Click search button
function clickSerBtn() {
	$('#btn_flight_search').click();
}
// Show price
function showPrice(price) {
	console.log(price);
	if (price<=700) {
		notifyText(price);
	}
}
// Find ecnomic price;
function findEcPrice() {
	//var ecPrice = $("flight-info").find("[name='economy'] font")[0].innerText;
	var cellEP = document.getElementsByClassName("f-p");
	if(!cellEP.length) {
		setTimeout("findEcPrice()", 1000);
		return;
	}
	var ecPrice = Number(cellEP[1].textContent.slice(1, 4));
	showPrice(ecPrice);
	setTimeout(clickSerBtn, 4000);
}
// Main function.
$(function() {
	var waitMS = Number(new Date().getUTCMilliseconds()) * 10 + 10000;
	setTimeout(findEcPrice, waitMS);	
});