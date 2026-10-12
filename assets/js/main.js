/* VISLY · Interacciones del sitio. Sin rastreadores, cookies ni envío a un servidor. */
(() => {
  "use strict";

  // Correo de contacto general indicado en el documento de la organización.
  const CONTACT_EMAIL = "soporte.visly@gmail.com";
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  let toastTimer;
  let preparedMessage = "";

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const header = document.querySelector(".site-header");
  const updateHeader = () =>
    header?.classList.toggle("scrolled", window.scrollY > 8);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // Mejora progresiva: el contenido es visible incluso sin JavaScript o sin observadores.
  if ("IntersectionObserver" in window && !reducedMotion) {
    try {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 },
      );
      document.body.classList.add("motion-enabled");
      document
        .querySelectorAll(".reveal")
        .forEach((element) => revealObserver.observe(element));
    } catch {
      document.body.classList.remove("motion-enabled");
    }
  }

  // Cierra el menú móvil después de elegir una sección.
  const menu = document.getElementById("mainNav");
  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.bootstrap && menu.classList.contains("show")) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Pestañas accesibles: clic, flechas, Home y End.
  const tabs = [...document.querySelectorAll(".solution-tab")];
  const activateTab = (tab, moveFocus = false) => {
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(item.getAttribute("aria-controls"));
      if (panel) panel.hidden = !selected;
    });
    if (moveFocus) tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (event) => {
      let target;
      if (event.key === "ArrowRight") target = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft")
        target = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") target = 0;
      if (event.key === "End") target = tabs.length - 1;
      if (target !== undefined) {
        event.preventDefault();
        activateTab(tabs[target], true);
      }
    });
  });

  // Marca la sección actual en la navegación cuando el navegador lo permite.
  if (
    "IntersectionObserver" in window &&
    document.getElementById("servicios")
  ) {
    const links = [
      ...document.querySelectorAll('.navbar .nav-link[href^="#"]'),
    ];
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) =>
            link.classList.toggle(
              "active",
              link.hash === `#${entry.target.id}`,
            ),
          );
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    links.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (section) navObserver.observe(section);
    });
  }

  function showToast(message) {
    const toast = document.getElementById("siteToast");
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("visible");
    toastTimer = setTimeout(() => toast.classList.remove("visible"), 4500);
  }

  async function copyText(text) {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        /* Puede no estar disponible al abrir index.html como archivo. */
      }
    }
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.setAttribute("aria-hidden", "true");
    Object.assign(field.style, {
      position: "fixed",
      top: "0",
      left: "-9999px",
    });
    const previousFocus = document.activeElement;
    document.body.append(field);
    field.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      /* Falla sin afectar la navegación. */
    }
    field.remove();
    previousFocus?.focus({ preventScroll: true });
    return copied;
  }

  document.querySelectorAll(".copy-email").forEach((button) => {
    button.addEventListener("click", async () => {
      const success = await copyText(CONTACT_EMAIL);
      showToast(
        success
          ? "Correo copiado."
          : `Copia el correo manualmente: ${CONTACT_EMAIL}`,
      );
    });
  });

  const form = document.getElementById("contactForm");
  const service = document.getElementById("contactService");
  const result = document.getElementById("mailResult");

  document.querySelectorAll("[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
      if (!service) return;
      service.value = link.dataset.service;
      service.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });

  if (!form) return;
  const fields = ["contactName", "contactEmail", "contactMessage"].map((id) =>
    document.getElementById(id),
  );
  const invalidatePreparedResult = () => {
    if (result) result.hidden = true;
    preparedMessage = "";
    fields.forEach((field) => field.setCustomValidity(""));
  };
  form.addEventListener("input", invalidatePreparedResult);
  form.addEventListener("change", invalidatePreparedResult);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const message = document.getElementById("contactMessage");
    fields.forEach((field) => field.setCustomValidity(""));
    if (name.value.trim().length < 2)
      name.setCustomValidity("Escribe tu nombre con al menos 2 caracteres.");
    if (message.value.trim().length < 20)
      message.setCustomValidity(
        "Cuéntanos tu idea con al menos 20 caracteres.",
      );
    if (!form.reportValidity()) return;

    const company =
      document.getElementById("contactCompany").value.trim() || "No indicada";
    preparedMessage = [
      "Hola, equipo VISLY:",
      "",
      "Me gustaría conversar sobre un proyecto.",
      "",
      `Nombre: ${name.value.trim()}`,
      `Empresa: ${company}`,
      `Correo de contacto: ${email.value.trim()}`,
      `Servicio de interés: ${service.value}`,
      "",
      "Mi idea:",
      message.value.trim(),
      "",
      "He leído el aviso de privacidad y autorizo el uso de mis datos para atender esta solicitud.",
    ].join("\n");

    const subject = `Nuevo proyecto VISLY · ${service.value}`;
    const mailLink = document.getElementById("mailLink");
    mailLink.href = `mailto:ineo.hospital.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(preparedMessage)}`;
    // textContent evita que el contenido del visitante se interprete como HTML.
    document.getElementById("messagePreview").textContent = preparedMessage;
    result.hidden = false;
    result.focus({ preventScroll: true });
    result.scrollIntoView({
      behavior: reducedMotion ? "instant" : "smooth",
      block: "nearest",
    });
  });

  document
    .getElementById("copyMessage")
    ?.addEventListener("click", async () => {
      if (!preparedMessage) return;
      const success = await copyText(preparedMessage);
      showToast(
        success
          ? "Mensaje copiado. Pégalo en tu correo y envíalo a VISLY."
          : "Abre “Ver el mensaje preparado” y cópialo manualmente.",
      );
    });
})();
