$(function () {
  $searchToggle = $('.search_toggle');
  $searchForm = $('.main-header form');

  // 버튼의 기능 정지
  $searchForm.find('button').prop('disabled', true);

  $searchToggle.click(function () {
    $searchForm.toggleClass('active');
    if ($searchForm.hasClass('active')) {
      // 폼이 활성화되어있을때만 버튼의 전송기능이 되도록
      $searchForm.find('button').prop('disabled', false);
    } else {
      $searchForm.find('button').prop('disabled', true);
    }
  });
});
