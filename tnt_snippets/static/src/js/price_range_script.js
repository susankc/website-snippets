$(document).ready(function () {
"use strict";
	$("#slider-range").slider({
        range: true,
        min: 0,
        max: 2000,
        values: [0, 1000],
        slide: function(event, ui) {
            $("#range-price").text("Price: $" + ui.values[0] + " - $" + ui.values[1]);
        },
        create: function() {
            $("#range-price").text("" + ("#slider-range").slider("values", 0) +
                " -" + ("#slider-range").slider("values", 1));
        }

    });
    var _sliderTip = $('<div></div>');
    $("#slider-range-min").slider({
        range: "min",
        value: 37,
        min: 2000,
        max: 2020,
        slide: function(event, ui) {

            _sliderTip.text(ui.value);
        },
        create: function(event, ui) {
            _sliderTip.attr({
                id: 'slider-current-status'
            }).addClass('portfolio-slider-current-status');
            $('.ui-slider-handle', "#slider-range-min").append(_sliderTip);

            _sliderTip.text($("#slider-range-min").slider("values", 0));


        }
    });

});
