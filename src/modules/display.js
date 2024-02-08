function show(module) {
  document.querySelector(`.${module}`).style.display = "block";
}

function hide(module) {
  document.querySelector(`.${module}`).style.display = "none";
}

export { show, hide };
