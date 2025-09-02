var img = document.getElementById("mainImage");
var btn = document.getElementById("toggleBtn");

var originalSrc = "New folder/167.jpg";
var newSrc = "New folder/167-2.jpg";

var toggled = false;

btn.addEventListener("click", function () {
  if (toggled) {
    img.src = originalSrc;
    btn.textContent = "Change Image";
  } else {
    img.src = newSrc;
    btn.textContent = "Back to Original";
  }
  toggled = !toggled;
});

var users = [];

  var form = document.getElementById("userForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

   
    var name = e.target.elements.name.value;
    var email = e.target.elements.email.value;

    var user = {
      name: name,
      email: email,
    };

    users.push(user);

    console.log(users);

  
   
  });