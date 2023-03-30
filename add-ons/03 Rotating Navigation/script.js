const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classlist.add("show-nav"));
close.addEventListener("click", () => container.classlist.remove("show-nav"));
