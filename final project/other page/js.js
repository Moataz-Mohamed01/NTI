
  document.getElementById("homeLink").addEventListener("click", function(e) {
    e.preventDefault(); // يمنع فتح الرابط
    document.getElementById("home-decore").checked = 
      !document.getElementById("home-decore").checked; // يغير حالة الـ checkbox
  });
  
   // تغيير الصورة الرئيسية
        function changeMainImage(thumbnail) {
            // إزالة active من جميع الصور الصغيرة
            document.querySelectorAll('.thumbnail-img').forEach(img => {
                img.classList.remove('active');
            });
            
            // إضافة active للصورة المحددة
            thumbnail.classList.add('active');
            
            // تغيير الصورة الكبيرة
            document.getElementById('mainImage').src = thumbnail.dataset.large;
        }

        // زيادة الكمية
        function increaseQuantity() {
            const quantityInput = document.getElementById('quantity');
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        }

        // تقليل الكمية
        function decreaseQuantity() {
            const quantityInput = document.getElementById('quantity');
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        }

        // تأثير الزوم
        function zoomImage(event) {
            const container = event.currentTarget;
            const image = container.querySelector('.main-image');
            const rect = container.getBoundingClientRect();
            
            // حساب موقع الماوس
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            // تحويل الموقع إلى نسبة مئوية
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            // تطبيق الزوم والحركة
            image.style.transform = 'scale(2.5)';
            image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        }

        // إعادة تعيين الزوم
        function resetZoom() {
            const image = document.getElementById('mainImage');
            image.style.transform = 'scale(1)';
            image.style.transformOrigin = 'center center';
        }