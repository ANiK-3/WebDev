const container = document.querySelector(".container");
const h1El = document.querySelector("h1");
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) count++;
    else if (styles.contains("decrease")) count--;
    else count = 0;

    value.textContent = count;

    if (count > 0) return (value.style.color = "rgb(183, 221, 226)");
    if (count < 0) return (value.style.color = "red");
  });
});

container.addEventListener("mouseover", () => {
  h1El.style.color = "rgb(253, 165, 0)";
  value.style.color = "rgb(253, 165, 0)";
  btns.forEach((btn) => {
    btn.style.backgroundColor = "rgb(253, 165, 0)";
  });
});

container.addEventListener("mouseleave", () => {
  h1El.style.color = "rgb(223, 165, 57)";
  value.style.color = "rgb(223, 165, 57)";
  btns.forEach((btn) => {
    btn.style.backgroundColor = "rgb(223, 165, 57)";
  });
});

console.log(Hello);
