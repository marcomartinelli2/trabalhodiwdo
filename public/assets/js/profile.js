document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  
  const profileDetails = document.querySelector('.profile-details');

  fetch('http://localhost:3000/users')
    .then(response => {
      console.log('Response status:', response.status);
      return response.json();
    })
    .then(users => {
      console.log('Users fetched:', users);
      const user = users[0];
      const userProfile = `
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
          <li>Login: ${user.login}</li>
          <li>Company: ${user.company ? user.company : 'N/A'}</li>
          <li>Location: ${user.location ? user.location : 'N/A'}</li>
          <li>Public Repos: ${user.public_repos}</li>
          <li>Followers: ${user.followers}</li>
          <li>Following: ${user.following}</li>
        </ul>
      `;
      profileDetails.innerHTML = userProfile;
    })
    .catch(error => console.error('Error fetching user data:', error));
});