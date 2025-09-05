 const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      );
      const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
      );


   $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
          items: 5,
          nav: true,
          navText: [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>',
          ],
        });
      });



const mainImage = document.getElementById("mainImage");
  // كل الصور الصغيرة
  const optionImages = document.querySelectorAll(".option-img");

  optionImages.forEach(img => {
    img.addEventListener("click", function () {
      // غير مصدر الصورة الكبيرة
      mainImage.src = this.src;

      // شيل الـ border من كل الصور
      optionImages.forEach(i => i.classList.remove("active-thumb"));
      // حط border على الصورة المختارة
      this.classList.add("active-thumb");
    });
  });