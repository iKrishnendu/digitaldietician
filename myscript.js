// your_script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chatForm");
  const userInput = document.getElementById("userInput");
  const chatOutput = document.getElementById("chatOutput");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formValue = userInput.value;

    const response = await callChatAPI(formValue);
    if (response) {
      appendMessage(response, "assistant");
    }

    userInput.value = ""; // Clear the input field
  });

  const appendMessage = (message, role) => {
    const messageElement = document.createElement("div");
    messageElement.className = role;
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
  };

  const callChatAPI = async (formValue) => {
    try {
      const response = await axios.post(
        "http://localhost:6000/api", // Update with your server URL
        { formValue }
      );
      return response.data;
    } catch (error) {
      console.error("Error sending data:", error.message);
      // Handle errors as needed
      return null;
    }
  };
});
