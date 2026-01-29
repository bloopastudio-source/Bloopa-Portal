# Bloopa Agency OS

A comprehensive Agency Operating System built with Next.js, TypeScript, Tailwind CSS, and Prisma.

![Bloopa Agency OS Homepage](https://github.com/user-attachments/assets/740faf8c-887b-49fa-982a-e956a311c3ef)

## Features

- **Project Management**: Track and manage agency projects with status updates, timelines, and budgets
- **Client Portal**: Manage client relationships and communications
- **Team Management**: Organize team members with roles and permissions
- **Task Tracking**: Assign and track tasks across projects
- **Time Logging**: Log hours and generate reports for billing
- **Invoice Management**: Create, send, and track invoices
- **Document Storage**: Store and organize project documents securely

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Database**: [Prisma](https://www.prisma.io) with PostgreSQL
- **UI Components**: React 19

## Getting Started

### Prerequisites

- Node.js 18+ 
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

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your database connection string:
```
DATABASE_URL="postgresql://user:password@localhost:5432/bloopa_agency_os"
```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Generate Prisma Client:
```bash
npx prisma generate
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Database Management

```bash
# Create a new migration
npx prisma migrate dev --name your_migration_name

# Open Prisma Studio to view/edit data
npx prisma studio

# Reset database
npx prisma migrate reset
```

## Project Structure

```
├── app/                # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── prisma/             # Prisma schema and migrations
│   └── schema.prisma   # Database schema
├── public/             # Static assets
└── package.json        # Dependencies
```

## Database Schema

The Prisma schema includes models for:

- **Agency**: Agency information and settings
- **Client**: Client profiles and contact information
- **Project**: Project details, status, and budget
- **TeamMember**: Team member profiles and roles
- **Task**: Task assignments and tracking
- **TimeLog**: Time tracking entries
- **Document**: Project document storage
- **Invoice**: Invoice management

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is private and proprietary.
