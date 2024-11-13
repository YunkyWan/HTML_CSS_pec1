document.addEventListener("DOMContentLoaded",()=>{let e=window.location.pathname.split("/").pop();document.querySelectorAll(".p-navigation__link").forEach(t=>{let n=t.getAttribute("href");n&&(n.split("/").pop()===e?t.parentElement.classList.add("is-selected"):t.parentElement.classList.remove("is-selected"))})});
//# sourceMappingURL=index.335efd24.js.map
