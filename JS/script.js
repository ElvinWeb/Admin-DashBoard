//Chart
const chart = document.getElementById("chart").getContext("2d");

new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          29384, 33537, 49632, 59075, 57828, 36684, 33572, 39972, 48847, 48116,
          61004,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          33384, 30537, 45632, 79075, 64828, 40684, 38572, 31972, 42847, 45116,
          60004,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
//toggle the Sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sideBar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sideBar.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
});
//theme changes
const themeBtn = document.querySelector(".theme-btn")

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme")


  themeBtn.querySelector("span:first-child").classList.toggle("active")
  themeBtn.querySelector("span:last-child").classList.toggle("active")
})