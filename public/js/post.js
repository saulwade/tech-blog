document.addEventListener('DOMContentLoaded', () => {
    const addCommentForm = document.querySelector('.add-comment-form');
  
    if (addCommentForm) {
      addCommentForm.addEventListener('submit', async event => {
        event.preventDefault();
  
        const content = document.querySelector('#comment-content').value.trim();
        const postId = window.location.toString().split('/')[
          window.location.toString().split('/').length - 1
        ];
  
        if (content) {
          const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ postId, content }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            document.location.reload();
          } else {
            alert('Failed to add comment');
          }
        }
      });
    }
  });
  