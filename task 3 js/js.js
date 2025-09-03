 var users = [];
    var form = document.getElementById("userForm");
    var userList = document.getElementById("userList");

    form.addEventListener("submit", (e) => {
      e.preventDefault(); 

      var name = e.target.elements.name.value;
      var email = e.target.elements.email.value;

      var user = {
        name: name,
        email: email,
      };

      users.push(user);

      
      var li = document.createElement("li");
      li.textContent = `Name: ${user.name}, Email: ${user.email}`;
      userList.appendChild(li);

      console.log(users);


    });