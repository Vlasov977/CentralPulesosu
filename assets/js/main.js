$(document).ready(function () {
    setTimeout(function (e) {
        $(".preloader").css("display", "none");
    }, 1500);
    $('.step-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="steps-arrow arrow-prev"><img src="assets/img/arrow-prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="steps-arrow arrow-next"><img src="assets/img/arrow-next.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".scroll-down").click(function (e) {
        $('html, body').animate({
            scrollTop: $("#calculator").offset().top
        }, 1000);
    });

    $(".scroll-down-btn").click(function (e) {
        $('html, body').animate({
            scrollTop: $("#calculator").offset().top
        }, 1000);
    });

    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
        min: 30,
        max: 1000,
        create: function() {
            handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value );
            console.log(ui.value);
            $("#square").val(ui.value);
        }
    });

    //E-mail Ajax Send
    $("#calc-form").submit(function() {
        event.preventDefault();

        $("#calc-form-submit").prop("disabled", true);

        var th = $(this);

        var form = $('#calc-form')[0];
        var data = new FormData(form);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "mail.php",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            // data: th.serialize()

            success: function (data) {
                alert(data);
                $("#calc-form-submit").prop("disabled", false);
                th.trigger("reset");
            },
            error: function (e) {
                alert(data);
                $("#calc-form-submit").prop("disabled", false);
                th.trigger("reset");
            }
        });
        return false;
    });
    //E-mail Ajax Send

    $("#man-proj").submit(function(e) {
        event.preventDefault();

        let th = $(this);
        var form = $('#man-proj')[0];
        var data = new FormData(form);

        $("#man-proj-submit").prop("disabled", true);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "mail.php",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            // data: th.serialize()

            success: function (data) {
                alert(data);
                $("#man-proj-submit").prop("disabled", false);
                th.trigger("reset");
            },
            error: function (e) {
                alert(data);
                $("#man-proj-submit").prop("disabled", false);
                th.trigger("reset");
            }
        });
        return false;
    });

    $('.review-slider').slick({
        infinite: true,
        prevArrow: '<button type="button" class="steps-arrow arrow-prev"><img src="assets/img/arrow-prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="steps-arrow arrow-next"><img src="assets/img/arrow-next.png" alt=""></button>',
        slidesToShow: 2
    });
    $('#call-calc-file').click(function () {
        $("#calc-file").trigger("click");
    });
    $("#calc-file").change(function () {
        // var filesExt = ['jpg', 'gif', 'png']; // массив расширений
        // var parts = $(this).val().split('.');
        // if(filesExt.join().search(parts[parts.length - 1]) != -1){
        //     var filename = $("#calc-file").val();
        //     $('#call-calc-file + span .file-name')[0].innerText = filename.toString().slice(12, filename.toString().length);
        // } else {
        //     $("#calc-file").val("");
        // }
        // setInterval(function (e) {
        //     $("body").trigger("click");
        // }, 100);
        var filename = $("#calc-file").val();
        $('#call-calc-file + span .file-name')[0].innerText = filename.toString().slice(12, filename.toString().length);
    });
    $("#reset-file").click(function () {
        $("#calc-file").val("");
        $('#call-calc-file + span .file-name')[0].innerText = "file not choosed";
    });

    $('#call-manage-file').click(function () {
        $("#manage-file").trigger("click");
    });
    $("#manage-file").change(function () {
        // var filesExt = ['jpg', 'gif', 'png']; // массив расширений
        // var parts = $(this).val().split('.');
        // if(filesExt.join().search(parts[parts.length - 1]) != -1){
        //     var filename = $("#manage-file").val();
        //     Array.from(filename).splice(0, 12);
        //     $('#call-manage-file + span .file-name')[0].innerText = filename.toString().slice(12, filename.toString().length);
        // } else {
        //     $("#manage-file").val("");
        // }
        var filename = $("#manage-file").val();
        $('#call-manage-file + span .file-name')[0].innerText = filename.toString().slice(12, filename.toString().length);
    });

    $( "#slider" ).draggable();

    $(".top nav .navbar-toggl").click(function (e) {
        $(".top nav ul").toggleClass("show");
        $(".top nav .navbar-toggl").toggleClass("show");
    });

    $(".shade").click(function (e) {
        $(".top nav ul").toggleClass("show");
        $(".top nav .navbar-toggl").toggleClass("show");
    });

    $('.navbar-nav a').on('click', function() {
        if ($('.navbar-toggl').css('display') != 'none') {
            $(".navbar-toggl").trigger("click");
        }
    });
    $("#phone-calc").inputmask("+38(099) 999-9999");
    $("#phone-modal").inputmask("+38(099) 999-9999");
    $("#phone-modalk").inputmask("+38(099) 999-9999");
    $("#phone-more").inputmask("+38(099) 999-9999");

    $(".top nav a").click(function (e) {
        $('html, body').animate({
            scrollTop: $($(e.target).attr("href")).offset().top
        }, 1000);
    });
    var y = $(this).scrollTop();
    if (y > 800) {
        $('.scrollTop').fadeIn();
    } else {
        $('.scrollTop').fadeOut();
    }
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 800) {
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }
    });
    $(".scrollTop").on("click", function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

   

});