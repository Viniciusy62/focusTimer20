export const toggleMode = {
  btnToggleMode: document.querySelector(".toggle-btn"),
  page: document.querySelector("html"),
  timer: document.querySelector(".timer"),
  controller: document.querySelectorAll(".controller button"),

  toggleMode() {
    toggleMode.btnToggleMode.classList.toggle("dark");
    toggleMode.page.classList.toggle("dark");
    toggleMode.timer.classList.toggle("dark");

    toggleMode.controller.forEach((e) => {
      e.classList.toggle("dark");
    });
  },
};

toggleMode.btnToggleMode.addEventListener("click", toggleMode.toggleMode);
