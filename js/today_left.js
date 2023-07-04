
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"소설" },
  headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
})
  .done(function( msg ) {

      console.log( msg.documents[1].title );
      console.log( msg.documents[1].thumbnail );


      var a = $(".left_imgbox");
      var t = $(".left_textbox");
      
      for(var i=0; i< a.length; i++){

            $(a).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
            $(t).eq(i).append("<h2>"+msg.documents[i].title+"</h2>");
            $(t).eq(i).append("<h3>"+msg.documents[i].publisher+"</h3>");
            $(t).eq(i).append("<span>"+msg.documents[i].price+"원</span>");
            $(t).eq(i).append("<p>"+msg.documents[i].authors+"</p>");
            $(t).eq(i).append("<p>"+msg.documents[i].contents+"</p>");
            
            
      }

  });
