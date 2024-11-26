const tabItem = document.querySelectorAll(".tabs-btn-item");
const tabContent = document.querySelectorAll(".tabs-content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const tabTarget = evt.curretTarget;
  tabItem.forEach(function (item) {
    item.classList.remove("tabs-btn-item--active");
  });
  tabTarget.classList.add("tabs-btn-item--active");
  tabContent.forEach(function (item) {
    item.classList.remove("tabs-content-item--active");
  });
  document
    .querySelectorAll(`#${button}`)
    .classList.add("tabs-content-item--active");
}
