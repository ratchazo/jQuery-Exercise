// mouse enter surprise
$(document).ready(function () {
    $("#surprise").mouseenter(function () {
        alert("Surprise!");
    });
});
// single click button
    $(document).ready(function () {
        $("#single").click(function () {
            $(this).hide();
        });
    });
// double click button
    $(document).ready(function () {
        $("#dbl").dblclick(function () {
            $(this).hide();
        });
    });
