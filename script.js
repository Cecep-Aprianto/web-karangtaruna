// Toggle Navbar Mobile
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Tutup menu setelah klik link
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("active"));
});

// Load Programs dari JSON
fetch("data/programs.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("programs-list");
    data.forEach(program => {
      let images = program.images.map(img => `<img src="${img}" alt="${program.title}">`).join("");
      container.innerHTML += `
        <div class="program-card">
          <div class="program-images">${images}</div>
          <div class="program-info">
            <h3>${program.title}</h3>
            <p>${program.description}</p>
          </div>
        </div>
      `;
    });
  });

// Load Team dari JSON
fetch("data/team.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("team-list");
    data.forEach(member => {
      container.innerHTML += `
        <div class="team-card">
          <div class="team-avatar"><img src="${member.photo}" alt="${member.name}"></div>
          <h3>${member.name}</h3>
          <p>${member.role}</p>
        </div>
      `;
    });
  });