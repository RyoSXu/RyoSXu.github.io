'use strict';

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// testimonials modal (optional)
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  if (!modalContainer || !overlay) return;
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

if (testimonialsItem.length && modalImg && modalTitle && modalText) {
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    });
  }
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// custom select + filter
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const isAllFilter = function (value) {
  return value === "all" || value === "全部";
}

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (isAllFilter(selectedValue) || selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    if (select) elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

if (filterBtn.length) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}

// contact form
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (!form || !formBtn) return;
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const target = this.innerText.trim().toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      if (target === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
      }
    }

    for (let j = 0; j < navigationLinks.length; j++) {
      if (j !== i) navigationLinks[j].classList.remove("active");
    }
  });
}

// resume preview / print
const resumeModal = document.querySelector("[data-resume-modal]");
const resumePreviewBtns = document.querySelectorAll("[data-resume-preview]");
const resumePrintBtns = document.querySelectorAll("[data-resume-print]");
const resumeCloseEls = document.querySelectorAll("[data-resume-close]");
const resumeLanguageBtns = document.querySelectorAll("[data-resume-language]");
const resumeFrame = document.querySelector("[data-resume-frame]");

const resumeVariants = {
  zh: {
    src: "./resume.html",
    frameTitle: "中文简历预览",
    documentTitle: "徐尚_个人简历"
  },
  en: {
    src: "./resume-en.html",
    frameTitle: "English resume preview",
    documentTitle: "Shang_Xu_Resume"
  }
};

let activeResumeLanguage = "zh";

const setResumeLanguage = function (language) {
  const variant = resumeVariants[language];
  if (!variant) return;

  activeResumeLanguage = language;
  if (resumeFrame && resumeFrame.getAttribute("src") !== variant.src) {
    resumeFrame.setAttribute("src", variant.src);
    resumeFrame.setAttribute("title", variant.frameTitle);
  }

  for (let i = 0; i < resumeLanguageBtns.length; i++) {
    const isActive = resumeLanguageBtns[i].dataset.resumeLanguage === language;
    resumeLanguageBtns[i].classList.toggle("active", isActive);
    resumeLanguageBtns[i].setAttribute("aria-pressed", String(isActive));
  }
}

const openResumeModal = function () {
  if (!resumeModal) return;
  resumeModal.hidden = false;
  document.body.style.overflow = "hidden";
}

const closeResumeModal = function () {
  if (!resumeModal) return;
  resumeModal.hidden = true;
  document.body.style.overflow = "";
}

const printResume = function () {
  const variant = resumeVariants[activeResumeLanguage];
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  iframe.src = variant.src;
  document.body.appendChild(iframe);

  iframe.onload = function () {
    try {
      const style = iframe.contentDocument && iframe.contentDocument.createElement("style");
      if (style && iframe.contentDocument) {
        style.textContent = "* { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }";
        iframe.contentDocument.head.appendChild(style);
        iframe.contentDocument.title = variant.documentTitle;
      }
    } catch (e) {}

    const originalTitle = document.title;
    document.title = variant.documentTitle;
    if (iframe.contentWindow) iframe.contentWindow.print();

    setTimeout(function () { document.title = originalTitle; }, 500);
    setTimeout(function () {
      if (iframe.parentNode) document.body.removeChild(iframe);
    }, 10000);
  };
}

for (let i = 0; i < resumePreviewBtns.length; i++) {
  resumePreviewBtns[i].addEventListener("click", openResumeModal);
}

for (let i = 0; i < resumePrintBtns.length; i++) {
  resumePrintBtns[i].addEventListener("click", printResume);
}

for (let i = 0; i < resumeLanguageBtns.length; i++) {
  resumeLanguageBtns[i].addEventListener("click", function () {
    setResumeLanguage(this.dataset.resumeLanguage);
  });
}

