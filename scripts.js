const toggleTabs = (e) => {
  const targetActive = $(e.target).closest('.tab').hasClass('active');
  if (targetActive) {
    $('.active').find('.toggle').text('+');
    $('.active').removeClass('active');
  } else {
    $('.active').find('.toggle').text('+');
    $('.active').removeClass('active');
    $(e.target).closest('.tab').addClass('active');
    $(e.target).closest('.tab').find('.toggle').text('-');
  }
}

$('.tab-header').on('click', (e) => toggleTabs(e));

const toggleNav = (e) => {
  $('.nav-bar').toggleClass('add-margin-nav');
  $('.dropdown-menu').toggleClass('dropdown-active');
}

$('.menu-link').on('click', toggleNav);
