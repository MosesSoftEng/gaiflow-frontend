This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Project structure.

Project is structured using the layered architectural pattern.

├── app
├── lib
│ ├── api
│ ├── services
│ ├── components
│ │ ├── componentHelpers.ts

1. `app`: Directry for presentation layer. Contains; Nex.js pages.
2. `lib`: Direcory for domain layer (Business logic). Contains;

# Linting.

Lint the entire project.

```bash
npm run lint
```






When using a layered pattern in Next.js, you can organize your project structure into different layers, each responsible for specific functionalities. The layered pattern is a common architectural pattern that promotes separation of concerns and modularity. Here's a suggested project structure for a Next.js app using the layered pattern:

```
├── components
│   ├── layout
│   ├── shared
│   └── ...
├── lib
│   ├── api
│   ├── services
│   └── ...
├── pages
│   ├── api
│   └── ...
├── public
├── styles
│   ├── global.css
│   └── ...
├── utils
├── .env.local
├── next.config.js
└── package.json
```

Explanation of each directory:

1. `components`: Contains reusable React components. You can further organize components into subdirectories like `layout` for layout-related components and `shared` for shared components.

2. `lib`: Contains utility libraries, API clients, services, and other shared logic. This layer can be used to encapsulate business logic, communication with external APIs, and other common functionalities.

3. `pages`: Contains Next.js pages, including API routes. Pages are used to define routes and handle rendering.

4. `public`: Contains static assets like images, fonts, etc. that you want to be publicly accessible.

5. `styles`: Contains global styles, CSS modules, or SCSS files that handle the overall styling of your application.

6. `utils`: Contains utility functions that are not specific to any particular layer or component.

7. `.env.local`: Contains environment variables specific to the development environment.

8. `next.config.js`: Configurations for Next.js.

9. `package.json`: The usual package.json file for managing dependencies and scripts.

This structure is just a starting point, and you can customize it based on your project's specific needs. The key concept is to separate concerns into different layers, making the code more organized and maintainable. The layered pattern also facilitates better collaboration among team members, as each layer focuses on specific responsibilities.


## Create a ai prompt.

endpoint: dashboard/prompt/create



# File naming.
In Next.js, following a consistent naming convention for files, modules, components, and functions can help improve code organization and maintainability. Here's a recommended naming style:

1. **Files and Modules:**
   - Use lowercase letters for filenames.
   - Use kebab-case (hyphen-separated) for filenames.
   - Name files according to their content, reflecting their purpose.
   - Use `.js` extension for JavaScript files, `.ts` for TypeScript files, `.jsx` for JSX files, and `.tsx` for TypeScript JSX files.

   Example:
   - `my-component.tsx`
   - `api-utils.ts`
   - `data-fetching.js`
   - `utils.ts`

2. **Components:**
   - Use PascalCase (also known as UpperCamelCase) for component names.
   - Prefix component names with a relevant identifier to indicate their purpose or type.

   Example:
   - `Header.tsx`
   - `ProductCard.tsx`
   - `LoginForm.tsx`

3. **Functions and Variables:**
   - Use camelCase for function names and variables.
   - Use descriptive names that convey the purpose of the function or variable.
   - Avoid overly long names while maintaining clarity.

   Example:
   - `fetchData()`
   - `calculateTotalPrice()`
   - `isLoggedIn`

Here's an example directory structure that follows this naming style:

```
my-nextjs-app/
  ├── components/
  │    ├── Header.tsx
  │    ├── ProductCard.tsx
  │    └── LoginForm.tsx
  ├── pages/
  │    ├── index.tsx
  │    ├── about.tsx
  │    └── contact.tsx
  ├── utils/
  │    ├── api-utils.ts
  │    ├── data-fetching.ts
  │    └── validation.ts
  ├── services/
  │    ├── authService.ts
  │    └── productService.ts
  ├── styles/
  │    ├── global.css
  │    ├── header.module.css
  │    └── product-card.module.css
  ├── public/
  │    ├── images/
  │    ├── icons/
  │    └── favicon.ico
  ├── next.config.js
  ├── package.json
  └── README.md
```

Consistency in naming conventions makes your codebase more readable and maintainable, and it helps other developers understand the structure of your Next.js application.
