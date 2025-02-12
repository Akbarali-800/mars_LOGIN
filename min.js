// let spaceForm = document.querySelector("form"); // Formani to'g'ri tanlash
// let spaceLogin = document.querySelector(".login");
// let spaceParol = document.querySelector(".parol");
// let spaceEye = document.querySelector(".koz");
// let btn = document.querySelector(".submit");
// let errorMsg = document.querySelector(".error-msg");

// const students = [
//     {
//         ism: "Jahongir",
//         familiya: "KAdirxonov",
//         yosh: 19,
//         tugilgan_yil: 2005,
//         id: 1111,
//         password: 1111,
//         coin: 1200,
//         hp: 2000
//     },
//     {
//         ism: "Ibrohim",
//         familiya: "Mo'minov",
//         yosh: 17,
//         tugilgan_yil: 2007,
//         id: 2222,
//         password: 2222,
//         coin: 3200,
//         hp: 2000
//     },
//     {
//         ism: "Iskanadar",
//         familiya: "Abdullayev",
//         yosh: 18,
//         tugilgan_yil: 2006,
//         id: 3333,
//         password: 3333,
//         coin: 2800,
//         hp: 2000
//     },
//     {
//         ism: "Otabek",
//         familiya: "Timurov",
//         yosh: 18,
//         tugilgan_yil: 2006,
//         id: 4444,
//         password: 4444,
//         coin: 2500,
//         hp: 2000
//     },
//     {
//         ism: "Doniyor",
//         familiya: "Abdukamolov",
//         yosh: 18,
//         tugilgan_yil: 2006,
//         id: 5555,
//         password: 5555,
//         coin: 200,
//         hp: 2000
//     },
//     {
//         ism: "Akbarali",
//         familiya: "Mo'minov",
//         yosh: 18,
//         tugilgan_yil: 2006,
//         id: 270608,
//         password: 7777,
//         coin: 3400,
//         hp: 2400
//     },
//     {
//         ism: "Ozod",
//         familiya: "Axrorov",
//         yosh: 18,
//         tugilgan_yil: 2006,
//         id: 7733,
//         password: 7733,
//         coin: 2700,
//         hp: 2200
//     }
// ];

// // Ko'z tugmasi orqali parolni ko‘rsatish va yashirish
// spaceEye.addEventListener("mousedown", (evt) => {
//     evt.preventDefault();
//     spaceParol.setAttribute("type", "text");
// });
// spaceEye.addEventListener("mouseup", (evt) => {
//     evt.preventDefault();
//     spaceParol.setAttribute("type", "password");
// });

// // Formani yuborish hodisasi
// spaceForm.addEventListener("submit", (bot) => {
//     bot.preventDefault();

//     let login = Number(spaceLogin.value.trim());
//     let parol = Number(spaceParol.value.trim());

//     let topilganStudent = students.find(oquvchi => oquvchi.id === login && oquvchi.password === parol);

//     if (topilganStudent) {
//         alert(`Xush kelibsiz, ${topilganStudent.ism}!`);
//     } else {
//         alert("Talaba topilmadi! Login yoki parol noto‘g‘ri.");
//     }
// });





// let spaceLogin = document.querySelector("#text_t");
// let spaceParol = document.querySelector("#password_p");
// let btn = document.querySelector(".confir_btn");