for (let i = 0; i < resumeCloseEls.length; i++) {
  resumeCloseEls[i].addEventListener("click", closeResumeModal);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeResumeModal();
    closeGalleryLightbox();
  }
  if (galleryLightbox && !galleryLightbox.hidden) {
    if (e.key === "ArrowLeft") showGalleryAt(galleryIndex - 1);
    if (e.key === "ArrowRight") showGalleryAt(galleryIndex + 1);
  }
});

// research gallery lightbox
const galleryItems = document.querySelectorAll("[data-gallery-item]");
const galleryLightbox = document.querySelector("[data-gallery-lightbox]");
const galleryImage = document.querySelector("[data-gallery-image]");
const galleryCaption = document.querySelector("[data-gallery-caption]");
const galleryCloseEls = document.querySelectorAll("[data-gallery-close]");
const galleryPrevBtn = document.querySelector("[data-gallery-prev]");
const galleryNextBtn = document.querySelector("[data-gallery-next]");
let galleryIndex = 0;

const showGalleryAt = function (index) {
  if (!galleryItems.length || !galleryLightbox || !galleryImage) return;
  galleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[galleryIndex];
  galleryImage.src = item.getAttribute("data-full");
  galleryImage.alt = item.querySelector("img") ? item.querySelector("img").alt : "";
  if (galleryCaption) galleryCaption.textContent = item.getAttribute("data-caption") || "";
}

