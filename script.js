// === SIDEBAR MENU ===
const hamburger = document.getElementById("hamburger");
const sidebar   = document.getElementById("sidebar");
const overlay   = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("show");
});


// === NEWS TICKER ===
(function ticker() {
  const track = document.getElementById('ticker');
  const items = Array.from(track.querySelectorAll('.ticker-item'));
  let index = 0;

  function showNext() {
    const w = track.clientWidth;
    const current = items[index % items.length];

    current.style.transition = 'none';
    current.style.left = `${w}px`;
    void current.offsetWidth;

    current.style.transition = 'transform 8s linear';
    current.style.transform = `translateX(-${w + current.clientWidth}px)`;

    setTimeout(() => {
      current.style.transition = 'none';
      current.style.transform = '';
      index++;
      showNext();
    }, 8000);
  }

  if (items.length) showNext();
})();


// === SUBSCRIBE FORM ===
document.getElementById('subscribe')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Cảm ơn bạn đã đăng ký! Bạn sẽ nhận tin từ trường.');
});


// === CURRENT YEAR ===
document.getElementById('year').textContent = new Date().getFullYear();
const ham = document.getElementById("hamburger");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
});
