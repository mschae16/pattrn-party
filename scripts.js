

const toggleTabs = (e) => {
  const currentlyActive = $('li.tab').hasClass('active');
  console.log(currentlyActive)
  if (currentlyActive) {
    $('.active').removeClass('active')
  }

  console.log($(e.target).closest('.tab'));

  $(e.target).closest('.tab').addClass('active');
}


$('button').on('click', (e) => toggleTabs(e));
