# 🛒 E-Commerce Full-Stack Web Application
**Flask • MySQL • HTML • CSS • JavaScript**

A full-stack e-commerce web application built using Flask (backend), MySQL (database), and vanilla HTML, CSS, JavaScript (frontend).  
This project demonstrates real-world backend logic, clean project structure, and proper separation of concerns.

---

## 🚀 Features

### 👤 User Features
- User registration & login (password hashing)
- Browse products
- Add products to cart
- Update / remove cart items
- Place orders
- View order history
- Track order status

### 🧑‍💼 Admin Features
- Admin login
- Add / update / delete products
- Manage product stock
- View all user orders
- Update order status (Placed → Shipped → Delivered)

---

## 🧱 Tech Stack

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript (Fetch API)

### Backend
- Python
- Flask (REST APIs)
- Flask Blueprints

### Database
- MySQL

---

## 📁 Project Structure

```
ecommerce-fullstack/
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── config.py
│   │   └── __init__.py
│   ├── database/
│   │   └── schema.sql
│   ├── run.py
│   └── requirements.txt
│
├── frontend/
│   ├── user/
│   └── admin/
│
├── screenshots/
└── README.md
```

---

## 🗄️ Database Schema

Main tables:
- users
- products
- cart
- orders
- order_items

All schemas are available in:
```
backend/database/schema.sql
```

---

## 🔌 API Endpoints (Sample)

### Auth
- POST `/login`
- POST `/register`

### Products
- GET `/products`

### Cart
- POST `/cart/add`
- GET `/cart`

### Orders
- POST `/order/place`
- GET `/orders`

### Admin
- POST `/admin/login`
- GET `/admin/products`
- POST `/admin/product`
- PUT `/admin/product/<id>`
- DELETE `/admin/product/<id>`
- GET `/admin/orders`
- PUT `/admin/order/status`

---

## ⚙️ Setup Instructions

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python run.py
```

### Database Setup
- Create MySQL database
- Import `schema.sql`
- Update DB credentials in `config.py`

### Frontend Setup
- Open HTML files directly OR
- Serve frontend via Flask static folder

---

## 📸 Screenshots

Screenshots are available in the `screenshots/` folder:
- Product listing
- Cart page
- Orders page
- Admin dashboard

---

## 🧠 Learning Outcomes

- REST API design
- Flask app structuring
- MySQL relational modeling
- Cart & order transaction logic
- Admin vs User role handling
- Frontend–Backend integration

---

## 👨‍💻 Author

**Your Name**  
GitHub: https://github.com/imshekhuu  
LinkedIn: https://linkedin.com/in/divyasinghshekhawat

---

## 📌 Note

This project is built for **learning and portfolio purposes** and follows industry-style practices suitable for interviews and real-world backend development.
