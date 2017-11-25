var myApp = null;

document.addEventListener('deviceready', imReady, false);
function imReady() {
	init();
    document.addEventListener("backbutton", function(e){
        var page=myApp.getCurrentView().activePage; myApp.hidePreloader();
        if(page.name=="index"){ 
            e.preventDefault(); 
            if(confirm("Do you want to Exit!")) { 
                navigator.app.clearHistory(); 
                navigator.app.exitApp(); 
            } 
        } else { 
        	try { 
            	Dom7(".back").click();
            } catch(msg){}
        }
    }, false);
}

function init(){
	myApp = new Framework7({
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
