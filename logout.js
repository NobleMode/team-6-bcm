function logout() {
    localStorage.removeItem('authToken');
    window.location.href = 'logout.html'; 
}
document.getElementById('logoutButton').addEventListener('click', logout);