$(document).ready( function() {
  $(".cards__list").slick({
      speed: 500,
      centerMode: true,
      arrows: true,
      centerPadding: '0',
      slidesToShow: 1,
      dots: false,
      variableWidth: true,
      infinite: false,
      focusOnSelect: true,
      initialSlide: 1,
  });

  // Tab-switcher
    $(function() {
     
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
     
    });

    $(function() {
      $('.calc__ranges-slider-1').val(15).change()
      $('.calc__ranges-slider-2').val(50).change()
      $('.calc__ranges-slider-3').val(73).change()
    })
  
} );

window.addEventListener('DOMContentLoaded', function() {

  let selectTab = document.querySelectorAll('.tabs__caption li')
  
    new Chartist.Line('#chart1', {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          series: [
        [1, 5, 2, 5, 4, 3],
        [2, 3, 4, 7, 1, 2]
      ]},
        {
          low: 0,
          showArea: true,
          showPoint: false,
          fullWidth: true,
          width: '35rem',
          height: '13rem'
        }
    );

  selectTab[1].addEventListener('click', function() {
    new Chartist.Line('#chart2', {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            series: [
          [2, 3, 5, 6, 4, 2],
          [2, 5, 7, 4, 1, 1]
        ]},
          {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true,
            width: '35rem',
            height: '15rem'
          }
      );
    });

  selectTab[2].addEventListener('click', function() {  
    new Chartist.Line('#chart3', {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            series: [
          [1, 4, 3, 5, 4, 7],
          [2, 6, 1, 7, 4, 1]
        ]},
          {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true,
            width: '35rem',
            height: '15rem'
          }
    );
  });
  
})