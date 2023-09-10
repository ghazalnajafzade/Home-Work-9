let advertising = document.querySelector(".main-advertising");
console.log(advertising);
let advertise = [
  {
    pic: "./img/advertising-image/1.jpg",
    Title: " دستبند نمادار",
    detail: ["در حد نو ", " 14/500/000 تومان ", "لحظاتی پیش در افسریه"],
  },
  {
    pic: "./img/advertising-image/2.jpg",
    Title: "دو نبش نوساز",
    detail: ["کلید نخورده   ", " ۵۷,۰۰۰,۰۰۰ تومان", "لحظاتی پیش در خاوران "],
  },
  {
    pic: "./img/advertising-image/3.jpg",
    Title: "لوستر مدرن  ",
    detail: ["", " ۵,۵۰۰,۰۰۰ تومان", "۱ ساعت پیش در فلاح"],
  },
  {
    pic: "./img/advertising-image/4.jpg",
    Title: " خدمات تعمیر یخچال",
    detail: [" زعفرانیه "],
    detail: ["", " ۵۰۰,۰۰۰ تومان", "۱ ساعت پیش در شهران"],
  },
  {
    pic: "./img/advertising-image/5.jpg",
    Title: "لپتاپ دل",
    detail: [" ۵ ساعت پیش در پاسداران"],
    detail: ["", " ۷,۵۰۰,۰۰۰ تومان", "۱ ساعت پیش در فردوس"],
  },
  {
    pic: "./img/advertising-image/6.jpg",
    Title: "یخچال خارجی و سالم",
    detail: ["در حد نو", "۳۰۰,۰۰۰ تومان", "لحظاتی پیش در آشتیانی"],
  },
  {
    pic: "./img/advertising-image/7.jpg",
    Title: "هاون قدیمی و عتیقه",
    detail: ["", "۳,۰۰۰,۰۰۰,۰۰۰ تومان", "لحظاتی پیش در تهرانپارس "],
  },
  //   {
  //     pic: ,
  //     Title:""
  //     detail:["","",""]
  //   },
];

advertise.forEach((item, index) => {
  const html = ` 
    <!-- ---------- advertise ${index + 1} ---------- -->
    <div class="advertising">
                  <div class="content">
                    <h2 class="font-medium text-black">${item.Title}</h2>
                    <div class="details">
                      <span>${item.detail[0]} </span>
                      <span>${item.detail[1]} </span>
                      <span> ${item.detail[2]} </span>
                    </div>
                  </div>
                  <div class="img relative">
                    <img
                      src="./img/chat.svg"
                      class="absolute bottom-[4px] right-[-20px]"
                      alt=""
                    />
                    <img
                      width="156"
                      height="156"
                      alt=""
                      class="rounded-md add-image"
                    />
                  </div>
                </div>`;
  advertising.insertAdjacentHTML("beforeend", html);
  let addImg = document.querySelectorAll(".add-image");
  addImg[index].setAttribute("src", `${item.pic}`);
});

// ----------------- aside ----------=--
let asideCat = document.querySelector(".asid-categori");

let asideCategori = [
  {
    icon: "./img/icon/home-outline.svg",
    Title: "املاک",
  },
  {
    icon: "./img/icon/icons8-car-50.png",
    Title: "وسایل نقلیه",
  },
  {
    icon: "./img/icon/mobile.svg",
    Title: "کالای دیجیتال",
  },
  {
    icon: "./img/icon/icons8-table-lights-50.png",
    Title: "خانه و آشپزخانه",
  },
  {
    icon: "./img/icon/icons8-paint-brush-20.png",
    Title: "خدمات",
  },
  {
    icon: "./img/icon/icons8-watch-24.png",
    Title: "وسایل شخصی",
  },
  {
    icon: "./img/icon/icons8-dice-64.png",
    Title: "سرگرمی و فراغت",
  },
  {
    icon: "./img/icon/icons8-social-32.png",
    Title: "اجتماعی",
  },
  {
    icon: "./img/icon/icons8-chair-48.png",
    Title: "تجهیزات و صنعتی",
  },
  {
    icon: "./img/icon/icons8-briefcase-64.png",
    Title: "استخدام و کاریابی",
  },
  {
    icon: "./img/icon/icons8-applicants-64.png",
    Title: "رزومۀ کارجویان",
  },
];

asideCategori.forEach((element) => {
  const asideHtml = `
  <div class="h-[28px] flex items-center p-y-[6px] text-sm text-gray-400 gap-2 ">
              <img src="${element.icon}" alt="">
              <span>
               ${element.Title}
              </span>
            </div>
  `;
  asideCat.insertAdjacentHTML("beforeend", asideHtml);
});
