# 🌱 Elevora — Empowering Lives, Inspiring Change

**A Community-Driven Social Development & Event Management Platform**

Elevora is a community-driven platform designed to bring people together through meaningful social initiatives. It enables individuals to discover upcoming community events, participate in social activities, and organize initiatives that create positive change in society.

From winter clothing distributions to environmental cleanups, plantation drives, and educational support programs, Elevora makes community participation easier and more accessible.

---

## 🌐 Live Application

- **Frontend:** [elevora_fronend](https://elevora-frontend-psi.vercel.app/)
- **Backend API:** [elevora_backend](https://elevora-backend.vercel.app/)

---

## ✨ Key Features

- **User Authentication:** Secure email and password authentication with Google social login using Better Auth.
- **Discover Upcoming Events:** Explore community events dynamically retrieved from MongoDB.
- **Event Details:** View comprehensive event information before deciding to participate.
- **Create Events:** Authenticated users can organize social development events by providing event details, dates, locations, and images.
- **Join Events:** Registered users can join events, with participation records stored in the database.
- **Joined Events:** View and track only the events you have personally joined, organized by event date.
- **Manage Events:** Update or delete events you have personally created.
- **Protected Routes:** Private pages and API operations are protected through authentication and JWT validation.
- **Responsive Interface:** Enjoy a consistent experience across mobile, tablet, and desktop devices.
- **Light & Dark Mode:** Switch between light and dark themes throughout the application.
- **Loading Experience:** Loading indicators and skeleton interfaces improve the overall user experience.
- **Newsletter Section:** A dedicated section for visitors interested in community updates.

---

## 🛠️ Technology Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Lucide React

### Authentication & Security
- Better Auth
- MongoDB Adapter
- JSON Web Token (JWT)
- Protected API routes

### Backend
- Node.js
- Express.js
- MongoDB

### Deployment
- Vercel — Frontend & Backend

---

## 📸 Platform Highlights

| Section | Description |
|---|---|
| Home | Introduction, banner, features, recent upcoming events, gallery, and newsletter |
| Upcoming Events | Browse all available future events |
| Event Details | Explore event information and join initiatives |
| Create Event | Create new community events |
| Joined Events | Track your joined initiatives |
| Manage Events | Update and delete your own events |
| Authentication | Login and registration |
| Profile | User profile and account information |

---

## 🔐 Authentication & Authorization

Elevora uses Better Auth for authentication and JWT-based validation for securing backend API requests.

- Users can register using their name, email, profile photo URL, and password.
- Users can log in using email/password or Google authentication.
- Private pages require an authenticated session.
- JWT tokens are validated on protected backend endpoints.
- Users can only manage events created using their own account.
- Event participation is associated with the authenticated user's identity.

---

## ⚙️ Getting Started

Follow these steps to run Elevora locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB database
- Git

### 1. Clone the Repositories

**Frontend:**

```bash
git clone YOUR_CLIENT_REPOSITORY_URL
cd your-client-folder
npm install
```

**Backend:**

```bash
git clone YOUR_SERVER_REPOSITORY_URL
cd your-server-folder
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the frontend project and configure the required environment variables:

```env
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=YOUR_FRONTEND_URL

MONGODB_URL=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_API_URL=YOUR_BACKEND_API_URL
```

Create a `.env` file in the backend project:

```env
PORT=YOUR_PORT
CLIENT_URL=YOUR_FRONTEND_URL
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
```

Configure the remaining Better Auth and authentication-related environment variables according to your project setup.

**Important:** Never expose secret keys, database credentials, or private authentication keys in your public repository.

### 3. Run the Backend

```bash
nodemon index.js
```

### 4. Run the Frontend

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📁 Project Repositories

| Repository | Link |
|---|---|
| Client Repository | [Frontend GitHub Repository](https://github.com/FarhanTips/Elevora-social-development-platform/tree/main/elevora-frontend) |
| Server Repository | [Backend GitHub Repository](https://github.com/FarhanTips/Elevora-social-development-platform/tree/main/elevora-backend) |

---

## 🎯 Project Objectives

Elevora aims to:

- Encourage people to participate in community development.
- Make social service initiatives easier to discover and organize.
- Connect volunteers with meaningful opportunities.
- Promote collaboration through community-driven activities.
- Support positive and sustainable social change.

---

## 💚 Our Vision

We believe that meaningful change begins with small actions and collective efforts.

Through Elevora, we aim to empower individuals, strengthen communities, and inspire people to make a difference.

**Empowering Lives, Inspiring Change.**

---

## 👨‍💻 Developer

Developed with ❤️ and dedication to community development.

**Project Name:** Elevora  
**Category:** Social Development & Event Management Platform  
**Built With:** Next.js, React, TypeScript, Express.js, MongoDB & Better Auth
