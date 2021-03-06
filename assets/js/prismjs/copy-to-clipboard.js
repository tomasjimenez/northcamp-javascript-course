(function () {
  if (typeof self === "undefined" || !self.Prism || !self.document) {
    return;
  }

  if (!Prism.plugins.toolbar) {
    console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");

    return;
  }

  var ClipboardJS = window.ClipboardJS || undefined;

  if (!ClipboardJS && typeof require === "function") {
    ClipboardJS = require("clipboard");
  }

  var callbacks = [];

  if (!ClipboardJS) {
    var script = document.createElement("script");
    var head = document.querySelector("head");

    script.onload = function () {
      ClipboardJS = window.ClipboardJS;

      if (ClipboardJS) {
        while (callbacks.length) {
          callbacks.pop()();
        }
      }
    };

    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js";
    head.appendChild(script);
  }

  Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (env) {
    var linkCopy = document.createElement("button");
    linkCopy.textContent = "Copiar";
    linkCopy.setAttribute("type", "button");
    linkCopy.classList.add("copy_button");

    var element = env.element;

    if (!ClipboardJS) {
      callbacks.push(registerClipboard);
    } else {
      registerClipboard();
    }

    return linkCopy;

    function registerClipboard() {
      var clip = new ClipboardJS(linkCopy, {
        text: function () {
          return element.textContent;
        },
      });

      clip.on("success", function () {
        linkCopy.textContent = "Copiado";

        resetText();
      });
      clip.on("error", function () {
        linkCopy.textContent = "Pulsa Ctrl+C para copiar";

        resetText();
      });
    }

    function resetText() {
      setTimeout(function () {
        linkCopy.textContent = "Copiar";
      }, 5000);
    }
  });
})();
