const jwt = localStorage.getItem('jwt');

const response = await fetch('http://localhost:1337/users/me', {
  headers: {
    'Authorization': `Bearer ${jwt}`
  }
});

if (response.ok) {
  const data = await response.json();
  console.log(data);
}