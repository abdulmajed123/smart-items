### Smart Items

Smart Items is a Next.js practice project built with the App Router, MongoDB, and NextAuth.js.
The project focuses on user authentication, protected routes, and basic product management, with a clean UI and real deployment experience.

---

## 🚀 Live Demo

🔗 **Production URL:**
https://smart-items.vercel.app/

---

## 🧰 Tech Stack

- **Frontend:** Next.js 16 (App Router), React, Tailwind CSS, DaisyUI
- **Backend:** Next.js Server Actions, API Routes
- **Database:** MongoDB Atlas
- **Authentication:** NextAuth.js (Credentials & Google OAuth)
- **Deployment:** Vercel

---

## 📦 Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd smart-items
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment Variables (`.env`)

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_uri
DB_NAME=smartItemsDB

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4️⃣ Run the project locally

```bash
npm run dev
```

App will run at:
👉 `http://localhost:3000`

---

## 🗺️ Route Summary

| Route               | Type      | Description                      |
| ------------------- | --------- | -------------------------------- |
| `/`                 | Public    | Home page                        |
| `/about`            | Public    | About page                       |
| `/contact`          | Public    | Contact page                     |
| `/login`            | Public    | User login                       |
| `/register`         | Public    | User registration                |
| `/allProducts`      | Public    | View all products                |
| `/allProducts/[id]` | Dynamic   | Product details                  |
| `/addProduct`       | Protected | Add new product (Login required) |
| `/api/auth/*`       | API       | Authentication routes            |

---

## 🔐 Authentication & Authorization

- Credentials-based login (email & password)
- Google OAuth login
- Unauthorized users are redirected to `/login`

---

## ✨ Implemented Features

- ✅ User authentication (Credentials + Google)
- ✅ Secure route protection using middleware
- ✅ Product creation with MongoDB
- ✅ Product listing & details page
- ✅ Toast notification on successful product creation
- ✅ Responsive UI with Tailwind & DaisyUI
- ✅ Server Actions for database operations
- ✅ Environment-based configuration
- ✅ Deployed on Vercel

---

## 🔔 Toast Notification Feature

When a product is successfully added:

- A **toast notification** is displayed to confirm success
- Improves user experience with instant feedback
- Prevents confusion after form submission

---

## 📌 Brief Feature Explanation

- **Authentication:** Implemented using NextAuth.js for secure login and session management
- **Protected Routes:** Middleware ensures only authenticated users can access sensitive pages
- **Product Management:** Products are stored and fetched from MongoDB using server actions
- **UI & UX:** Clean, responsive design with feedback notifications
- **Deployment:** Production-ready build deployed on Vercel

---

## 👨‍💻 Author

**Abdul Majed**
Aspiring Full Stack Developer
Focused on building scalable web applications 🚀

---

⭐ If you like this project, feel free to give it a star!
