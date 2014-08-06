

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
        showAlert('alert-error', message);
    }
}

$(document).ready(function() {
    var btn = $('#btn-lint').click(function(){
        $('#alert-container').html("");
        performCheck(   $('#json5input').val() );
    });
});


