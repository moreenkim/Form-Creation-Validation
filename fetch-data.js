async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);

    const users = await response.json();
    console.log('User Data:', users);

  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);

  }
}
