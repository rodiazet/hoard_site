$(document).ready( function () {
    var $form = $('form');
    $( "#successSubscribe" ).hide();
    $( "#errorSubscribe" ).hide();

    if ( $form.length > 0 ) {
        $('#btnSubmit').bind('click', function ( event ) {
            if ( event ) event.preventDefault();
            $( "#successSubscribe" ).hide();
            $( "#errorSubscribe" ).hide();

            register($form);
            //if ( validate_input($form) ) { register($form); }
        });
    }
});

function register($form) {
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { 
            console.log("Could not connect to the registration server. Please try again later.");
            console.log(err);
         },
        success     : function(data) {
            console.log(data.msg);
            if (data.result != "success") {
                $( "#errorSubscribe" ).html(data.msg);
                $( "#errorSubscribe" ).slideDown( data.msg ); 
               
            } else {
                $( "#successSubscribe" ).html(data.msg);
                $( "#successSubscribe" ).slideDown( data.msg );
            }
        }
    });
}