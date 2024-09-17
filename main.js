document.getElementById("btn-post").addEventListener("click", function(){
    const comment = document.getElementById("textarea");
    const commentText = comment.value;
    const parent = document.getElementById("main");
    const p = document.createElement("p");
    p.innerText = commentText;
    parent.appendChild(p);
    comment.value = "";

})


