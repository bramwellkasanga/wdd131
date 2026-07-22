const glossaryTerms = [
  {
    title: "Blockchain",
    category: "Technology",
    description: "A shared digital ledger that records transactions in linked blocks that are hard to alter."
  },
  {
    title: "Coin",
    category: "Asset Type",
    description: "A cryptocurrency that runs on its own blockchain, such as Bitcoin."
  },
  {
    title: "Token",
    category: "Asset Type",
    description: "A digital asset built on an existing blockchain, often used in apps and services."
  },
  {
    title: "Private Key",
    category: "Security",
    description: "A secret credential that proves ownership of your crypto assets and must never be shared."
  },
  {
    title: "Wallet",
    category: "Security",
    description: "A software app or hardware device that stores keys and helps you send or receive crypto."
  },
  {
    title: "Volatility",
    category: "Trading",
    description: "The speed and size of price changes over time, which can increase both opportunity and risk."
  }
];

const filterInput = document.getElementById("term-filter");
const cardsContainer = document.getElementById("term-cards");
const resultCount = document.getElementById("result-count");

function createCardMarkup(term) {
  return `
    <article class="card">
      <h3>${term.title}</h3>
      <p><strong>Category:</strong> ${term.category}</p>
      <p>${term.description}</p>
    </article>
  `;
}

function renderCards(filterValue = "") {
  if (!cardsContainer || !resultCount) {
    return;
  }

  const keyword = filterValue.trim().toLowerCase();
  const filteredTerms = glossaryTerms.filter((term) => {
    const text = `${term.title} ${term.category} ${term.description}`.toLowerCase();
    return text.includes(keyword);
  });

  if (filteredTerms.length > 0) {
    const cardHtml = filteredTerms.map((term) => createCardMarkup(term)).join("");
    cardsContainer.innerHTML = `${cardHtml}`;
  } else {
    cardsContainer.innerHTML = `
      <article class="card">
        <h3>No matches found</h3>
        <p>Try a different keyword such as blockchain, wallet, or token.</p>
      </article>
    `;
  }

  resultCount.textContent = `${filteredTerms.length} term(s) shown.`;
}

function wireFilter() {
  if (!filterInput) {
    return;
  }

  filterInput.addEventListener("input", (event) => {
    const value = event.target.value;
    renderCards(`${value}`);
  });
}

renderCards();
wireFilter();
