
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"사람" },
        headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
      })
        .done(function( msg ) {

            console.log( msg.documents[1].title );
            console.log( msg.documents[1].thumbnail );
  


            var a = $(".best_book1 > li ");
          
         
            for(var i=0; i< a.length; i++){
 
                  $(a).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                  $(a).eq(i).append("<h1>"+msg.documents[i].title+"</h1>");
                  $(a).eq(i).append("<h2>"+msg.documents[i].authors+"</h2>");
            }
        });


        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query:"우주" },
          headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
        })
          .done(function( msg ) {
  
              console.log( msg.documents[1].title );
              console.log( msg.documents[1].thumbnail );
    
  
  
       
              var b = $(".best_book2 > li ");
           
              for(var i=0; i< b.length; i++){
   
     
                    $(b).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                    $(b).eq(i).append("<h1>"+msg.documents[i].title+"</h1>");
                    $(b).eq(i).append("<h2>"+msg.documents[i].authors+"</h2>");
           }

          });

          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"판타지" },
            headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
          })
            .done(function( msg ) {
    
                console.log( msg.documents[1].title );
                console.log( msg.documents[1].thumbnail );
      
    
    
         
                var a1 = $(".best_book3 > li ");
             
                for(var i=0; i< a1.length; i++){
     
       
                      $(a1).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                      $(a1).eq(i).append("<h1>"+msg.documents[i].title+"</h1>");
                      $(a1).eq(i).append("<h2>"+msg.documents[i].authors+"</h2>");
             }
  
            });

            $.ajax({
              method: "GET",
              url: "https://dapi.kakao.com/v3/search/book?target=title",
              data: { query:"에세이" },
              headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
            })
              .done(function( msg ) {
      
                  console.log( msg.documents[1].title );
                  console.log( msg.documents[1].thumbnail );
        
      
      
           
                  var a2 = $(".best_book4 > li ");
               
                  for(var i=0; i< a2.length; i++){
       
         
                        $(a2).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                        $(a2).eq(i).append("<h1>"+msg.documents[i].title+"</h1>");
                        $(a2).eq(i).append("<h2>"+msg.documents[i].authors+"</h2>");
               }
    
              });

              $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query:"사랑" },
                headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
              })
                .done(function( msg ) {
        
                    console.log( msg.documents[1].title );
                    console.log( msg.documents[1].thumbnail );
          
        
        
             
                    var a3 = $(".best_book5 > li ");
                 
                    for(var i=0; i< a3.length; i++){
         
           
                          $(a3).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                          $(a3).eq(i).append("<h1>"+msg.documents[i].title+"</h1>");
                          $(a3).eq(i).append("<h2>"+msg.documents[i].authors+"</h2>");
                 }
      
                });

                $.ajax({
                  method: "GET",
                  url: "https://dapi.kakao.com/v3/search/book?target=title",
                  data: { query:"에세이" },
                  headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
                })
                  .done(function( msg ) {
          
                      console.log( msg.documents[1].title );
                      console.log( msg.documents[1].thumbnail );
            
          
          
               
                      var a4 = $(".best_book6 > li ");
                   
                      for(var i=0; i< a4.length; i++){
           
             
                            $(a4).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                            $(a4).eq(i).append("<h1>"+msg.documents[i].title+"</h1>");
                            $(a4).eq(i).append("<h2>"+msg.documents[i].authors+"</h2>");
                   }
        
                  });

                  $.ajax({
                    method: "GET",
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    data: { query:"시집" },
                    headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
                  })
                    .done(function( msg ) {
            
                        console.log( msg.documents[1].title );
                        console.log( msg.documents[1].thumbnail );
              
            
            
                 
                        var a5 = $(".best_book7 > li ");
                     
                        for(var i=0; i< a5.length; i++){
             
               
                              $(a5).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                              $(a5).eq(i).append("<h1>"+msg.documents[i].title+"</h1>");
                              $(a5).eq(i).append("<h2>"+msg.documents[i].authors+"</h2>");
                     }
          
                    });

                    $.ajax({
                      method: "GET",
                      url: "https://dapi.kakao.com/v3/search/book?target=title",
                      data: { query:"외국" },
                      headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
                    })
                      .done(function( msg ) {
              
                          console.log( msg.documents[1].title );
                          console.log( msg.documents[1].thumbnail );
                
              
              
                   
                          var a6 = $(".best_book8 > li ");
                       
                          for(var i=0; i< a6.length; i++){
               
                 
                                $(a6).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                                $(a6).eq(i).append("<h1>"+msg.documents[i].title+"</h1>");
                                $(a6).eq(i).append("<h2>"+msg.documents[i].authors+"</h2>");
                       }
            
                      });

                      $.ajax({
                        method: "GET",
                        url: "https://dapi.kakao.com/v3/search/book?target=title",
                        data: { query:"여행" },
                        headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
                      })
                        .done(function( msg ) {
                
                            console.log( msg.documents[1].title );
                            console.log( msg.documents[1].thumbnail );
                  
                
                
                     
                            var a7 = $(".best_book9 > li ");
                         
                            for(var i=0; i< a7.length; i++){
                 
                   
                                  $(a7).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                                  $(a7).eq(i).append("<h1>"+msg.documents[i].title+"</h1>");
                                  $(a7).eq(i).append("<h2>"+msg.documents[i].authors+"</h2>");
                         }
              
                        });

                        $.ajax({
                          method: "GET",
                          url: "https://dapi.kakao.com/v3/search/book?target=title",
                          data: { query:"다큐" },
                          headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
                        })
                          .done(function( msg ) {
                  
                              console.log( msg.documents[1].title );
                              console.log( msg.documents[1].thumbnail );
                    
                  
                  
                       
                              var b1 = $(".best_book10 > li ");
                           
                              for(var i=0; i< b1.length; i++){
                   
                     
                                    $(b1).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                                    $(b1).eq(i).append("<h1>"+msg.documents[i].title+"</h1>");
                                    $(b1).eq(i).append("<h2>"+msg.documents[i].authors+"</h2>");
                           }
                
                          });

                          $.ajax({
                            method: "GET",
                            url: "https://dapi.kakao.com/v3/search/book?target=title",
                            data: { query:"소설" },
                            headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
                          })
                            .done(function( msg ) {
                    
                                console.log( msg.documents[1].title );
                                console.log( msg.documents[1].thumbnail );
                      
                    
                    
                         
                                var b2 = $(".best_book11 > li ");
                             
                                for(var i=0; i< b2.length; i++){
                     
                       
                                      $(b2).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                                      $(b2).eq(i).append("<h1>"+msg.documents[i].title+"</h1>");
                                      $(b2).eq(i).append("<h2>"+msg.documents[i].authors+"</h2>");
                             }
                  
                            });

                           
  