// const students = [
//     {
//         ism: "Jahongir",
//         familiya: "KAdirxonov",
//         yosh: 19,
//         tugilgan_yil: 2005,
//         id: 1111,
//         password: 1111,
//         coin: 1200,
//         hp: 2000
//     },
//     {
//         ism: "Ibrohim",
//         familiya: "Mo'minov",
//         yosh: 17,
//         tugilgan_yil: 2007,
//         id: 2222,
//         password: 2222,
//         coin: 3200,
//         hp: 2000
//     },
//     {
//         ism: "Iskanadar",
//         familiya: "Abdullayev",
//         yosh: 18,
//         tugilgan_yil: 2006,
//         id: 3333,
//         password: 3333,
//         coin: 2800,
//         hp: 2000
//     },
//     {
//         ism: "Otabek",
//         familiya: "Timurov",
//         yosh: 18,
//         tugilgan_yil: 2006,
//         id: 4444,
//         password: 4444,
//         coin: 2500,
//         hp: 2000
//     },
//     {
//         ism: "Doniyor",
//         familiya: "Abdukamolov",
//         yosh: 18,
//         tugilgan_yil: 2006,
//         id: 5555,
//         password: 5555,
//         coin: 200,
//         hp: 2000
//     },
//     {
//         ism: "Akbarali",
//         familiya: "Mo'minov",
//         yosh: 18,
//         tugilgan_yil: 2006,
//         id: 270608,
//         password: 7777,
//         coin: 3400,
//         hp: 2400
//     },
//     {
//         ism: "Ozod",
//         familiya: "Axrorov",
//         yosh: 18,
//         tugilgan_yil: 2006,
//         id: 7733,
//         password: 7733,
//         coin: 2700,
//         hp: 2200
//     }
// ];



// btn.addEventListener("click", () => {
//     let login = Number(spaceLogin.value.trim());
//     let parol = Number(spaceParol.value.trim());

//     let topilganStudent = students.find(oquvchi => oquvchi.id === login && oquvchi.password === parol);

//     if (topilganStudent) {
//         localStorage.setItem("currentStudent", JSON.stringify(topilganStudent));



//         window.location.href = "user.html";
//     } else {
//         alert("Talaba topilmadi! Login yoki parol noto‘g‘ri.");
//     }
// });




let spaceLogin = document.querySelector("#text_t");
let spaceParol = document.querySelector("#password_p");
let btn = document.querySelector(".confir_btn");
let spaceEye = document.querySelector("#eyesbaby");

const students = [
    {
        ism: "Jahongir",
        familiya: "Kadirxonov",
        yosh: 19,
        tugilgan_yil: 2005,
        id: 1111,
        password: 1111,
        coin: 1200,
        hp: 2000
    },
    {
        ism: "Ibrohim",
        familiya: "Mo'minov",
        yosh: 17,
        tugilgan_yil: 2007,
        id: 2222,
        password: 2222,
        coin: 3200,
        hp: 2000
    },
    {
        ism: "Iskanadar",
        familiya: "Abdullayev",
        yosh: 18,
        tugilgan_yil: 2006,
        id: 3333,
        password: 3333,
        coin: 2800,
        hp: 2000
    },
    {
        ism: "Otabek",
        familiya: "Timurov",
        yosh: 18,
        tugilgan_yil: 2006,
        id: 4444,
        password: 4444,
        coin: 2500,
        hp: 2000
    },
    {
        ism: "Doniyor",
        familiya: "Abdukamolov",
        yosh: 18,
        tugilgan_yil: 2006,
        id: 5555,
        password: 5555,
        coin: 200,
        hp: 2000
    },
    {
        ism: "Akbarali",
        familiya: "Mo'minov",
        yosh: 18,
        tugilgan_yil: 2006,
        id: 270608,
        password: 7777,
        coin: 3400,
        hp: 2400
    },
    {
        ism: "Ozod",
        familiya: "Axrorov",
        yosh: 18,
        tugilgan_yil: 2006,
        id: 7733,
        password: 7733,
        coin: 2700,
        hp: 2200
    }
];

spaceEye.addEventListener("click", () => {
    if (spaceParol.type === "password") {
        spaceParol.type = "text"; 
    } else {
        spaceParol.type = "password";
    }
});

btn.addEventListener("click", () => {
    let login = Number(spaceLogin.value.trim());
    let parol = Number(spaceParol.value.trim());

    let topilganStudent = students.find(oquvchi => oquvchi.id === login && oquvchi.password === parol);

    if (topilganStudent) {
        localStorage.setItem("currentStudent", JSON.stringify(topilganStudent)); 
        window.location.href = "user.html"; 
    } else {
        alert("Talaba topilmadi! Login yoki parol noto‘g‘ri.");
    }
});
