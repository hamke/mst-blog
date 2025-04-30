$(document).ready(function() {
  $(document).bind('contextmenu', function(e) {
    if (!$(e.target).parents().hasClass('allowContent')) {
      alert('Chuột phải đã bị vô hiệu hóa. Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi..');
      return false;
    } else {
      return true;
    }
  });
  $(document).bind('selectstart', function(e) {
    return $(e.target).parents().hasClass('allowContent');
  });
  $(document).bind('dragstart', function(e) {
    return $(e.target).parents().hasClass('allowContent');
  });
  $(document).bind('copy', function(e) {
    return $(e.target).parents().hasClass('allowContent');
  });
  $(document).bind('cut', function(e) {
    return $(e.target).parents().hasClass('allowContent');
  });
  $(document).bind('paste', function(e) {
    return $(e.target).parents().hasClass('allowContent');
  });
  $(function() {
    $('#allowContent').addClass('allowContent');
  });
});

function mouseon() {
  document.body.classList.add('allowContent');
};
