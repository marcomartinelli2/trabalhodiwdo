document.addEventListener('DOMContentLoaded', function() {
  const repositoriesContainer = document.getElementById('repositories');

  fetch('http://localhost:3000/repositories')
    .then(response => response.json())
    .then(repositories => {
      const repoList = repositories.map(repo => `
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">${repo.name}</h5>
              <p class="card-text">${repo.description}</p>
              <a href="${repo.link}" class="btn btn-primary">Ver Repositório</a>
            </div>
          </div>
        </div>
      `).join('');
      repositoriesContainer.innerHTML = repoList;
    })
    .catch(error => console.error('Error fetching repositories data:', error));
});