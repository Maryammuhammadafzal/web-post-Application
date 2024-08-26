
var postTitle = document.getElementById('post-title');
var postDiscription = document.getElementById('post-discription');


function addPosts() {
var postTitle = document.getElementById('post-title');
    var postDiscription = document.getElementById('post-discription');
    var posts = document.getElementById('posts');
    posts.innerHTML += `<div class="card  mt-3">
        <div class="card-header fontStyle">
    @Posts
</div>
<div class="card-body ">
    <h5 class="card-title fontStyle">${postTitle.value}</h5>
    <p class="card-text fontStyle">${postDiscription.value}</p>
</div>
<div class="p-3">
<button type="button" onclick="edit(event)" class="btn btn-secondary mt-4 fontStyle ">Edit</button>
<button type="button" onclick="remove(event)" class="btn btn-danger mt-4 fontStyle ">Delete</button>
</div>
</div>`

// var postClass = document.getElementsByClassName('posts');
// postClass.classList.toggle('border-green');

postTitle.value = "";
postDiscription.value = "";

}

function remove(event){
  event.target.parentNode.parentNode.remove();
}

async function edit(event){

    
    const { value: formValues } = await Swal.fire({
        title: "Update Post",
        html: `
         <label class="m-2 p-2">Update Title</label> <input id="swal-input1" class="swal1-input" placeholder="${postTitle.value}>
         <label class="m-2 p-2">Update Discription</label> <input id="swal-input2" class="swal1-input" placeholder="${postDiscription.value}>
        `,
        focusConfirm: false,
        preConfirm: () => {
            var editTitle = document.getElementById('swal-input1');
            var editDiscription = document.getElementById('swal-input2');
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value
          ];
        }
      });
  
      var editTitle = formValues.title;
      var editTitle = formValues.discription;
}