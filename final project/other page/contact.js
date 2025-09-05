 document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // جلب القيم من الحقول
    const name = document.querySelector('input[placeholder="Name and Surname *"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const subject = document.querySelector('input[placeholder="Subject *"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    const button = document.querySelector('#contactForm button[type="submit"]');

    // التحقق من الحقول
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("please fill the requred filed");
      return;
    }

    // لو كله تمام
    button.classList.remove("btn-dark");
    button.classList.add("btn-success");
    button.textContent = "done✅";

    // منع تكرار التغيير
    button.disabled = true;
  });
     document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          alert("Thank you for your message! We will get back to you soon.");
        });