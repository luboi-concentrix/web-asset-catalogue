jQuery(document).ready(function( $ ) {
    if ($('body').hasClass('logged-in')) {
        $('#logout-link' ).html('Logout');
    }   else {
            $('#logout-link' ).html('Login');
        }
});