const toggleTabs = (e) => {
 const targetActive = $(e.target).closest('.tab').hasClass('active');

  if (targetActive) {
    $('.active').find('.toggle').text('+');
    $('.active').removeClass('active');
  } else {
    $('.active').find('.toggle').text('+');
    $('.active').removeClass('active');
    $(e.target).closest('.tab').addClass('active');

    $(window).width() < 680 ?
      $(e.target).closest('.tab').find('.toggle').text('-')
      :
      null
  }
}

$('.tab-header').on('click', (e) => toggleTabs(e));
