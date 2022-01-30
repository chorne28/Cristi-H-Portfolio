$('.load_page').click(function (e) {
  $('#home_page').load($(this).attr('href'))
  e.preventDefault() //needed to prevent navigation!
})
