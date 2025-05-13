$(document).ready(function() {
  $(document).bind('contextmenu', function(e) {
    if (!$(e.target).parents().hasClass('allowContent')) {
      alert('右クリックは無効になっています。ご利用いただきありがとうございます。.');
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
