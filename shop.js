// document.addEventListener("DOMContentLoaded", function () {
//     const searchInput = document.querySelector("input[type='text']");
//     const rectangles = document.querySelectorAll(".rectangle");

//     searchInput.addEventListener("input", function () {
//         let searchText = searchInput.value.toLowerCase();

//         rectangles.forEach(rect => {
//             let itemName = rect.querySelector("p").innerText.toLowerCase();
//             if (itemName.includes(searchText)) {
//                 rect.style.display = "block";
//             } else {
//                 rect.style.display = "none";
//             }
//         });
//     });

//     rectangles.forEach(rect => {
//         rect.addEventListener("click", function () {
//             let itemName = rect.querySelector("p").innerText;
//             let confirmPurchase = confirm(`"${itemName}" ni xarid qilmoqchimisiz?`);
//             if (confirmPurchase) {
//                 alert(`${itemName} muvaffaqiyatli xarid qilindi!`);
//             }
//         });
//     });
// });



// document.addEventListener("DOMContentLoaded", function () {
//     const rectangles = document.querySelectorAll(".rectangle");
//     const searchInput = document.querySelector("input[type='text']");

//     // QIDIRUV FUNKSIYASI
//     searchInput.addEventListener("input", function () {
//         let searchText = searchInput.value.toLowerCase();

//         rectangles.forEach(rect => {
//             let itemName = rect.querySelector("p").innerText.toLowerCase();
//             if (itemName.includes(searchText)) {
//                 rect.style.display = "block";
//             } else {
//                 rect.style.display = "none";
//             }
//         });
//     });

//     // SOTIB OLISH FUNKSIYASI
//     rectangles.forEach(rect => {
//         rect.addEventListener("click", function () {
//             let confirmPurchase = confirm(`"${rect.querySelector("p").innerText}" ni xarid qilmoqchimisiz?`);
//             if (confirmPurchase) {
//                 alert("Mahsulot muvaffaqiyatli xarid qilindi!");

//                 let purchases = JSON.parse(localStorage.getItem("purchases")) || [];
//                 purchases.push(rect.outerHTML); 
//                 localStorage.setItem("purchases", JSON.stringify(purchases));
//             }
//         });
//     });

//     // "Haridlar tarixi" knopka
//     document.querySelector(".box1_text2").addEventListener("click", function () {
//         window.location.href = "sotibolingan.html"; 
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const rectangles = document.querySelectorAll(".rectangle");
    const searchInput = document.querySelector("input[type='text']");
    const olinganNarsa = document.querySelector(".olinganNarsa");

    // QIDIRUV FUNKSIYASI
    searchInput.addEventListener("input", function () {
        let searchText = searchInput.value.toLowerCase();

        rectangles.forEach(rect => {
            let itemName = rect.querySelector("p").innerText.toLowerCase();
            if (itemName.includes(searchText)) {
                rect.style.display = "block";
            } else {
                rect.style.display = "none";
            }
        });
    });

    // SOTIB OLISH FUNKSIYASI
    rectangles.forEach(rect => {
        rect.addEventListener("click", function () {
            let confirmPurchase = confirm(`"${rect.querySelector("p").innerText}" ni xarid qilmoqchimisiz?`);
            if (confirmPurchase) {
                alert("Mahsulot muvaffaqiyatli xarid qilindi!");

                let purchases = JSON.parse(localStorage.getItem("purchases")) || [];
                purchases.push(rect.outerHTML); 
                localStorage.setItem("purchases", JSON.stringify(purchases));

                // `.olinganNarsa` diviga ham qo‘shish
                olinganNarsa.innerHTML += rect.outerHTML;
            }
        });
    });

    // "Haridlar tarixi" knopkasi
    document.querySelector(".box1_text2").addEventListener("click", function () {
        window.location.href = "sotibolingan.html"; 
    });
});
