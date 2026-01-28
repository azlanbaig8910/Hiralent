# Hiralent — AI-Ready Hiring & Job Listing Platform

Hiralent is a modern, full-stack hiring platform designed for candidates, recruiters, and agencies. It combines a **Next.js frontend** with a **TypeScript-based Express backend**, built with scalability, clean architecture, and future AI integrations in mind.

---

## 🚀 Project Overview

Hiralent enables:

- 👨‍💼 Recruiters & agencies to manage jobs and candidates
- 🧑‍💻 Candidates to build profiles and apply for jobs
- 🔐 Secure role-based authentication
- 📈 A scalable backend ready for analytics and AI features

The project follows **industry best practices**, clean separation of concerns, and a production-grade folder structure.

---

## 🧱 Tech Stack

### Frontend
- **Next.js** (App Router)
- **React + TypeScript**
- **Tailwind CSS**
- Framer Motion
- Lucide Icons

### Backend
- **Node.js + Express**
- **TypeScript**
- **Prisma ORM**
- PostgreSQL
- MongoDB (for unstructured data)
- JWT Authentication

### Tooling & Quality
- ESLint & Prettier
- Zod (validation)
- Nodemon
- Environment-based configuration

---

## 📁 Project Structure

hiralent/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── src/
│   │   ├── app.ts              # Express app setup
│   │   ├── server.ts           # Server bootstrap
│   │   ├── controllers/        # Request handlers
│   │   ├── routes/             # API routes
│   │   ├── services/           # Business logic
│   │   ├── middlewares/        # Auth, guards, validation
│   │   ├── validation/         # Zod / schema validation
│   │   ├── types/              # Shared TypeScript types
│   │   ├── utils/              # Helpers & utilities
│   │   └── lib/                # DB, external services
│   └── package.json
│
├── frontend/
│   ├── app/                    # Next.js App Router
│   ├── components/             # Reusable UI components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # API clients, utilities
│   ├── public/                 # Static assets
│   ├── styles/                 # Global styles
│   └── package.json
│
└── README.md

---

## ⚙️ Setup Instructions

### Backend Setup

```bash
cd backend
npm install
```

Create a .env file:
```bash
PORT=3001
DATABASE_URL=postgresql://...
MONGO_URI=mongodb://...
JWT_SECRET=your_secret
FRONTEND_URL=http://localhost:3000
```

Run the backend:
```bash
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
```bash
http://localhost:3000
```

## 🔐 Authentication & Roles

Hiralent supports **role-based authentication** with the following roles:

- `candidate`
- `company_admin`
- `agency_admin`
- `superadmin`

### Key Features
- JWT-based authentication
- Auto-creation of profiles on signup
- Protected routes using middleware
- Role-restricted dashboards

---

## 🗄️ Database Architecture

### PostgreSQL (Prisma)
Used for all **core business data**:
- Users
- Candidate profiles
- Recruiter / company profiles
- Jobs
- Applications
- Agencies

### MongoDB
Used for:
- File metadata (CVs, documents)
- Future analytics & logs

---

## 🧩 Backend Architecture

### Middlewares
- Authentication guard
- Role & permission checks
- Request validation
- Global error handling
- Ownership protection

### Services Layer
All business logic lives in services:
- Authentication logic
- Profile creation
- Job management
- Application workflows

### Controllers
Controllers handle:
- Request parsing
- Service calls
- Standardized API responses

---

## 📌 Implemented Features

- ✅ JWT Authentication
- ✅ Role-based access control
- ✅ Candidate & recruiter dashboards
- ✅ Auto profile creation on signup
- ✅ Job posting & application flow
- ✅ Secure API architecture
- ✅ Modular & scalable backend design

---

## 🧠 AI-Ready Architecture

Hiralent is designed to support future AI features such as:
- Resume parsing
- Candidate scoring
- Smart job matching
- Interview analytics

The current architecture allows these features to be added **without refactoring core systems**.

---

## 🛠️ Environment Configuration Notes

- `NEXT_PUBLIC_BASE_URL` must match backend deployment
- API routes are prefixed with `/api`
- Production builds tested on **Vercel + Railway**

---

## 📌 Status

- ✅ Authentication & dashboards working
- 🛠️ API cleanup & optimization in progress
- 🧪 Advanced recruiter features coming next

---

## 👨‍💻 Author

**Azlan Baig**  
Frontend Developer  
React • Next.js • TypeScript

---

## 📄 License

This repository is public for learning and demonstration purposes. Reuse, redistribution, or commercial use is not permitted without explicit permission from the author.