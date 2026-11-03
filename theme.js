(function () {
  var KEY = "ak_theme";
  var root = document.documentElement;

  function read() {
    try {
      var v = localStorage.getItem(KEY);
      return v === "dark" || v === "light" ? v : "light";
    } catch (e) {
      return "light";
    }
  }

  function sync() {
    var dark = root.getAttribute("data-theme") === "dark";
    var label = dark ? "Switch to light mode" : "Switch to dark mode";
    var buttons = document.querySelectorAll(".theme-toggle");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-label", label);
      buttons[i].setAttribute("title", label);
      buttons[i].setAttribute("aria-pressed", dark ? "true" : "false");
    }
  }

  function apply(theme, persist) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    if (persist) {
      try { localStorage.setItem(KEY, theme); } catch (e) {}
    }
    sync();
  }

  // Apply saved choice before the body paints.
  apply(read(), false);

  function bind() {
    sync();
    var buttons = document.querySelectorAll(".theme-toggle");
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].getAttribute("data-bound") === "1") continue;
      buttons[i].setAttribute("data-bound", "1");
      buttons[i].addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        apply(next, true);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }

})();
