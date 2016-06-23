$(document).ready(init);

function init() {
  $('#new').click(newgame);
}

function newgame(){
  const name = $('#name').val();
  $.ajax({
    url: '/games',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: function(rsp){
      console.log('rsp:', rsp);
    }
  });
}
