let page = 1;

function next() {
  const cur = document.getElementById("p" + page);
  if (cur) cur.classList.remove("active");

  page++;
  const nxt = document.getElementById("p" + page);
  if (nxt) nxt.classList.add("active");
}

/* ✅ FIXED COUNTDOWN */
function countdown() {
  const hEl = document.getElementById("h");
  const mEl = document.getElementById("m");
  const sEl = document.getElementById("s");

  const now = new Date();
  let target = new Date(now.getFullYear(), 0, 18, 0, 0, 0);
  if (now > target) target.setFullYear(now.getFullYear() + 1);

  setInterval(() => {
    const diff = target - new Date();

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff / 60000) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    hEl.innerText = String(hours).padStart(2, "0");
    mEl.innerText = String(minutes).padStart(2, "0");
    sEl.innerText = String(seconds).padStart(2, "0");
  }, 1000);
}

countdown();

/* CAKE CUT */
function cutCake() {
  document.querySelector(".knife").style.left = "50px";

  const slice = document.getElementById("slice");
  slice.style.opacity = "1";
  slice.style.transform = "translateX(60px)";

  for (let i = 0; i < 40; i++) {
    const f = document.createElement("div");
    f.className = "firework";
    f.style.left = "50%";
    f.style.top = "40%";
    f.style.setProperty("--x", (Math.random() * 400 - 200) + "px");
    f.style.setProperty("--y", (Math.random() * 400 - 200) + "px");
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1200);
  }

  setTimeout(next, 1500);
}
