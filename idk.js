const ideas = [
  "Make a game where you're a duck fighting robots!",
  "Build a random meme generator!",
  "Create a platformer with flying cats!",
  "Make a clicker game with potatoes!",
  "Design a game that ends when you blink (somehow lol)"
];

const button = document.getElementById("ideaBtn");
const text = document.getElementById("ideaText");

button.addEventListener("click", () => {
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  text.textContent = randomIdea;
});

