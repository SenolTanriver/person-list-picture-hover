const items = document.querySelectorAll("a");

items.forEach(item => {
  const infoContent = item.querySelector(".infoContent");

  item.addEventListener("mouseover", function(event) {
    infoContent.classList.add("active");
  });

  item.addEventListener("mouseout", function(event) {
    infoContent.classList.remove("active");
  });
});