let page = 1;

function next() {
  const current = document.getElementById("p" + page);
  if (current) current.classList.remove("active");
  page++;
  const nextPage = document.getElementById("p" + page);
  if (nextPage) nextPage.classList.add("active");
}

/* COUNTDOWN */
function countdown() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 0, 18, 0, 0, 0);
  if (now > target) target.setFullYear(now.getFullYear() + 1);

  setInterval(() => {
    const diff = target - new Date();
    document.getElementById("h").innerText =
      String(Math.floor(diff / 3600000)).padStart(2, "0");
    document.getElementById("m").innerText =
      String(Math.floor(diff / 60000) % 60).padStart(2, "0");
    document.getElementById("s").innerText =
      String(Math.floor(diff / 1000) % 60).padStart(2, "0");
  }, 1000);
}
countdown();

/* CAKE CUT + FIREWORKS */
function cutCake() {
  const knife = document.querySelector(".knife");
  const slice = document.getElementById("slice");

  knife.style.transition = "1s";
  knife.style.left = "50px";

  slice.style.transition = "1s";
  slice.style.opacity = "1";
  slice.style.transform = "translateX(60px)";

  for (let i = 0; i < 40; i++) {
    const f = document.createElement("div");
    f.className = "firework";
    f.style.left = "50%";
    f.style.top = "40%";
    f.style.setProperty("--x", (Math.random()*400-200)+"px");
    f.style.setProperty("--y", (Math.random()*400-200)+"px");
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1200);
  }

  setTimeout(next, 1500);
}
