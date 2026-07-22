const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

function saveSubmission(record) {
  const existingRaw = localStorage.getItem("cryptoContactSubmissions");
  const existing = existingRaw ? JSON.parse(existingRaw) : [];
  const next = Array.isArray(existing) ? [...existing, record] : [record];
  localStorage.setItem("cryptoContactSubmissions", JSON.stringify(next));
}

function setFeedback(message, isError = false) {
  if (!feedback) {
    return;
  }

  feedback.textContent = `${message}`;
  feedback.classList.toggle("error", isError);
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (!contactForm) {
    return;
  }

  const fullNameField = document.getElementById("full-name");
  const emailField = document.getElementById("email");
  const experienceField = document.getElementById("experience");
  const questionField = document.getElementById("question");

  const fullName = `${fullNameField?.value ?? ""}`.trim();
  const email = `${emailField?.value ?? ""}`.trim();
  const experience = `${experienceField?.value ?? ""}`.trim();
  const question = `${questionField?.value ?? ""}`.trim();

  if (!fullName || !email || !experience || question.length < 20) {
    setFeedback(`Please complete all fields correctly before submitting.`, true);
    return;
  }

  const submission = {
    fullName,
    email,
    experience,
    question,
    submittedAt: new Date().toISOString()
  };

  saveSubmission(submission);
  setFeedback(`Thanks, ${fullName}. Your question has been saved locally in this browser.`);
  contactForm.reset();
}

if (contactForm) {
  contactForm.addEventListener("submit", handleFormSubmit);
}
