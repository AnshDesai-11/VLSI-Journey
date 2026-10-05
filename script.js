const bits = { a: 0, b: 0 };
const hints = {
  "00": "0 + 0 needs no carry.",
  "01": "One input is 1, so XOR makes Sum = 1.",
  "10": "One input is 1, so XOR makes Sum = 1.",
  "11": "1 + 1 is binary 10: Sum = 0 and Carry = 1."
};

function updateAdder() {
  const sum = bits.a ^ bits.b;
  const carry = bits.a & bits.b;
  document.getElementById("sum").textContent = sum;
  document.getElementById("carry").textContent = carry;
  document.getElementById("equation").textContent = `${bits.a} + ${bits.b} = ${carry}${sum}`;
  document.getElementById("logicHint").textContent = hints[`${bits.a}${bits.b}`];
  document.querySelectorAll(".bit-button").forEach(button => {
    const value = bits[button.dataset.bit];
    button.textContent = value;
    button.setAttribute("aria-pressed", String(value === 1));
  });
}

document.querySelectorAll(".bit-button").forEach(button => {
  button.addEventListener("click", () => {
    const key = button.dataset.bit;
    bits[key] = bits[key] ? 0 : 1;
    updateAdder();
  });
});

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
siteNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
