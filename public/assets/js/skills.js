document.addEventListener('DOMContentLoaded', function() {
  const skillsContainer = document.querySelector('#profile-skills-container');

  fetch('http://localhost:3000/skills')  // Certifique-se de que este caminho está correto
    .then(response => response.json())
    .then(skills => {
      const skillsContent = skills.map(skill => `
        <div class="col-md-3">
          <a href="${skill.github_url}" target="_blank">
            <img src="${skill.src}" alt="${skill.alt}" class="profile-skill-image img-fluid" />
          </a>
        </div>
      `).join('');
      skillsContainer.innerHTML = skillsContent;
    })
    .catch(error => console.error('Error fetching skills data:', error));
});