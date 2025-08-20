# Fix for "Module not found: Can't resolve 'fs'" Error

## Problem
We encountered a build error where client components were trying to import and use Node.js filesystem modules (`fs` and `path`) which are only available on the server side:

```
Module not found: Can't resolve 'fs'
./src/lib/content.ts (1:1)
Module not found: Can't resolve 'fs'
```

## Root Cause
The issue occurred because we were importing server-side functions (that use `fs` and `path`) into client components marked with `'use client'`. In Next.js, client components are bundled for the browser where Node.js modules like `fs` are not available.

## Solution
We restructured our approach to ensure proper separation of server and client code:

### 1. Converted Pages to Server Components
We removed the `'use client'` directive from our page components and converted them to server components that can safely use server-side functions:

- `src/app/en/blog/page.tsx`
- `src/app/es/blog/page.tsx`
- `src/app/en/blog/[slug]/page.tsx`
- `src/app/es/blog/[slug]/page.tsx`

### 2. Removed Client Components That Used Server Functions
We removed the following client components that were incorrectly trying to use server-side functions:
- `src/components/BlogPageClient.tsx`
- `src/components/BlogPostPageClient.tsx`

### 3. Updated Layout Component
We simplified the Layout component to remove client-side state management and navigation:
- `src/components/Layout.tsx`

### 4. Updated Home and About Pages
We converted the home and about pages to use server components with proper layout integration:
- `src/app/en/page.tsx`
- `src/app/es/page.tsx`
- `src/app/en/about/page.tsx`
- `src/app/es/about/page.tsx`

## Key Principles Applied

### Server-Side Data Fetching
All content processing using `fs` and `path` modules now happens on the server side in page components, not in client components.

### Proper Component Architecture
- **Server Components**: Handle data fetching and processing
- **Client Components**: Handle interactivity and state (when needed)

### Data Flow
Data is fetched on the server and passed as props to components, rather than components fetching data themselves.

## Results
- ✅ Build completes successfully without "fs" module errors
- ✅ Language-specific routing still works correctly
- ✅ Full page translation is maintained
- ✅ Performance is improved by moving data fetching to the server
- ✅ Proper separation of concerns between server and client code

This fix ensures that our bilingual implementation works correctly while following Next.js best practices for server/client component architecture.