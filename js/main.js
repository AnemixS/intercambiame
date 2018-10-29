function changeView(nameView) {
    switch (nameView) {
        case 'premiame.html':
            $("#wrapper-section").load("views/" + nameView)
            if($("#menu-general").is(":visible")){
            	$("#menu-general").trigger("click")
            }
            break;
    }
}