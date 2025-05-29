# 🔐 Next.js Auth App

A secure, full-featured authentication system built using **Next.js**, **React**, and **NextAuth**. This project supports **role-based access**, **2FA**, and multiple sign-in providers, with a production-ready database powered by **Prisma ORM** and **PostgreSQL on NeonDB**.

---

## 🚀 Features

- **Authentication with NextAuth**
  - Email/password login & registration
  - Social logins with **Google** and **GitHub**
- **User Account Management**
  - Email verification
  - Forgot password and reset flow
  - Change password and name via settings
  - Logout and session management
- **Security**
  - **Two-Factor Authentication (2FA)** with TOTP
  - **Role-Based Access Control**: Admin & User roles
- **Database**
  - **PostgreSQL** hosted on **NeonDB**
  - Managed using **Prisma ORM**
- **Tech Stack**
  - Framework: **Next.js**
  - Library: **React.js**
  - Authentication: **NextAuth.js**
  - ORM: **Prisma**
  - DB: **PostgreSQL**
  - Hosting-ready and scalable

---

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 18.x
- PostgreSQL (use [NeonDB](https://neon.tech))
- Git

### Installation

```bash
git clone https://github.com/Abdullah021Siraj/nextAuth.git
cd nextAuth
npm install
````

### Configure Environment

Create a `.env` file at the root of your project and add:

```env
DATABASE_URL=your_neondb_postgres_url
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

email='your-email'
email_pass='your-pass'

```

### Run the App

```bash
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

---

## 🧪 Testing

* Create a new user account using email/password
* Verify email from the received link
* Try login/logout, forgot/reset password flows
* Enable and test **2FA**
* Test **Admin** vs **User** access control

---

## 🧱 Folder Structure (Overview)

```
nextAuth/
├── .gitattributes
├── .gitignore
├── actions/
│   ├── account.js
│   ├── admin.js
│   ├── email.js
│   ├── login.js
│   ├── logout.js
│   ├── new-password.js
│   ├── new-verification.js
│   ├── register.js
│   ├── reset.js
│   └── settings.js
├── components.json
├── data/
│   ├── password-reset-token.js
│   ├── two-factor-confirmation.js
│   ├── two-factor-token.js
│   ├── user.js
│   └── verification-token.js
├── hooks/
│   ├── use-current-role.js
│   └── use-current-user.js
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── prisma/
│   ├── .txt
│   ├── migrations/
│   │   ├── 20241022215655_neon/
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── public/
│   ├── next.svg
│   └── vercel.svg
├── README.md
├── src/
│   ├── app/
│   │   ├── (protected)/
│   │   │   ├── admin/
│   │   │   │   └── page.jsx
│   │   │   ├── client/
│   │   │   │   └── page.jsx
│   │   │   ├── layout.jsx
│   │   │   ├── server/
│   │   │   │   └── page.jsx
│   │   │   └── settings/
│   │   │       └── page.jsx
│   │   ├── api/
│   │   │   ├── admin/
│   │   │   │   └── route.js
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── route.js
│   │   ├── auth/
│   │   │   ├── error/
│   │   │   │   └── page.jsx
│   │   │   ├── layout.jsx
│   │   │   ├── login/
│   │   │   │   └── page.jsx
│   │   │   ├── new-password/
│   │   │   │   └── page.jsx
│   │   │   ├── new-verification/
│   │   │   │   └── page.jsx
│   │   │   ├── register/
│   │   │   │   └── page.jsx
│   │   │   └── reset/
│   │   │       └── page.jsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── auth.config.js
│   ├── auth.js
│   ├── components/
│   │   ├── auth/
│   │   │   ├── back-button.jsx
│   │   │   ├── card-wrapper.jsx
│   │   │   ├── error-card.jsx
│   │   │   ├── header.jsx
│   │   │   ├── login-button.jsx
│   │   │   ├── login-form.jsx
│   │   │   ├── logout-button.jsx
│   │   │   ├── navbar.jsx
│   │   │   ├── new-password-form.jsx
│   │   │   ├── new-password.jsx
│   │   │   ├── new-verification-form.jsx
│   │   │   ├── register-form.jsx
│   │   │   ├── reset-form.jsx
│   │   │   ├── role-gate.jsx
│   │   │   ├── social.jsx
│   │   │   └── user-button.jsx
│   │   ├── form-error.jsx
│   │   ├── form-success.jsx
│   │   ├── ui/
│   │   │   ├── avatar.jsx
│   │   │   ├── badge.jsx
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── dropdown-menu.jsx
│   │   │   ├── form.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── select.jsx
│   │   │   ├── sonner.jsx
│   │   │   └── switch.jsx
│   │   └── user-info.jsx
│   ├── lib/
│   │   ├── auth.js
│   │   ├── db.js
│   │   ├── mail.js
│   │   ├── token.js
│   │   └── utils.js
│   ├── middleware.js
│   ├── routes.js
│   └── schemas/
│       └── index.js
└── tailwind.config.js

```

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

---

## 👤 Author

* **Your Name**
* GitHub: [abdullah021siraj](https://github.com/abdullah021siraj)
* LinkedIn: [abdullah021siraj](https://linkedin.com/in/abdullah021siraj)

---

## 📬 Feedback

If you have feedback or run into issues, feel free to [open an issue](https://github.com/abdullah021siraj/nextAuth/issues).
