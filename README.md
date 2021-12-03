[Live Demo](https://quaid.world)

# Nextjs Personal Portfolio Page

This is a single page showcase style portfolio page.

## Features

- Material-Ui v5
- lint-staged configured with prettier, eslint, and sort-package-json
- production safe contact form with nextjs serverless api

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Setting up the contact form

The contact form is configured to use Sendinblue. Create a .env file with the following values. A Sendinblue account is required for the smtp password.

```env
RECEIVING_ADDRESS=business.email@gmail.com
SENDING_ADDRESS=contact.form@example.com
SMTP_PASSWORD=xxxxxxxxxxxxx
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
