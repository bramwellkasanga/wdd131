const navList = document.querySelector(".nav-list");
const menuButton = document.querySelector(".menu-button");
const yearNode = document.getElementById("current-year");
const visitNode = document.getElementById("visit-count");
const greetingNode = document.getElementById("greeting");
const tipNode = document.getElementById("daily-tip");

const dailyTips = [
  "Never invest money you cannot afford to lose.",
  "Use two-factor authentication on every exchange account.",
  "Store large balances in a secure wallet, not on an exchange.",
  "Research token utility before following social media hype.",
  "Track every trade so you can learn from your own patterns."
];

document.documentElement.classList.add("js-enabled");

function updateYear() {
  if (yearNode) {
    yearNode.textContent = `${new Date().getFullYear()}`;
  }
}

function setupMenu() {
  if (!menuButton || !navList) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", `${!expanded}`);
    navList.classList.toggle("open");
  });
}

function renderGreeting() {
  if (!greetingNode) {
    return;
  }

  const hour = new Date().getHours();

  if (hour < 12) {
    greetingNode.textContent = `Good morning. Build your crypto knowledge one concept at a time.`;
  } else if (hour < 18) {
    greetingNode.textContent = `Good afternoon. This is a great time to review risk and strategy.`;
  } else {
    greetingNode.textContent = `Good evening. Reflect on what you learned today and stay disciplined.`;
  }
}

function trackVisits() {
  if (!visitNode) {
    return;
  }

  const storedCount = Number(localStorage.getItem("cryptoVisitCount") ?? "0");
  const nextCount = storedCount + 1;
  localStorage.setItem("cryptoVisitCount", `${nextCount}`);
  visitNode.textContent = `${nextCount}`;
}

function renderDailyTip() {
  if (!tipNode) {
    return;
  }

  const dayIndex = new Date().getDay();
  const tip = dailyTips[dayIndex % dailyTips.length];
  tipNode.textContent = `${tip}`;
}

updateYear();
setupMenu();
renderGreeting();
trackVisits();
renderDailyTip();
