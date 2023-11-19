var arr = [
    {
        dp:"https://images.unsplash.com/photo-1699901853492-8bc942fc6a5c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1699712036063-9a90f8aa7c15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"},
    {
        dp:"https://images.unsplash.com/photo-1700235162827-fb30a9774dd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1699823242809-0386f4592503?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"},
    {
        dp:"https://images.unsplash.com/photo-1699877902199-49e09649e458?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1700212966732-4e0ebd08ad42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D"},
    {
        dp:"https://images.unsplash.com/photo-1682687219356-e820ca126c92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1683009426501-028aabdd7b8a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8fA%3D%3D"},
    
        {dp:"https://images.unsplash.com/photo-1522850084723-8d649459526a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1699904307740-79cf7c14ced0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D"}
    ]
    var clutter = ""
        arr.forEach(function(elem,idx){
        clutter+=` <div class="story">
        <img id = ${idx} src="${elem.dp}" alt="">
        </div>`
    })

    var storiyan = document.querySelector("#storiyan");
   
    storiyan.addEventListener("click",function(dets){
        document.querySelector("#full-screen").style.display = "block"
        document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

        setTimeout(function(){
            document.querySelector("#full-screen").style.display ="none";
    
        },2000)
    });
    
    

    storiyan.innerHTML=clutter;
