const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");
const watchlistForm = document.getElementById("watchlist-form");
const watchlistOutput = document.getElementById("watchlist-output");

function evaluateQuiz(answers) {
  const yesCount = answers.filter((answer) => answer === "yes").length;

  if (yesCount === 3) {
    return `Strong readiness. You understand core safety and planning habits.`;
  }

  if (yesCount === 2) {
    return `Moderate readiness. Keep learning and tighten your strategy before taking bigger risks.`;
  }

  return `Early-stage readiness. Focus on education, security, and budgeting before investing.`;
}

function handleQuizSubmit(event) {
  event.preventDefault();

  if (!quizForm || !quizResult) {
    return;
  }

  const answers = ["q1", "q2", "q3"].map((id) => {
    const field = document.getElementById(id);
    return `${field?.value ?? ""}`;
  });

  const message = evaluateQuiz(answers);
  quizResult.textContent = `${message}`;
}

function getWatchlist() {
  const raw = localStorage.getItem("cryptoWatchlist");
  const parsed = raw ? JSON.parse(raw) : [];
  return Array.isArray(parsed) ? parsed : [];
}

function renderWatchlist() {
  if (!watchlistOutput) {
    return;
  }

  const items = getWatchlist();

  if (items.length === 0) {
    watchlistOutput.textContent = `No assets saved yet.`;
    return;
  }

  const itemText = items.map((item) => `${item}`).join(", ");
  watchlistOutput.textContent = `Saved assets: ${itemText}`;
}

function handleWatchlistSubmit(event) {
  event.preventDefault();

  const input = document.getElementById("asset-name");
  const value = `${input?.value ?? ""}`.trim().toUpperCase();

  if (!value) {
    return;
  }

  const existing = getWatchlist();
  const alreadyExists = existing.some((item) => item === value);

  if (!alreadyExists) {
    const updated = [...existing, value];
    localStorage.setItem("cryptoWatchlist", JSON.stringify(updated));
  }

  if (input) {
    input.value = "";
  }

  renderWatchlist();
}

if (quizForm) {
  quizForm.addEventListener("submit", handleQuizSubmit);
}

if (watchlistForm) {
  watchlistForm.addEventListener("submit", handleWatchlistSubmit);
}

renderWatchlist();
