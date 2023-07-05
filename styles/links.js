// links.js

const baseURL = "https://timlex.github.io/wdd230/";
const linksURL = "https://timlex.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const activityLinks = document.getElementById("activity-links");

  weeks.forEach((week) => {
    const weekItem = document.createElement("li");
    const weekLink = document.createElement("a");
    weekLink.href = "#";
    weekLink.textContent = week.week + ":";
    weekItem.appendChild(weekLink);

    const links = week.links;
    const linksList = document.createElement("ul");

    links.forEach((link) => {
      const linkItem = document.createElement("li");
      const linkAnchor = document.createElement("a");
      linkAnchor.href = baseURL + link.url;
      linkAnchor.textContent = link.title;
      linkItem.appendChild(linkAnchor);
      linksList.appendChild(linkItem);
    });

    weekItem.appendChild(linksList);
    activityLinks.appendChild(weekItem);
  });
}

getLinks();