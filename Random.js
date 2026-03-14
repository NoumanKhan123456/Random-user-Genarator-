async function getUser() {

    try {

        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();

        const user = data.results[0];

        document.getElementById("user").innerHTML = `
      <img src="${user.picture.large}" />
      <h3>${user.name.first} ${user.name.last}</h3>
      <p>${user.email}</p>
      <h3>${user.location.city}<h3>
    `;

    } catch (error) {

        console.log("Error:", error);

    }

}