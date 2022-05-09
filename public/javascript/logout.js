const logout = async function() {
    const response = await fetch('/api/users/logout', {
       // Create the functionality to help create the buttons for your website.
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout-link').addEventListener('click', logout);
  