    // Menu Items Data
    const menuItems = [
      {
          name: "Espresso",
          price: "$3.50",
          image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "Strong black coffee made by forcing steam through ground coffee beans"
      },
      {
          name: "Cappuccino",
          price: "$4.50",
          image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Espresso combined with steamed milk foam"
      },
      {
          name: "Latte Art",
          price: "$5.00",
          image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          description: "Espresso with steamed milk and beautiful latte art"
      }
  ];

  // Populate menu items
  const menuGrid = document.querySelector('.menu-grid');
  menuItems.forEach(item => {
      menuGrid.innerHTML += `
          <div class="menu-item">
              <img src="${item.image}" alt="${item.name}">
              <h3>${item.name} - ${item.price}</h3>
              <p>${item.description}</p>
          </div>
      `;
  });

  // Scroll to menu function
  function scrollToMenu() {
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  }

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });

  document.querySelectorAll('.menu-item').forEach(item => {
      observer.observe(item);
  });

  // Form submission
  document.querySelector('.contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will respond shortly.');
      e.target.reset();
  });
