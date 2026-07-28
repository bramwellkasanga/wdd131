const reviewCountElement = document.getElementById("reviewCount");
const summaryList = document.getElementById("summaryList");
const submissionSummary = document.getElementById("submissionSummary");

const params = new URLSearchParams(window.location.search);
const hasRequiredSubmissionData = params.has("product") && params.has("rating") && params.has("installDate");

const reviewCountKey = "wdd131-review-count";
let reviewCount = Number(localStorage.getItem(reviewCountKey)) || 0;

if (hasRequiredSubmissionData) {
  reviewCount += 1;
  localStorage.setItem(reviewCountKey, String(reviewCount));
}

if (reviewCountElement) {
  reviewCountElement.textContent = String(reviewCount);
}

if (summaryList && submissionSummary) {
  if (!hasRequiredSubmissionData) {
    submissionSummary.hidden = true;
  } else {
    const submittedFeatures = params.getAll("features");

    const summaryItems = [
      ["Product ID", params.get("product") || "N/A"],
      ["Rating", `${params.get("rating") || "N/A"} star(s)`],
      ["Install Date", params.get("installDate") || "N/A"],
      ["Useful Features", submittedFeatures.length > 0 ? submittedFeatures.join(", ") : "None selected"],
      ["Written Review", params.get("reviewText") || "No written review"],
      ["User Name", params.get("userName") || "Anonymous"]
    ];

    summaryItems.forEach(([label, value]) => {
      const item = document.createElement("li");
      const labelSpan = document.createElement("span");
      labelSpan.textContent = `${label}:`;
      item.append(labelSpan, ` ${value}`);
      summaryList.append(item);
    });
  }
}
