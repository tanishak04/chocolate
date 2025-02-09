const messages = [
    "You are as sweet as chocolate! 💕",
    "Sending you a virtual chocolate treat! 🍩",
    "Hope your day is filled with sweetness! 🍫",
    "Chocolate makes everything better! 🍪"
];

function changeMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
}

function createEmoji() {
    const emojis = ["🍫", "💛", "❤️"];
    const emoji = document.createElement("div");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.classList.add("emoji");
    emoji.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(emoji);
    
    setTimeout(() => emoji.remove(), 3000);
}

function dropMore() {
    for (let i = 0; i < 5; i++) {
        createEmoji();
    }
}

setInterval(createEmoji, 1000);
