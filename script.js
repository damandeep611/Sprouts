const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

// Theme varibales
const userTheme = localStorage.getItem("theme");
const sysTheme = window.matchMedia("(prefer-color-scheme: dark)").matches;

//toggle icons
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};
// theme check fn
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && sysTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};

// switching the theme
const switchTheme = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

moonIcon.addEventListener("click", () => {
  switchTheme();
});
sunIcon.addEventListener("click", () => {
  switchTheme();
});
themeCheck();
