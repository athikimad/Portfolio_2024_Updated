const projects = [
  {
    id: 4,
    name: "MA Studio and Stationary",
    developer: "Imad Hussain",
    service: "Web Development",
    year: "2023",
    liveLink:   "http://mastudioandstationary.42web.io/",
    githubLink: "",
    technology: ["HTML5", "CSS3", "JavaScript","Bootstrap","jQuery", "PHP", "MySQL"],
    description: `
      'MA Studio and Stationary' is a powerful and versatile web-based system designed to streamline the daily operations of a stationery shop. It provides comprehensive solutions for managing various financial transactions, mobile banking services, product inventories, and detailed reporting. The platform allows for the seamless handling of mobile financial services like BKash and Nagad, product sales, and other business processes in a single, integrated environment.
    `,
    features: [
      { title: "Multi-User and Admin Management", description: "The system supports multiple admin and user accounts, each with specific permissions." },
      { title: "Agent and Cash Balance Management", description: "Admins can assign balances to BKash and Nagad agents, managing both cash and digital app balances." },
      { title: "BKash and Nagad Transaction Management", description: "Users can manage cash in, cash out, B2B send, and B2B receive transactions." },
      { title: "Advanced Transaction Reporting", description: "Admins can generate detailed reports for BKash and Nagad transactions, filtered by specific date ranges." },
      { title: "Personal BKash Management", description: "Users and admins can manage balance updates and transaction history for personal BKash accounts." },
      { title: "DSA (Direct Selling Agent) Management", description: "The system allows admins to manage DSA transactions for various operators." },
      { title: "Mobile Recharge Management", description: "Admins can add operators and track mobile recharge transactions." },
      { title: "Product Management", description: "Admins can manage inventory for stationery products." },
      { title: "Cash Balance Management", description: "Admins can manage the shop’s cash balance, with options to increase or decrease." },
      { title: "Attendance Management", description: "The system includes an attendance tracker that logs user login times." },
      { title: "Database Backup", description: "Admins can back up the entire system’s database." }
    ],
    images: [
      "assets/imgs/projects/ma_studio_and_stationary-1.jpg",
      "assets/imgs/projects/ma_studio_and_stationary-2.jpg",
      "assets/imgs/projects/ma_studio_and_stationary-3.jpg",
      "assets/imgs/projects/ma_studio_and_stationary-4.jpg"
    ]
  },
  {
    id: 3,
    name: "2nd Foundation",
developer: "Imad Hussain",
    service: "Web Development",
    year: 2020,
    liveLink: "http://2ndfoundation.liveblog365.com/",
    githubLink: "https://github.com/developerimadhussain/Web-Projects-2ndFoundation",
    technology: ["HTML5", "CSS3", "JavaScript","Bootstrap","jQuery", "PHP", "MySQL", "SSLCommerz Payment Gateway"],
    description: `
      '2nd Foundation' is a web application designed to support underprivileged children's education. It connects donors, volunteers, and educational organizations. Admins can manage organizations working for the betterment of children's education, add their details including location via latitude and longitude for map display, and approve posts from volunteers. Volunteers register and post causes, events, and news. Donors can select organizations and donate securely through the SSLCommerz payment gateway.
    `,
    features: [
      { title: "Admin Panel", description: "Admins can add and manage organizations, approve volunteer posts, and manage donations and comments." },
      { title: "Volunteer Panel", description: "Volunteers need email verification to access the panel. They can post causes, news, and events, and manage pending posts and comments." },
      { title: "Donor Role", description: "Donors can browse organizations and donate securely via SSLCommerz." },
      { title: "Map Integration", description: "Admins can add organizations with latitude and longitude to display locations on a map." },
      { title: "Gallery", description: "A gallery feature to showcase images of causes and events from the organizations." },
      { title: "Comment System", description: "Users can comment on posts, and admins or volunteers can approve the comments." },
      { title: "SSLCommerz Payment Gateway", description: "Secure payment processing for donors to support organizations." }
    ],
    images: [
      "assets/imgs/projects/2ndfoundation-1.png",
      "assets/imgs/projects/2ndfoundation-2.png",
      "assets/imgs/projects/2ndfoundation-3.png",
      "assets/imgs/projects/2ndfoundation-4.png"
    ]
  },
  {
    id: 2,
    name: "Online Food Order System",
    developer: "Imad Hussain",
    service: "Web Development",
    year: 2018,
    liveLink: "",
    githubLink: "https://github.com/developerimadhussain/Online-Food-Order",
    technology: ["HTML5", "CSS3", "JavaScript","Bootstrap", "PHP", "MySQL"],
    description: `
      The 'Online Food Order System' is a web-based platform designed to simplify the process of ordering food from restaurants. It features a user-friendly interface where users can browse food items, add them to the cart, and place orders online. The system supports three roles: Admin, Employee, and Normal User, each with specific functionalities tailored to their needs.
    `,
    features: [
      { title: "User Role Management", description: "Admin, Employee, and Normal Users have distinct roles with specific functionalities." },
      { title: "Food Item and Category Management", description: "Employees can add and manage food items and categories for display to users." },
      { title: "Order Management", description: "Normal users can place orders online, and the system tracks order statuses in real-time." },
      { title: "Admin Control Panel", description: "Admins have full control over users, food items, categories, and orders." },
      { title: "Responsive Design", description: "The system is accessible on both desktop and mobile devices." }
    ],
    images: [
      "assets/imgs/projects/foodshop-1.png",
      "assets/imgs/projects/foodshop-2.png",
      "assets/imgs/projects/foodshop-3.png"
    ]
  },
{
id: 1,
    name: "Bookshop Management system",
    developer: "Imad Hussain",
    service: "Web Development",
    year: 2018,
    liveLink: "",
    githubLink: "https://github.com/developerimadhussain/Book-Shop",
    technology: ["HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "MySQL"],
    description: `
    The 'Bookshop' Application is a web-based platform designed for online book purchases. It allows users to browse books, add them to a cart, and complete the purchase online. Admins have full control over book categories and inventory, while normal users can create accounts, search for books, and manage their shopping carts.
    `,
    features: [{
        title: "User Role Management",
        description: "There are two types of users: Admin and Normal User. Admins manage the system, while normal users browse and buy books."
    },
        {
            title: "Book Category Management",
            description: "Admins can add and manage different book categories."
        },
        {
            title: "Book Search Functionality",
            description: "Users can search for books based on titles or categories."
        },
        {
            title: "Cart System",
            description: "The system includes a session-based cart for managing user orders."
        },
        {
            title: "Order Management",
            description: "Users can add books to the cart, view order details, and complete the purchase online."
        }],
    images: [
        "assets/imgs/projects/bookshop-1.png",
        "assets/imgs/projects/bookshop-2.png",
        "assets/imgs/projects/bookshop-3.png"
    ]
},
];

// Function to get the project ID from the URL
function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10); // Get 'id' from URL and convert to an integer
  
  if (isNaN(id)) {
    console.error("Invalid project ID in the URL.");
    return null;
  }
  return id;
}

