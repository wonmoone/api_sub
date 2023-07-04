
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"에세이" },
  headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
})
  .done(function( msg ) {

      console.log( msg.documents[1].title );
      console.log( msg.documents[1].thumbnail );



      var a = $("#swiper_contents > li ");
      
      for(var i=0; i< a.length; i++){

            $(a).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");  
            $(a).eq(i).append("<span>"+msg.documents[i].title+"</span>");
  

      }

  });
