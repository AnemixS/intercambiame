function changeView(nameView) {
    if($(".menu").is(":visible")){
        $(".principal-menu").hide()
    }
    switch (nameView) {
        case 'premiame.html':
            $("#wrapper-section").load("views/" + nameView)
            if($("#menu-general").is(":visible")){
            	$("#menu-general").trigger("click")
            }
            break;
        case 'prepago.html':
            $("#wrapper-section").load("views/" + nameView)
            if($("#menu-general").is(":visible")){
                $("#menu-general").trigger("click")
            }
            break;
    }
}

function showMenu(){
	if($(".principal-menu").is(":visible")){
		$(".principal-menu").hide()
	}
	else{
		$(".principal-menu").show()
	}
}