document.getElementById("btn-post").addEventListener("click", function(){
    // Catch the comment box
    const comment = document.getElementById("textarea");

    // Get the comment text from the comment box
    const commentText = comment.value;

    // Catch the parent where the comment will be displayed
    const parent = document.getElementById("main");

    // Create an element for the comment which will be added in the parent
    const p = document.createElement("p");

    // Keep the comment text into the element
    p.innerText = commentText;

    //  Add the element (with text) in the parent
    parent.appendChild(p);
    
    // Finally clear the comment box for the next comment
    comment.value = "";

})


