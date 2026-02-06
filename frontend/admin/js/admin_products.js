function loadProducts() {
  fetch('/admin/products')
    .then(res => res.json())
    .then(products => {
      const div = document.getElementById('content');

      div.innerHTML = `
        <h2>Products</h2>
        <form id="addProductForm">
          <input placeholder="Name" required>
          <input type="number" placeholder="Price" required>
          <input type="number" placeholder="Stock" required>
          <button>Add</button>
        </form>
      `;

      products.forEach(p => {
        div.innerHTML += `
          <div class="box">
            <b>${p.name}</b> - ₹${p.price} (Stock: ${p.stock})
            <button onclick="deleteProduct(${p.id})">Delete</button>
          </div>
        `;
      });

      document.getElementById('addProductForm').addEventListener('submit', e => {
        e.preventDefault();
        const inputs = e.target.querySelectorAll('input');

        fetch('/admin/product', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: inputs[0].value,
            price: inputs[1].value,
            stock: inputs[2].value
          })
        }).then(() => loadProducts());
      });
    });
}

function deleteProduct(id) {
  fetch(`/admin/product/${id}`, { method: 'DELETE' })
    .then(() => loadProducts());
}
