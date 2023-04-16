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

The solution of this part consist on 2 different steps:
 1 - By implementing a middleware, country is retreived (if any) from Request -> `req.geo?.country`. If that country exist within the `countryLookup`, navigation is redirected to that specific country landing page, otherwise
main page is loaded instead.
 2 - Since cookies are not allowed and there's not another direct way to store users data on client and read them from server, I decided to put some logic on client side to use localStorage as a way to store this
country/location preferences. So that: 
    - Each time a specific landing is loaded, a `localStorage` value is saved regarding that location/country
    - Once user access to main page, a logic checks if a `localStorage` value is saved to get the location/country preference and redirect to that one right after. Main page is hidden
    in the meantime to not to show main page to users in the meantime country saved preferences are being checked.



## Approach for PART 2

- Created `useAnimated` hook to hold 'element is visible' logic in combination to `react-intersection-observer`
- `AnimatedComponent` as a HOC to provide an 'apparition' animation when elements passed as a children are visible after scroll page (known by consuming `useAnimated` hook on it).

Navigate to `/scrollAnimation` shows the PART 2 example/solution for the requirements.