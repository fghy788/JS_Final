const namebox = document.querySelector(".login");
const name_text_java = document.querySelector("#name_text");
const classhidden = () => {
  if (localStorage.getItem("name") === null) {
    namebox.classList.remove("hidden");
  } else {
    namebox.classList.add("hidden");
    name_text_java.classList.remove("hidden");
    name_text_java.innerText = `안녕하세요 ! ${localStorage.getItem("name")}님!`;
  }
};

classhidden();
namebox.addEventListener("submit", (event) => {
  event.preventDefault();
  namebox.classList.add("hidden");
  name_text_java.classList.remove("hidden");
  localStorage.setItem("name", document.querySelector(".textbox").value);
  name_text_java.innerText = `안녕하세요 ! ${localStorage.getItem("name")}님!`;
});
