/* Smooth scroll */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* Fade animation */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

/* Typing animation */
const text = "Design. Build. Inspire.";
let index = 0;
const typing = document.getElementById("typing");

function typeEffect() {
    if (index < text.length) {
        typing.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 90);
    }
}
typeEffect();

/* Modal */
function openModal(title, text) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = text;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* Contact form */
document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("success").style.display = "block";
    e.target.reset();
});

/* Dark mode */
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
