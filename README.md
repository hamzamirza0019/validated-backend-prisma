# validated-backend-prisma
# Prisma + Zod Backend Project

## 📌 Overview

This project is a structured backend application built using **Node.js, Express, Prisma (MongoDB), and Zod**.
The goal of this project was to learn and implement:

* Prisma ORM (with MongoDB)
* Schema-based validation using Zod
* Clean backend architecture (services, controllers, routes)
* Global error handling and validation middleware

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* Prisma ORM (MongoDB)
* Zod (Validation)
* JavaScript (ES Modules)

---

## 🏗️ Project Structure

```
src/
├── config/          # Database connection
├── controllers/     # Request handling
├── services/        # Business logic (Prisma)
├── routes/          # API routes
├── middlewares/     # Validation + error handling
├── validation/      # Zod schemas
├── utility/         # ApiError, ApiResponse, asyncHandler
├── app.js
```

---

## 🚀 Features

* ✅ User creation
* ✅ Create posts with user relation
* ✅ Fetch post by slug
* ✅ Fetch user with posts
* ✅ Search & pagination
* ✅ Zod validation (body, params, query)
* ✅ Global error handling
* ✅ 404 route handling

---

## 🔗 API Endpoints

### 👤 Users

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| POST   | /api/v1/users     | Create user         |
| GET    | /api/v1/users/:id | Get user with posts |

---

### 📝 Posts

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | /api/v1/posts       | Create post             |
| GET    | /api/v1/posts       | Get posts (search/page) |
| GET    | /api/v1/posts/:slug | Get post by slug        |

---

## 🔍 Example Requests

### Create User

```json
POST /api/v1/users

{
  "email": "test@example.com",
  "name": "Hamza",
  "password": "123456"
}
```

---

### Create Post

```json
POST /api/v1/posts

{
  "title": "My First Post",
  "slug": "my-first-post",
  "body": "This is content",
  "authorId": "validObjectIdHere"
}
```

---

### Get Posts with Search

```
GET /api/v1/posts?search=post&page=1
```

---

## 🧠 Key Learnings

* Separation of concerns (controller vs service)
* Prisma relations using `connect`
* Input validation using Zod
* Middleware-based request validation
* Centralized error handling
* Clean API response structure

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

Make sure to add your `.env` file:

```
DATABASE_URL=your_mongodb_url
```

---

## 📌 Future Improvements

* Authentication (JWT)
* Password hashing (bcrypt)
* Role-based access control
* Deployment

---

## 🙌 Author

Hamza Mirza

