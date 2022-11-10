let colorTheme = localStorage.getItem("color_theme");
let body = document.body;

if (colorTheme == "Dark") {
    body.classList.add("dark");
    if (body.classList.contains("light")) {
        body.classList.remove("light");
    }
} else if (colorTheme == "Light") {
    body.classList.add("light");
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
    }
}
