

function showAlert(alertClass, message) {
    var container = $('#alert-container');
    container.html( $('#alert-template').html() );
    container.find('.box').addClass(alertClass);
    container.find('.message').html(message);
}

function performCheck(str) {
    try {
        var obj = JSON5.parse(str);
        showAlert('alert-success', 'No error');
    }catch(e) {
        var message = e + ' at ' + e.at;
        editAreaLoader.setSelectionRange('json5input', e.at-2, e.at-1);
        showAlert('alert-error', message);
    }
}

$(document).ready(function() {
    editAreaLoader.init({
        id : "json5input",      // textarea id
        syntax: "js",           // syntax to be uses for highgliting
        start_highlight: true   // to display with highlight mode on start-up
    });

    var btn = $('#btn-lint').click(function(){
        $('#alert-container').html("");
        performCheck( editAreaLoader.getValue('json5input') );
    });
});


