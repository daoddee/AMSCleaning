// Mobile menu
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  // Close menu after clicking a link
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    });
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Quote form: opens mail client (no backend needed)
const form = document.getElementById("quoteForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const postcode = String(data.get("postcode") || "");
    const bins = String(data.get("bins") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Quote Request - AMS Cleaning (${postcode})`);
    const body = encodeURIComponent(
      `Name: ${name}\nPostcode: ${postcode}\nBins: ${bins}\n\nMessage:\n${message}\n\nSent via amscleaning.co.uk`
    );

    window.location.href = `mailto:contact@amscleaning.co.uk?subject=${subject}&body=${body}`;
  });
}

// WhatsApp group link placeholder (update later)
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/JF8u2f1NrsHCe5EkcraJo4"; // <-- replace later
const whatsappBtn = document.getElementById("whatsappBtn");
const whatsappLink = document.getElementById("whatsappLink");

if (whatsappBtn) whatsappBtn.href = WHATSAPP_GROUP_LINK;
if (whatsappLink) whatsappLink.href = WHATSAPP_GROUP_LINK;
