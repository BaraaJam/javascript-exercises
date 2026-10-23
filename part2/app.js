// 1. Data Store
const articles = [
    { id: 101, title: "JavaScript Tips", body: "Use 'const' by default for cleaner code." },
    { id: 102, title: "CSS Tricks", body: "Flexbox makes centering elements super easy." },
    { id: 103, title: "Web Security", body: "Always validate user input on the server side." }
];

// 2. Select UI Elements
const loadBtn = document.getElementById("load-btn");
const contentArea = document.getElementById("content-area");

// ====================================================
// TODO: YOUR CODE GOES BELOW
// ====================================================

// Step 1: Create a function to generate the HTML string for a card
// Hint: Return a string using backticks (``) that contains:
// - An <h3> for the title
// - A <p> for the body
// - Two buttons with classes 'btn-like' and 'btn-share'
function createCardHTML(article) {
    return `
        <div class="card">
            <h3>${article.title}</h3>
            <p>${article.body}</p>
            <button class="btn btn-like">Like ❤️</button>
            <button class="btn btn-share">Share 🔗</button>
        </div>
    `;
}

// Step 2: Add click event listener to #load-btn
// Hint: Loop through 'articles' array and append HTML to 'contentArea'
loadBtn.addEventListener("click", () => {
    contentArea.innerHTML = articles.map(createCardHTML).join("");
});

// Step 3: Implement Event Delegation for the Like and Share buttons
// Hint: Add ONE listener to 'contentArea' and check e.target.classList
contentArea.addEventListener("click", (e) => {
    // 4. Handle Like Button
    if (e.target.classList.contains("btn-like")) {
        e.target.classList.toggle("liked");
        e.target.textContent = e.target.classList.contains("liked")
            ? "Liked! ✅"
            : "Like ❤️";
    }

    // 5. Handle Share Button
    if (e.target.classList.contains("btn-share")) {
        const card = e.target.closest(".card");
        const title = card.querySelector("h3").textContent;
        alert(`Shared: "${title}"`);
    }
});