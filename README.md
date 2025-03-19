This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Utilizes [Next.js](https://nextjs.org/) for server-side rendering (SSR).
- Uses [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/) for form handling and validation.
- Leverages [shadcn/ui](https://ui.shadcn.dev/) for building the form UI.
- Uses [Tailwind CSS](https://tailwindcss.com/) for styling.
- Hosted on [Vercel](https://vercel.com/).
- Live app: [https://jcode-react-form.vercel.app/](https://jcode-react-form.vercel.app/).

## Notes

- Testing (unit, integration, and e2e) was not explicitly required for this task. However, you can see an example of how I implement testing in this [pull request](https://github.com/mainstar123/advocate-finder/pull/1).
- The above link also demonstrates how I implement CI/CD pipelines for linting, formatting, and testing.
- If I had more time, I would add:
  - Code formatting with Prettier.
  - Pre-commit hooks for enforcing coding standards.
  - Sanitization logic for form inputs to enhance security.
  - Add Storybook for UI component documentation
