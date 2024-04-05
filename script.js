console.log("Hello World!");

const myName = "Tamas Fabian";
const h1 = document.querySelector(".heading-primary");

console.log(myName);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

// set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
console.log(currentYear);

// make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scroll to other links
    if (href !== "#" && href.startsWith("#"));
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });

    // close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//////////////////////////////////////
// sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
