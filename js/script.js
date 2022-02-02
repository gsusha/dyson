$(document).ready(function () {
  $('.header__burger').click(function () {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__list').click(function () {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function () {
  $('.order').click(function () {openModal()});
  $('.modal__close').click(function () {openModal()});
})

function openModal() {
  $('.modal').toggleClass('active');
  $('body').toggleClass('lock');
}