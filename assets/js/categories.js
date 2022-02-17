---
---

const categories = { {% for category in site.categories %}{% capture category_name %}{{ category | first }}{% endcapture %}{{ category_name }}: [{% for detail in site.categories[category_name] %}{ url: `{{ site.baseurl }}{{ detail.url }}`, date: `{{detail.date | date_to_string}}`, title: `{{detail.title}}`},{% endfor %}],{% endfor %} }

window.onload = function () {
  console.log(categories);
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const details = categories[e.target.innerText];
      let html = ``
      details.forEach(detail=>{
        html += `
        <a class="modal-article" href="${detail.url}">
          <h4>${detail.title}</h4>
          <small class="modal-article-date">${detail.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};