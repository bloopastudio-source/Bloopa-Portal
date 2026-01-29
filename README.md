# Bloopa Portal - Agency OS

A comprehensive Agency Operations System built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## Features

- **Modern Tech Stack**: Next.js 16 with App Router, TypeScript, and Tailwind CSS v4
- **Database ORM**: Prisma with PostgreSQL support
- **Agency Domain Model**: Complete schema for managing projects, tasks, users, time tracking, and more

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bloopastudio-source/Bloopa-Portal.git
cd Bloopa-Portal
```

2. Install dependencies:
```bash
npm install
```

3. Set up your database:
   - Update the `DATABASE_URL` in `.env` file with your PostgreSQL connection string
   - Run Prisma migrations:
```bash
npx prisma migrate dev
```

4. Generate Prisma Client:
```bash
npx prisma generate
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the application for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
Bloopa-Portal/
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles with Tailwind
├── prisma/              # Prisma schema and migrations
│   └── schema.prisma    # Database schema for Agency OS
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── postcss.config.mjs   # PostCSS configuration for Tailwind
└── package.json         # Project dependencies

```

## Tech Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4
- **Database ORM**: Prisma 7.3.0
- **Database**: PostgreSQL
- **Package Manager**: npm

## Database Schema

The Prisma schema includes models for:

- **Users**: User management with roles (Admin, Manager, Member, Client)
- **Projects**: Project tracking with status, budget, and timeline
- **Tasks**: Task management with priority and status tracking
- **Time Entries**: Time tracking for projects and tasks
- **Comments**: Task commenting system
- **Documents**: Project document management
- **Project Members**: Team member assignments with roles

## License

Private - Bloopa Studio