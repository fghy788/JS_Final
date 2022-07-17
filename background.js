const choose = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];

const img_load = "url('" + `image/${choose[Math.floor(Math.random() * choose.length)]}` + "')";

document.body.style.backgroundImage = img_load;
