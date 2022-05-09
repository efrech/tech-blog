const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-content"]').value;

 const response = await fetch(`/api/posts/${postId}`, {
       // Create the functionality to help create the buttons for your website.
       method: 'PUT',
       body: JSON.stringify({ title, content }),
       headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update post');
  }
};

const deleteClickHandler = async function() {
  const response = await fetch(`/api/posts/${postId}`, {
    // Create the functionality to help create the buttons for your website.
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
  document.location.replace('/dashboard');
  } else {
  alert('Failed to delete post');
  }
};

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
