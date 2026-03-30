function initBackToTopButton(){
document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.getElementById("topBtn");
  const bottomBtn = document.getElementById("bottomBtn");

  // Show/hide buttons on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      topBtn.classList.remove("hidden");
      bottomBtn.classList.remove("hidden");
    } else {
      topBtn.classList.add("hidden");
      bottomBtn.classList.add("hidden");
    }
  });

  // Scroll to top
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Scroll to bottom
  bottomBtn.addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });
});
}