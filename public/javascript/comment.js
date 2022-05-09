const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const content = document.querySelector('textarea[name="comment-content"]').value;
  
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ post_id: postId, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/posts/${postId}`);
    } else {
      alert('Failed to create comment');
    }
};
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);