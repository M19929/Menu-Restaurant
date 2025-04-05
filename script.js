document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('تم إرسال رسالتك بنجاح!');
    // يمكنك إضافة المزيد من الوظائف هنا مثل إرسال البيانات إلى الخادم
});
const data = {
    name: "Ahmed",
    email: "ahmed@example.com",
    message: "Hello, Server!"
};

fetch("https://example.com/api/submit", {
    method: "POST", // نوع الطلب
    headers: {
        "Content-Type": "application/json" // تحديد نوع البيانات
    },
    body: JSON.stringify(data) // تحويل البيانات لـ JSON
})
.then(response => response.json()) // تحويل الرد إلى JSON
.then(result => console.log("Success:", result)) // عرض النتيجة في الكونسول
.catch(error => console.error("Error:", error)); // التعامل مع الأخطاء
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://example.com/api/submit", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log("Success:", xhr.responseText);
        } else {
            console.error("Error:", xhr.statusText);
        }
    }
};