const openGalleryLightbox = function (index) {
  showGalleryAt(index);
  galleryLightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

const closeGalleryLightbox = function () {
  if (!galleryLightbox) return;
  galleryLightbox.hidden = true;
  if (!document.querySelector("[data-resume-modal]:not([hidden])")) {
    document.body.style.overflow = "";
  }
  if (galleryImage) galleryImage.src = "";
}

for (let i = 0; i < galleryItems.length; i++) {
  galleryItems[i].addEventListener("click", function () {
    openGalleryLightbox(i);
  });
}

for (let i = 0; i < galleryCloseEls.length; i++) {
  galleryCloseEls[i].addEventListener("click", closeGalleryLightbox);
}

if (galleryPrevBtn) {
  galleryPrevBtn.addEventListener("click", function () {
    showGalleryAt(galleryIndex - 1);
  });
}

if (galleryNextBtn) {
  galleryNextBtn.addEventListener("click", function () {
    showGalleryAt(galleryIndex + 1);
  });
}

// GitHub PR live status
const PR_CACHE_KEY = "github_pr_states_cache_v3";
const PR_CACHE_EXPIRY = 60 * 60 * 1000;
const PR_FETCH_TIMEOUT = 8000;
const PR_MAX_CONCURRENCY = 3;

const prStatusLabel = {
  merged: "Merged",
  open: "Open",
  closed: "Closed"
};

const readPrCache = function () {
  try {
    const raw = localStorage.getItem(PR_CACHE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || typeof data.timestamp !== "number" || typeof data.states !== "object") return null;
    return data;
  } catch (e) {
    return null;
  }
};

const writePrCache = function (data) {
  try {
    localStorage.setItem(PR_CACHE_KEY, JSON.stringify(data));
  } catch (e) {}
};

const setPrStatus = function (el, status) {
  if (!el || !status) return;
  el.textContent = prStatusLabel[status] || status;
  el.classList.remove("is-loading", "is-merged", "is-open", "is-closed");
  el.classList.add("is-" + status);
};

const fetchPrStatus = async function (repo, number) {
  const controller = new AbortController();
  const timer = setTimeout(function () { controller.abort(); }, PR_FETCH_TIMEOUT);

  try {
    const res = await fetch("https://api.github.com/repos/" + repo + "/pulls/" + number, {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal
    });

    if (res.status === 404) return "closed";
    if (res.status === 403 || res.status === 429) throw new Error("rate-limit");
    if (!res.ok) throw new Error("HTTP " + res.status);

    const pr = await res.json();
    if (pr.merged) return "merged";
    if (pr.state === "closed") return "closed";
    return "open";
  } finally {
    clearTimeout(timer);
  }
};

const runWithConcurrency = async function (tasks, limit) {
  let next = 0;
  const workers = [];

  for (let i = 0; i < Math.min(limit, tasks.length); i++) {
    workers.push((async function () {
      while (next < tasks.length) {
        const index = next++;
        await tasks[index]();
      }
    })());
  }

  await Promise.all(workers);
};

const syncPrStatuses = async function () {
  const items = Array.from(document.querySelectorAll("[data-pr-status][data-pr-repo][data-pr-number]"));
  if (!items.length) return;

  // clear stale caches from older logic and status snapshots
  try {
    localStorage.removeItem("github_pr_states_cache_v1");
    localStorage.removeItem("github_pr_states_cache_v2");
  } catch (e) {}

  const cached = readPrCache();
  const cacheValid = cached && (Date.now() - cached.timestamp < PR_CACHE_EXPIRY);
  const states = cached && cached.states ? Object.assign({}, cached.states) : {};

  const missing = items.filter(function (item) {
    const key = item.dataset.prRepo + "/" + item.dataset.prNumber;
    return !states[key];
  });

  if (cacheValid && missing.length === 0) {
    items.forEach(function (item) {
      const key = item.dataset.prRepo + "/" + item.dataset.prNumber;
      setPrStatus(item, states[key]);
    });
    return;
  }

  // show cached ones immediately, fetch the rest
  items.forEach(function (item) {
    const key = item.dataset.prRepo + "/" + item.dataset.prNumber;
    if (states[key]) setPrStatus(item, states[key]);
  });

  const targets = missing.length ? missing : items;
  let changed = false;

  const tasks = targets.map(function (item) {
    return async function () {
      const repo = item.dataset.prRepo;
      const number = item.dataset.prNumber;
      const key = repo + "/" + number;
      const statusEl = item;

      try {
        const status = await fetchPrStatus(repo, number);
        states[key] = status;
        changed = true;
        setPrStatus(statusEl, status);
      } catch (e) {
        if (states[key]) {
          setPrStatus(statusEl, states[key]);
        } else if (statusEl) {
          statusEl.textContent = "未知";
          statusEl.classList.remove("is-loading");
        }
      }
    };
  });

  await runWithConcurrency(tasks, PR_MAX_CONCURRENCY);

  if (changed && Object.keys(states).length) {
    writePrCache({ timestamp: Date.now(), states: states });
  }
};

syncPrStatuses();

// copy email / phone
const copyToast = document.querySelector("[data-copy-toast]");
let copyToastTimer = null;

const showCopyToast = function (message, x, y) {
  if (!copyToast) return;

  const posX = typeof x === "number" ? x : window.innerWidth / 2;
  const posY = typeof y === "number" ? y : window.innerHeight / 2;

  copyToast.textContent = message;
  copyToast.hidden = false;
  copyToast.style.left = posX + "px";
  copyToast.style.top = posY + "px";

  // keep toast inside viewport
  const rect = copyToast.getBoundingClientRect();
  let adjustedX = posX;
  let adjustedY = posY;

  if (rect.left < 8) adjustedX += 8 - rect.left;
  if (rect.right > window.innerWidth - 8) adjustedX -= rect.right - (window.innerWidth - 8);
  if (rect.top < 8) adjustedY += 8 - rect.top;

  copyToast.style.left = adjustedX + "px";
  copyToast.style.top = adjustedY + "px";

  if (copyToastTimer) clearTimeout(copyToastTimer);
  copyToastTimer = setTimeout(function () {
    copyToast.hidden = true;
  }, 1600);
};

const copyText = async function (text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
};

const handleCopyContact = async function (item, x, y) {
  const text = item.getAttribute("data-copy");
  const label = item.getAttribute("data-copy-label") || "内容";
  if (!text) return;

  try {
    await copyText(text);
    showCopyToast("已复制" + label, x, y);
  } catch (e) {
    showCopyToast("复制失败", x, y);
  }
};

document.querySelectorAll(".contact-copy").forEach(function (item) {
  item.addEventListener("click", function (e) {
    handleCopyContact(item, e.clientX, e.clientY);
  });

  item.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const rect = item.getBoundingClientRect();
      handleCopyContact(item, rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  });
});
