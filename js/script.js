const advice = document.querySelector("[data-advice]");
const message = document.querySelector("[data-message]");
const btn = document.querySelector("[data-btn]");
const spinner = document.getElementById("spinner");

async function handleClick(event) {
  try {
    event.preventDefault();
    spinner.style.display = "block";
    message.style.display = 'none'
    advice.style.display = 'none'
    
    const json = await fetch("https://api.adviceslip.com/advice");
    const data = await json.json();
    const id = await data.slip.id;
    const adviceMessage = await data.slip.advice;
    advice.innerText = `Advice #${await id}`;
    message.innerText = `"${await adviceMessage}"`;
} catch {
    message.innerText = "Erro ao exibir a mensagem";
    advice.innerText = "Erro ao exibir a mensagem";
} finally {
    spinner.style.display = "none";
    message.style.display = 'block'
    advice.style.display = 'block'
  }
}

btn.addEventListener("click", handleClick);
