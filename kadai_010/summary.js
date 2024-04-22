$(function(){
  //文字色変更
  $('#change-color').on('click', function(){
    $('#target').css("color","red");
  });

  //文字変更
  $('#change-text').on('click', function(){
    $('p').text('Hello!');
  });

  //フェードアウト
  $('#fade-out').on('click', function(){
    $('#target').fadeOut(1000, function(){

    });
  });
  //フェードイン
  $('#fade-in').on('click', function(){
    $('#target').fadeIn(1000, function(){

    });
  });

});