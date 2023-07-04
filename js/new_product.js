                      $.ajax({
                            method: "GET",
                            url: "https://dapi.kakao.com/v3/search/book?target=title",
                            data: { query:"에세이",size:12 },
                            headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
                          })
                            .done(function( msg ) {
                    
                                console.log( msg.documents[1].title );
                                console.log( msg.documents[1].thumbnail );
                      
                    
                    
                         
                                var a = $(".new_content > li ");
                             
                                for(var i=0; i< 30; i++){
                     
                       
                                      $(".new_content").eq(0).find("li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                                      $(".new_content").eq(0).find("li").eq(i).append("<p>"+msg.documents[i].title+"</p>");
                                      $(".new_content").eq(0).find("li").eq(i).append("<span>"+msg.documents[i].authors+"</span>");

                                     
                                    }
                  
                            });

                            $.ajax({
                              method: "GET",
                              url: "https://dapi.kakao.com/v3/search/book?target=title",
                              data: { query:"인류" ,size:12},
                              headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
                            })
                              .done(function( msg ) {
                      
                                  console.log( msg.documents[1].title );
                                  console.log( msg.documents[1].thumbnail );
                        
                      
                      
                           
                                  var a = $(".new_content > li ");
                               
                                  for(var i=0; i< 30; i++){
                                        $(".new_content").eq(1).find("li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                                        $(".new_content").eq(1).find("li").eq(i).append("<p>"+msg.documents[i].title+"</p>");
                                        $(".new_content").eq(1).find("li").eq(i).append("<span>"+msg.documents[i].authors+"</span>");
                                      }
                    
                              });

                              $.ajax({
                                method: "GET",
                                url: "https://dapi.kakao.com/v3/search/book?target=title",
                                data: { query:"사랑",size:12 },
                                headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
                              })
                                .done(function( msg ) {
                        
                                    console.log( msg.documents[1].title );
                                    console.log( msg.documents[1].thumbnail );
                          
                        
                        
                             
                                    var a = $(".new_content > li ");
                                 
                                    for(var i=0; i< 30; i++){
                                          $(".new_content").eq(2).find("li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                                          $(".new_content").eq(2).find("li").eq(i).append("<p>"+msg.documents[i].title+"</p>");
                                          $(".new_content").eq(2).find("li").eq(i).append("<span>"+msg.documents[i].authors+"</span>");
                                        }
                      
                                });

                                
                                $.ajax({
                                  method: "GET",
                                  url: "https://dapi.kakao.com/v3/search/book?target=title",
                                  data: { query:"다큐" ,size:12},
                                  headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
                                })
                                  .done(function( msg ) {
                          
                                      console.log( msg.documents[1].title );
                                      console.log( msg.documents[1].thumbnail );
                            
                          
                          
                               
                                      var a = $(".new_content > li ");
                                   
                                      for(var i=0; i< 30; i++){
                                            $(".new_content").eq(3).find("li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                                            $(".new_content").eq(3).find("li").eq(i).append("<p>"+msg.documents[i].title+"</p>");
                                            $(".new_content").eq(3).find("li").eq(i).append("<span>"+msg.documents[i].authors+"</span>");
                                          }
                        
                                  });

                                  
                                  $.ajax({
                                    method: "GET",
                                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                                    data: { query:"에세이",size:12},
                                    headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"},
                                   
                                  })
                                    .done(function( msg ) {
                            
                                        console.log( msg.documents[1].title );
                                        console.log( msg.documents[1].thumbnail );
                              
                            
                            
                                 
                                        var a = $(".new_content > li ");
                                     
                                        for(var i=0; i< 30; i++){
                                              $(".new_content").eq(4).find("li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                                              $(".new_content").eq(4).find("li").eq(i).append("<p>"+msg.documents[i].title+"</p>");
                                              $(".new_content").eq(4).find("li").eq(i).append("<span>"+msg.documents[i].authors+"</span>");
                                            }
                          
                                    });

                                    
                                    $.ajax({
                                      method: "GET",
                                      url: "https://dapi.kakao.com/v3/search/book?target=title",
                                      data: { query:"소설",size:12 },
                                      headers:{Authorization: "KakaoAK 412475ee8e088cf46de21ac34b651aa0"}
                                    })
                                      .done(function( msg ) {
                              
                                          console.log( msg.documents[1].title );
                                          console.log( msg.documents[1].thumbnail );
                                
                              
                              
                                   
                                          var a = $(".new_content > li ");
                                       
                                          for(var i=0; i< 30; i++){
                                                $(".new_content").eq(5).find("li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                                                $(".new_content").eq(5).find("li").eq(i).append("<p>"+msg.documents[i].title+"</p>");
                                                $(".new_content").eq(5).find("li").eq(i).append("<span>"+msg.documents[i].authors+"</span>");
                                              }
                            
                                      });
        


                            