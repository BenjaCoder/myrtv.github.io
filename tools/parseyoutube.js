//JS YT->RTV playlist converter
R=document.getElementsByClassName("pl-video"),T=document.getElementsByClassName("pl-header-title")[0].innerText,V={info:{name:T,service:"youtube"},playlist:[]};for(i=0;i<R.length;i++){a=R[i].getElementsByClassName("timestamp")[0].innerText.split(":");V.playlist.push({name:R[i].dataset.title,duration:+a.pop()+(a.pop()*60)+(a[0]?a.pop()*3600:0),qualities:[{src:R[i].dataset.videoId}]})};prompt(T,JSON.stringify(V));void(0)