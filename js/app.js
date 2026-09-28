(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");
  const year = document.querySelector("[data-current-year]");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (!menuButton || !navigation) {
    return;
  }

  const setMenuState = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Закрыть меню" : "Открыть меню"
    );

    navigation.dataset.open = String(isOpen);
  };

  menuButton.addEventListener("click", () => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    setMenuState(!isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      setMenuState(false);
    }
  });
})();