document.getElementById('adminLoginForm').addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  fetch('/admin/login', {
    method: 'POST',
    body: formData
  })
  .then(res => {
    if (res.ok) {
      window.location.href = 'admin_dashboard.html';
    } else {
      alert('Unauthorized');
    }
  });
});
