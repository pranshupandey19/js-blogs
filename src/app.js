class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title,detail){

    this.title = title;
    this.detail= detail;
  }
  addTitle(){
    var title_card = document.createElement('h1');
    title_card.setAttribute("id","blog-title");
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }
  addDescription(){
    var description = `  <p id="blog-description">${this.detail}</p`
    document.getElementById('card-text').innerHTML+=description
  }
}



// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`

var blog = new Blog("this is title","this is detail")
var isopen = false;
function helperAddPost(){
  let popup = document.getElementById("popupContact")
  if(isopen){
    popup.style.display = "none";
    isopen = false;
  }
  else{
    popup.style.display = "block";
    isopen = true;
  }
}

// 2. `helperPost()`

function helperPost(){
  var title=document.getElementById("title").value
  var description=document.getElementById("detail").value
  var blog = new Blog(title,description)
  blog.addTitle();
  blog.addDescription();
  title.value="";
  description.value="";
  helperAddPost();
}