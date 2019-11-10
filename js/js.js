
$(".sandwich").click(function () {
    $(this).toggleClass('active').siblings(".open_menu").slideToggle();
});