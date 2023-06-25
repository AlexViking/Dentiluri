// Loading

window.addEventListener('load', function() {
  var loadingScreen = document.querySelector('.loading-screen');
  var content = document.getElementById('content');
  
  setTimeout(function() {
    loadingScreen.style.display = 'none';
    // content.classList.add('loaded');
  }, 5000); // Adjust the delay as needed
}); 
 


// methods
 
 function createSectionDivs() {
    const folderNames = [
        {
            name: '1#Introduction',
            title: 'Introduction',
            description: 'Introduction section description',
            size: { x: '90vw', y: '90vh' },
            colorShadow: 'value'
          },
          {
            name: '2#TeamAndPlace',
            title: 'Team and Place',
            description: 'Team and Place section description',
            size: { x: '90vw', y: '90vh' },
            colorShadow: 'value'
          },
          {
            name: '3#Service',
            title: 'Service',
            description: 'This is the service section.',
            size: { x: '90vw', y: '90vh' },
            colorShadow: 'value'
          },
          {
            name: '4#Calendar',
            title: 'Calendar Appointment',
            description: 'This is the calendar appointment section.',
            size: { x: '90vw', y: '90vh' },
            colorShadow: 'value'
          },
          {
            name: '5#AppointmentInfo',
            title: 'Appointment Info',
            description: 'This is the appointment info section.',
            size: { x: '90vw', y: '90vh' },
            colorShadow: 'value'
          },
      // Add more folder objects for each section
    ];
  
    // Sort the folder names based on the order before the #
    folderNames.sort((a, b) => {
      const orderA = Number(a.name.split('#')[0]);
      const orderB = Number(b.name.split('#')[0]);
      return orderA - orderB;
    });
  
    // Create div sections based on the folder objects and append them to the main element
    const mainElement = document.querySelector('main');
    folderNames.forEach((folder, index) => {
      const sectionId = folder.name.split('#')[1];
      const sectionDiv = document.createElement('section');
      sectionDiv.setAttribute('id', sectionId);
      sectionDiv.setAttribute('class', `Dip-Shadow`);
      // Apply the size of the div based on the `size` property
      sectionDiv.style.minWidth = folder.size.x;
      sectionDiv.style.minHeight = folder.size.y;

      //background color
      // sectionDiv.style.backgroundColor = "rgb(199 211 213)";
  
      // Create and append the title (h1) element
      const titleElement = document.createElement('h1');
      titleElement.textContent = folder.title;
      titleElement.style.fontSize = '10em';
      // titleElement.style.color = "rgb(145 151 149)"
      titleElement.style.userSelect = 'none';
      titleElement.setAttribute('class', "text");
      sectionDiv.appendChild(titleElement);
  
      // Create and append the description (p) element
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = folder.description;
      sectionDiv.appendChild(descriptionElement);
  
      // Additional styling or content can be added to the sectionDiv here
      mainElement.appendChild(sectionDiv);
    });
  
    // Generate the navigation links in the header section
    const headerElement = document.querySelector('header');
    const navElement = document.createElement('nav');
    navElement.setAttribute('class', "nav");
    const ulElement = document.createElement('ul');
    folderNames.forEach((folder) => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = `#${folder.name.split('#')[1]}`;
      anchor.innerHTML = `<i class="fas ${getIconClass(folder.name)}"></i> ${folder.title}`;
      listItem.appendChild(anchor);
      ulElement.appendChild(listItem);
    });
    navElement.appendChild(ulElement);
    headerElement.appendChild(navElement);

    // Generate the sidebar navigation
  const sidebarElement = document.querySelector('.sidebar');
  sidebarElement.setAttribute('class', 'sidebar Dip-Shadow ');
  const sidebarUlElement = document.createElement('ul');
  
  folderNames.forEach((folder) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'sidebarUiElement');
    listItem.setAttribute('data-tooltip', `${folder.title}`);
    const anchor = document.createElement('a');
    anchor.href = `#${folder.name.split('#')[1]}`;
    anchor.innerHTML = `<i class="fas ${getIconClass(folder.name)}"></i><span>${folder.title}</span>`;
    listItem.appendChild(anchor);
    sidebarUlElement.appendChild(listItem);
  });
  sidebarElement.appendChild(sidebarUlElement);
  }
  
  function getIconClass(folderName) {
    const iconMappings = {
      '1#Introduction': 'fa-home',
      '2#TeamAndPlace': 'fa-users',
      '3#Service': 'fa-cogs',
      '4#Calendar': 'fa-calendar',
      '5#AppointmentInfo': 'fa-info-circle'
      // Add more mappings for additional folder names and icon classes
    };
    return iconMappings[folderName] || '';
  }
  
  // Example usage (assuming this code is running in a browser context)
  createSectionDivs();
  
  

  const links = document.querySelectorAll('header nav a');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
  
      const target = document.querySelector(link.getAttribute('href'));
      const offset = 50; // Adjust the value as needed
  
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });

  //onst sidebarLinks = document.querySelectorAll('.sidebar a');
  const sidebarLinks = document.querySelectorAll('.sidebar a');
    // sidebarLinks.forEach((link) => {
    //   link.addEventListener('click', scrollToTarget);
    // });

sidebarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    const offset = 50; // Adjust the value as needed

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});



