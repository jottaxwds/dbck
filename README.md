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

## Approach for PART 1

Since cookie is not a posibility in order to store/save user preferences in terms of country, `localStorage` its used instead + adding some client logic on `src/pages/index.tsx` in which that `localStorage` value is retrieved and redirected to right place hiding main landing page in the meantime (nothing user could perceive since this action takes almost no-time to perform).

A middleware was added in order to get country location from user IP and redirecting to right path afterwards.

## Approach for PART 2

This example its going to be implemented in both available country landing pages in which an animation will take place once scrolling to right animated content.

- Added `useAnimated` hook in combination to `react-intersection-observer` + custom `AnimatedComponent` to provide a 'apparition' animation when elements are visible after scroll page.

Navigating to `/scrollAnimation` shows the PART 2 example/solution for the requirements.