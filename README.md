This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tech stack
+ Framework: Next.js 14+ with App Router
+ UI Library: Material UI v5
+ Styling: Emotion (MUI's styling solution)
+ Internationalization: next-intl
+ Typography: Roboto & Poppins via Google Fonts

## Features
### 🌐 Internationalization
+ Complete multi-language support (English, Chinese, French)
+ Language switching without URL changes
+ Translation files stored in messages directory
+ Cookie-based language preferences

## Layout Options
This project includes three flexible layout options:

+ Main Layout: Full-width header and footer with a clean content area
+ Dashboard Layout: Sidebar navigation with collapsible menu
+ Auth Layout: User login and registration pages

## Project Structure
```
├── app/
│   ├── (mainLayout)/      # Routes using the main layout
│   │   └── page.tsx       # Entry page (redirects to mainLayout)
│   ├── (dashboardLayout)/ # Routes using the dashboard layout
│   ├── (authLayout)/      # Routes using the auth layout
│   ├── layout.tsx         # Root layout with providers
├── components/
│   ├── header/            # Header components
│   ├── footer/            # Footer components
│   ├── layout/            # Layout components
├── messages/              # Translation files
│   ├── en.json           # English translations
│   ├── zh.json           # Chinese translations
│   └── fr.json           # French translations
├── public/               # Static assets
├── i18n/                 # i18n configuration
├── middleware.ts         # Next.js middleware (handles i18n)
└── theme/               # MUI theme configuration
```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
