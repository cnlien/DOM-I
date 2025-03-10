const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM</br>Is</br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 <br> Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Navigation
let navItems = document.querySelectorAll('a');
navItems[0].innerHTML = siteContent['nav']['nav-item-1'];
navItems[1].innerHTML = siteContent['nav']['nav-item-2'];
navItems[2].innerHTML = siteContent['nav']['nav-item-3'];
navItems[3].innerHTML = siteContent['nav']['nav-item-4'];
navItems[4].innerHTML = siteContent['nav']['nav-item-5'];
navItems[5].innerHTML = siteContent['nav']['nav-item-6'];

// CTA Section
let ctaHeader = document.querySelector('h1');
ctaHeader.innerHTML = siteContent['cta']['h1']
let ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent['cta']['button']
let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"])

// Main Content Headers
let contentHeaders = document.querySelectorAll('h4');
contentHeaders[0].innerHTML = siteContent['main-content']['features-h4'];
contentHeaders[1].innerHTML = siteContent['main-content']['about-h4'];
contentHeaders[2].innerHTML = siteContent['main-content']['services-h4'];
contentHeaders[3].innerHTML = siteContent['main-content']['product-h4'];
contentHeaders[4].innerHTML = siteContent['main-content']['vision-h4'];

// Main Content
let mainContent = document.querySelectorAll('p');
mainContent[0].innerHTML = siteContent['main-content']['features-content'];
mainContent[1].innerHTML = siteContent['main-content']['about-content'];
mainContent[2].innerHTML = siteContent['main-content']['services-content'];
mainContent[3].innerHTML = siteContent['main-content']['product-content'];
mainContent[4].innerHTML = siteContent['main-content']['vision-content'];

/// Main Content Images
let mainContentImg = document.getElementById("middle-img");
mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Contact Section
let contactSection = document.querySelectorAll('.contact p');
contentHeaders[5].innerHTML = siteContent['contact']['contact-h4'];
contactSection[0].innerHTML = siteContent['contact']['address'];
contactSection[1].innerHTML = siteContent['contact']['phone'];
contactSection[2].innerHTML = siteContent['contact']['email'];

// Footer Section
let footerContent = document.querySelectorAll('footer p');
footerContent[0].innerHTML = siteContent['footer']['copyright'];

// Task 3:
navItems.forEach((element) => {
  element.style.color = "green";
});

let newNavItem = document.createElement('a');
let newNavItemTwo = document.createElement('a');

newNavItem.innerHTML = 'Item One';
newNavItemTwo.innerHTML = 'Item Two';

document.querySelector('nav').appendChild(newNavItem);
document.querySelector('nav').prepend(newNavItemTwo);

contentHeaders.forEach((element) => {
  element.style.fontSize = '2rem';
  element.style.textAlign = 'center';
});
