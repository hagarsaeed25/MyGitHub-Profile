document.getElementById("toggle-theme").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/dark.png";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/ligth.png";
  }
};

let userData = document.getElementById("user-date");
function getUserData() {
  fetch(`https://api.github.com/users/hagarsaeed25`)
    .then((response) => response.json())
    .then((data) => {
      userData.innerHTML = `
<div class="avatar">
<img src="${data.avatar_url}" alt="${data.name}"/>
<h1>${data.name}</h1>
<a href="${data.html_url}" target="_blank">GitHub Account</a>
</div>
<ol id="user-repos" class="user-repos"></ol>
`;
    });
  let repos = "";
  fetch(`https://api.github.com/users/hagarsaeed25/repos`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        repos += `
          <li><a class="repo" target="_blank" href=${data[i].homepage}>${data[i].name}</a></li>
        `;
      }
      document.getElementById("user-repos").innerHTML = repos;
    });
}
getUserData(userData);
