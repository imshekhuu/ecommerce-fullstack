function loadOrders() {
  fetch('/admin/orders')
    .then(res => res.json())
    .then(orders => {
      const div = document.getElementById('content');
      div.innerHTML = '<h2>Orders</h2>';

      orders.forEach(o => {
        div.innerHTML += `
          <div class="box">
            <p>Order #${o.id}</p>
            <p>Total: ₹${o.total_amount}</p>
            <p>Status:
              <select onchange="updateStatus(${o.id}, this.value)">
                <option ${o.status==='Placed'?'selected':''}>Placed</option>
                <option ${o.status==='Shipped'?'selected':''}>Shipped</option>
                <option ${o.status==='Delivered'?'selected':''}>Delivered</option>
              </select>
            </p>
          </div>
        `;
      });
    });
}

function updateStatus(orderId, status) {
  fetch('/admin/order/status', {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ order_id: orderId, status })
  });
}
