// Sidebar
const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

// Slider

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: true,
    height: 650,
    transition: 600,
    interval: 3000
});