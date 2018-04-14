window.onload = function () {
    $("#banner-message").pselect();
    $("#show").click(function () {
        alert($("#banner-message").pselect("selected"));
    });
}

