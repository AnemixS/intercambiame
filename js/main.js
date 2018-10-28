function changeView(nameView) {
    switch (nameView) {
        case 'premiame.html':
            $("#wrapper-section").load("views/" + nameView)
            break;
    }
}