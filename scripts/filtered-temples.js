const temples = [
  {
    templeName: 'Aba Nigeria',
    location: 'Aba, Nigeria',
    dedicated: '2005, August, 7',
    area: 11500,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg'
  },
  {
    templeName: 'Manti Utah',
    location: 'Manti, Utah, United States',
    dedicated: '1888, May, 21',
    area: 74792,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg'
  },
  {
    templeName: 'Payson Utah',
    location: 'Payson, Utah, United States',
    dedicated: '2015, June, 7',
    area: 96630,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg'
  },
  {
    templeName: 'Yigo Guam',
    location: 'Yigo, Guam',
    dedicated: '2020, May, 2',
    area: 6861,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg'
  },
  {
    templeName: 'Washington D.C.',
    location: 'Kensington, Maryland, United States',
    dedicated: '1974, November, 19',
    area: 156558,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg'
  },
  {
    templeName: 'Lima Peru',
    location: 'Lima, Peru',
    dedicated: '1986, January, 10',
    area: 9600,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg'
  },
  {
    templeName: 'Mexico City Mexico',
    location: 'Mexico City, Mexico',
    dedicated: '1983, December, 2',
    area: 116642,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg'
  },
  {
    templeName: 'Tokyo Japan',
    location: 'Tokyo, Japan',
    dedicated: '1980, October, 27',
    area: 52590,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-202749-wallpaper.jpg'
  },
  {
    templeName: 'Boise Idaho',
    location: 'Boise, Idaho, United States',
    dedicated: '1984, May, 25',
    area: 35868,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/400x250/boise-temple-lds-107913-wallpaper.jpg'
  },
  {
    templeName: 'Bountiful Utah',
    location: 'Bountiful, Utah, United States',
    dedicated: '1995, January, 8',
    area: 104000,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-766347-wallpaper.jpg'
  }
];

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#site-navigation');
const cardContainer = document.querySelector('#temple-cards');
const pageTitle = document.querySelector('#page-title');
const navLinks = document.querySelectorAll('#site-navigation a');
const currentYear = document.getElementById('currentYear');
const lastModified = document.getElementById('lastModified');

const getTempleYear = (temple) => Number(temple.dedicated.split(',')[0]);

const displayTemples = (filteredTemples) => {
  if (!cardContainer) {
    return;
  }

  cardContainer.innerHTML = '';

  filteredTemples.forEach((temple) => {
    const card = document.createElement('figure');
    const name = document.createElement('h2');
    const location = document.createElement('p');
    const dedicated = document.createElement('p');
    const area = document.createElement('p');
    const image = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = 'lazy';
    image.width = 400;
    image.height = 250;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    cardContainer.appendChild(card);
  });
};

const setActiveLink = (activeFilter) => {
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.filter === activeFilter);
  });
};

const applyFilter = (filterName) => {
  let filtered = temples;
  let title = 'Home';

  if (filterName === 'old') {
    filtered = temples.filter((temple) => getTempleYear(temple) < 1900);
    title = 'Old';
  } else if (filterName === 'new') {
    filtered = temples.filter((temple) => getTempleYear(temple) > 2000);
    title = 'New';
  } else if (filterName === 'large') {
    filtered = temples.filter((temple) => temple.area > 90000);
    title = 'Large';
  } else if (filterName === 'small') {
    filtered = temples.filter((temple) => temple.area < 10000);
    title = 'Small';
  }

  if (pageTitle) {
    pageTitle.textContent = title;
  }

  setActiveLink(filterName);
  displayTemples(filtered);
};

if (menuButton && navigation) {
  const toggleMenu = () => {
    navigation.classList.toggle('open');
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.classList.toggle('open');
  };

  menuButton.addEventListener('click', toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const selectedFilter = link.dataset.filter || 'home';
      applyFilter(selectedFilter);

      if (navigation.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
  lastModified.textContent = `Last modified: ${document.lastModified}`;
}

applyFilter('home');
