const requestURL = 'http://127.0.0.1:5500/json-load/cards-data.json';
const main = document.querySelector('main')

fetch(requestURL)
  .then(response => response.json())
  .then(loadedData => {
    loadedData.forEach(object => {
      const card = document.createElement('section');
      card.classList.add('card');

      const image = document.createElement('img');
      image.setAttribute('src', object.imageSRC);

      const heading = document.createElement('h2');
      const headingText = document.createTextNode(object.heading);
      heading.appendChild(headingText);

      const excerpt = document.createElement('p');
      const excerptText = document.createTextNode(object.excerpt);
      excerpt.appendChild(excerptText);

      const link = document.createElement('a');
      const linkText = document.createTextNode(object.linkText);
      link.setAttribute('href', object.linkURL);
      link.appendChild(linkText);

      card.appendChild(image);
      card.appendChild(heading);
      card.appendChild(excerpt);
      card.appendChild(link);

      main.appendChild(card);

      for (value in object) {
        // card.textContent += (object[value]);
        // console.log(object[value]);
      }
    });
  });