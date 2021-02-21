Init();
/**
 *初期処理
 */
function Init() {
  console.log('Init');
  
  var url = "data/member.json";
  
  $.getJSON(url, (data) => {
  
    var $male_member_list = $('#male_member_list');
    var $female_member_list = $('#female_member_list');
    
    var list = data.member_list;
    for ( var i = 0; i<list.length; i++ ) {
      if(list[i].gender == '0'){
        $male_member_list.append(MemberImageCreate(list[i].name,list[i].image));
      }else{
        $female_member_list.append(MemberImageCreate(list[i].name,list[i].image));
      }
    }
  });
}

function MemberImageCreate(name,image){
  
  var member = "";
  
  if(image != ""){
    member = '<li><img src="images/' 
    + image
    + '" alt="'
    + name
    + '" class="img-thumbnail"><li>';
  }
  return member;
}

$(function(){
  $(".btn-gnavi").on("click", function(){
    // ハンバーガーメニューの位置を設定
    var rightVal = 0;
    if($(this).hasClass("open")) {
      // 位置を移動させメニューを開いた状態にする
      rightVal = -300;
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).removeClass("open");
    } else {
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).addClass("open");
    }
    $("#global-navi").stop().animate({
      right: rightVal
    }, 200);
  });
});

$(document).ready(function() {
  $( 'body' ).flurry({
    character: "❄",
    height: 800,
    speed: 15000,
    wind: 200,
    variance: 100,
    large: 25,
    small: 10,
    density: 100,
    transparency: 0.4
  });
});