$(document).ready(init);

function init() {
  $('#fetch').click(fetch);
}

function fetch() {
  $.ajax({
    url: 'https://api.twitch.tv/kraken/games/top',
    method: 'get',
    dataType: 'json',
    success: function(rsp){
      console.log('data:', rsp);
    }
  });
}
