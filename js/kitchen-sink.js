var myApp = null;

document.addEventListener('deviceready', imReady, false);
function imReady() {
	init();
    document.addEventListener("backbutton", function(e){
        alert("hello");
        var page=myApp.getCurrentView().activePage; myApp.hidePreloader();
        if(page.name=="home"){ 
            e.preventDefault(); 
            if(confirm("Do you want to Exit!")) { 
                navigator.app.clearHistory(); navigator.app.exitApp(); 
            } 
        } else { 
            navigator.app.backHistory();
        }
    }, false);
}

function init(){
	var myApp = new Framework7({
	    modalTitle: 'Framework7',
	    material: true,
	});

	var $$ = Dom7;

	var mainView = myApp.addView('.view-main', {
	});
	// var rightView = myApp.addView('.view-right', {
	//     name: 'right'
	// });	
}
