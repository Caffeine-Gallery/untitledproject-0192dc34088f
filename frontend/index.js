import { backend } from "declarations/backend";

document.addEventListener("DOMContentLoaded", () => {
  const greetButton = document.getElementById("greetButton");
  const greetingElement = document.getElementById("greeting");

  greetButton.addEventListener("click", async () => {
    
    try {
      const greeting = await backend.greet();
      greetingElement.textContent = greeting;
    } catch (error) {
      console.error("Error fetching greeting:", error);
      greetingElement.textContent = "Error: Unable to fetch greeting";
    }
  });
});
