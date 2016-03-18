var $input = $('#list-input');
var $list = $('.toDoList');

$('form').on('submit', function (e) {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $li.val('');
  $list.append($li);

});
