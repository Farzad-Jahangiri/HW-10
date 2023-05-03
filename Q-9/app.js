const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach((tip) => {
  tip.addEventListener("mouseover", () => {
    const tooltip = tip.querySelector("[data-tip]");
    tooltip.style.display = "block";
    const tipRect = tooltip.getBoundingClientRect();
    const elemRect = tip.getBoundingClientRect();
    const top = elemRect.top - tipRect.height - 5;
    const left = elemRect.left + (elemRect.width / 2) - (tipRect.width / 2);
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  });

  tip.addEventListener("mouseout", () => {
    const tooltip = tip.querySelector("[data-tip]");
    tooltip.style.display = "none";
  });
});
