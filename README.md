# Hiralent — Hiring & Job Platform

Hiralent is a **hiring and job listing platform** built to explore modern UI architecture, authentication flows, and real-world dashboard experiences using **Next.js & TypeScript**.

The project is supported by a TypeScript-based backend to enable realistic data flows, role-based access, and scalable API patterns, while keeping the **frontend experience as the primary focus**.

---

## 🚀 Project Overview

Hiralent enables:

- 🧑‍💻 Candidates to create profiles and apply for jobs
- 👨‍💼 Recruiters to manage listings and review applicants
- 🔐 Secure role-based authentication and protected routes
- 📊 Dashboard-driven UI similar to real hiring platforms

The project follows **industry best practices**, clean separation of concerns, and a production-grade folder structure.

---

## 🧱 Tech Stack

### Frontend (Primary Focus)
- **Next.js** (App Router)
- **React + TypeScript**
- **Tailwind CSS**
- Framer Motion
- Lucide Icons

### Backend (Supporting Role)
- **Node.js + Express**
- **TypeScript**
- **Prisma ORM**
- PostgreSQL
- MongoDB
- JWT Authentication

### Tooling
- ESLint & Prettier
- Zod (validation)
- Environment-based configuration

---

## 📁 Project Structure

```text
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
│   │   └── lib/                # DB & external services
│   └── package.json
│
├── frontend/
│   ├── app/                    # Next.js App Router
│   ├── components/             # Reusable UI components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # API clients & utilities
│   ├── public/                 # Static assets
│   ├── styles/                 # Global styles
│   └── package.json
│
└── README.md
```

## ⚙️ Local Development

### Backend

```bash
cd backend
npm install
npm run dev
```

Environment variables:
```env
PORT=3001
DATABASE_URL=postgresql://...
MONGO_URI=mongodb://...
JWT_SECRET=yourSuperSecretKey
FRONTEND_URL=http://localhost:3000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
```text
http://localhost:3000
```

## 🔐 Authentication & Roles

The application uses role-based authentication to simulate real hiring platforms.

**Supported roles:**
- `candidate`
- `company_admin`
- `agency_admin`
- `superadmin`

### Highlights
- JWT-based authentication
- Automatic profile creation on signup
- Protected routes using middleware
- Role-based dashboards

---

## 🗄️ Data Layer Overview

### PostgreSQL (Prisma)
Used for structured application data:
- Users
- Profiles
- Jobs
- Applications
- Recruiter entities

### MongoDB
Used for:
- File metadata
- Experimental analytics
- Logs

---

## 📌 Current Features

- ✅ Candidate & recruiter dashboards
- ✅ Authentication & session handling
- ✅ Role-based UI rendering
- ✅ Job listing & application flows
- 🚧 Ongoing UI and API refinement

---

## 🧠 Future Enhancements

- Advanced dashboard insights
- Resume parsing experiments
- Smarter job discovery UI
- Recruiter analytics views

These enhancements are planned as learning and experimentation goals, not production commitments.

---

## 👨‍💻 Author

**Azlan Baig**  
Frontend Developer  
React • Next.js • TypeScript

---

## 📄 License

This repository is public for learning and portfolio demonstration purposes.  
Commercial use or redistribution is not permitted without explicit permission.