// Function to load the project data
function loadProject() {
  const projectId = getProjectIdFromUrl(); // Get the project ID from the URL
  if (!projectId) {
    console.error('Project ID is not valid!');
    showProjectNotFound();
    return;
  }

  const project = projects.find(p => p.id === projectId); // Find the project by ID
  
  if (!project) {
    console.error('Project not found!');
    showProjectNotFound();
    return;
  }

  // If project is found, hide the "Project Not Found" message and show the project details
  document.getElementById("project-details").style.display = "block"; // Show the project details
  document.getElementById("project-not-found").style.display = "none"; // Hide the "Project Not Found" message

  // Load project images
  const imageContainer = document.getElementById("project-images");
  imageContainer.innerHTML = ''; // Clear existing content
  if (project.images.length > 0) {
    project.images.forEach(image => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.innerHTML = `<img src="${image}" alt="${project.name} Image" class="img-fluid" data-aos="fade-up" data-aos-delay="102">`;
      imageContainer.appendChild(slide);
    });
  } else {
    imageContainer.innerHTML = '<p>No images available for this project.</p>';
  }

  // Load project information
  const infoList = document.getElementById("project-info-list");
  infoList.innerHTML = `
    <li data-aos="fade-up" data-aos-delay="102"><strong>Name:</strong> ${project.name}</li>
    <li data-aos="fade-up" data-aos-delay="102"><strong>Developer:</strong> ${project.developer}</li>
    <li data-aos="fade-up" data-aos-delay="102"><strong>Service:</strong> ${project.service}</li>
    <li data-aos="fade-up" data-aos-delay="102"><strong>Year:</strong> ${project.year}</li>
  `;

  // Conditionally show Live Link if available
  if (project.liveLink && project.liveLink.trim() !== "") {
    const liveLinkItem = document.createElement("li");
    liveLinkItem.innerHTML = `<strong>Live Link:</strong> <a href="${project.liveLink}" target="_blank">Live Site</a>`;
    liveLinkItem.setAttribute('data-aos', 'fade-up');
    liveLinkItem.setAttribute('data-aos-delay', '102');
    infoList.appendChild(liveLinkItem);
  }
  /*else {
    infoList.innerHTML += '<li data-aos="fade-up" data-aos-delay="102"><strong>Live Link:</strong> Not Available</li>';
  }*/

  // Conditionally show GitHub Link if available
  if (project.githubLink && project.githubLink.trim() !== "") {
    const githubLinkItem = document.createElement("li");
    githubLinkItem.innerHTML = `<strong>GitHub Link:</strong> <a href="${project.githubLink}" target="_blank">GitHub</a>`;
    githubLinkItem.setAttribute('data-aos', 'fade-up');
    githubLinkItem.setAttribute('data-aos-delay', '102');
    infoList.appendChild(githubLinkItem);
  }
  /*else {
    infoList.innerHTML += '<li data-aos="fade-up" data-aos-delay="102"><strong>GitHub Link:</strong> Not Available</li>';
  }
*/
  // Load technologies used
  const techList = document.getElementById("technology-used");
  techList.innerHTML = ''; // Clear existing content
  if (project.technology && project.technology.length > 0) {
    project.technology.forEach(tech => {
      const techItem = document.createElement("li");
      techItem.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i> ${tech}`;
      techItem.setAttribute('data-aos', 'fade-up');
      techItem.setAttribute('data-aos-delay', '102');
      techList.appendChild(techItem);
    });
  } else {
    techList.innerHTML = '<li data-aos="fade-up" data-aos-delay="102">No technologies listed.</li>';
  }

  // Load project description
  const descriptionElement = document.getElementById("project-description");
  descriptionElement.innerHTML = project.description;
  descriptionElement.setAttribute('data-aos', 'fade-up');
  descriptionElement.setAttribute('data-aos-delay', '102');

  // Load key features
  const featuresList = document.getElementById("project-features");
  featuresList.innerHTML = ''; // Clear existing content
  if (project.features && project.features.length > 0) {
    project.features.forEach(feature => {
      const featureItem = document.createElement("li");
      featureItem.innerHTML = `<strong>${feature.title}:</strong> ${feature.description}`;
      featureItem.setAttribute('data-aos', 'fade-up');
      featureItem.setAttribute('data-aos-delay', '102');
      featuresList.appendChild(featureItem);
    });
  } else {
    featuresList.innerHTML = '<li data-aos="fade-up" data-aos-delay="102">No features available for this project.</li>';
  }
}

// Function to show the "Project Not Found" message and hide project details
function showProjectNotFound() {
  document.getElementById("project-details").style.display = "none"; // Hide the project details
  document.getElementById("project-not-found").style.display = "block"; // Show the "Project Not Found" message
}

// Run the function after the DOM has loaded
document.addEventListener("DOMContentLoaded", loadProject);

