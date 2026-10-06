$(document).ready(function() {

    const $overlay = $('#overlay');
    const $modal = $('#modalWindow');
    const $mainInputs = $('.main-input');

    $('#btnOpen').on('click', function() {
        $overlay.show();
        $modal.fadeIn(300);

        $mainInputs.prop('disabled', true);
    });

    $('#btnTransfer').on('click', function() {
        let val1 = $('#m1').val();
        let val2 = $('#m2').val();
        let val3 = $('#m3').val();
        let val4 = $('#m4').val();

        let stringConcatenat = val1 + " " + val2 + " " + val3 + " " + val4;

        $('#destinationField').val(stringConcatenat.trim());

        $modal.hide();
        $overlay.fadeOut(200);

        $mainInputs.prop('disabled', false);


        $('#modalWindow input').val('');
    });

});