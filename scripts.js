
const toggleTabs = (e) => {
  const currentlyActive = $('li.tab').hasClass('active');

  const targetActive = $(e.target).closest('.tab').hasClass('active');

  if (targetActive) {
    $('.active').find('.toggle').text('+');
    $('.active').removeClass('active');
    return
  }

  if (currentlyActive) {
    $('.active').find('.toggle').text('+');
    $('.active').removeClass('active');
  }

  $(e.target).closest('.tab').addClass('active');

  if ($( window ).width() < 680) {
    $(e.target).text('-');
  }
}


$('.tab-header').on('click', (e) => toggleTabs(e));
