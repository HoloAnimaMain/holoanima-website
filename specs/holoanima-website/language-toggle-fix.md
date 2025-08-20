# Fix for Language Toggle Issue in Blog Pages

## Problem
The language toggle was not working correctly on blog pages:
- Switching from EN to ES worked fine
- Switching from ES back to EN was not working properly

## Root Cause
The issue was in the Header component where we were using the `currentLanguage` prop passed from the Layout component, but this prop wasn't being updated correctly when navigating between pages. The Header component needed to detect the actual current language from the URL path rather than relying on the prop.

## Solution
We implemented the following fixes:

### 1. Dynamic Language Detection in Header
Instead of relying on the `currentLanguage` prop, we now dynamically detect the current language from the actual URL path:

```typescript
const actualCurrentLanguage = pathname ? detectLanguageFromPath(pathname).language : currentLanguage;
```

### 2. Updated All Navigation Elements
We updated all navigation elements (logo link, menu items, language toggle) to use the dynamically detected language:

```typescript
<Link href={`/${actualCurrentLanguage}`} className="flex items-center">
// ...
<Link href={generateLanguagePath(item.href, actualCurrentLanguage)}>
// ...
{actualCurrentLanguage === 'en' ? 'ES' : 'EN'}
```

### 3. Fixed Language Toggle Logic
The language toggle now correctly uses the actual current language to determine the alternate language:

```typescript
const toggleLanguage = () => {
  const newLanguage = getAlternateLanguage(actualCurrentLanguage);
  
  if (pathname) {
    const { pathWithoutLanguage } = detectLanguageFromPath(pathname);
    const newPath = generateLanguagePath(pathWithoutLanguage, newLanguage);
    window.location.href = newPath;
  }
};
```

## Key Changes Made

### Header Component (`src/components/Header.tsx`)
- Added dynamic language detection using `usePathname()` and `detectLanguageFromPath()`
- Updated all navigation elements to use the actual current language
- Simplified the component by removing the `onLanguageChange` prop since it's no longer needed

### Language Utility (`src/lib/language.ts`)
- Ensured the `generateLanguagePath` function properly handles all path cases
- Maintained consistent URL generation for language switching

## How It Works Now

1. **Language Detection**: The Header component uses `usePathname()` to get the current URL and `detectLanguageFromPath()` to extract the actual language prefix
2. **Navigation**: All links (logo, menu items) use the detected language to maintain context
3. **Language Toggle**: When clicked, the toggle:
   - Determines the alternate language using `getAlternateLanguage()`
   - Extracts the path without language prefix using `detectLanguageFromPath()`
   - Generates the new URL with the alternate language using `generateLanguagePath()`
   - Navigates to the new URL using `window.location.href`

## Results
- ✅ Language toggle works correctly in both directions on all pages
- ✅ Blog pages properly switch between `/en/blog` and `/es/blog`
- ✅ Individual blog posts maintain language context when toggling
- ✅ Homepage and other pages continue to work as before
- ✅ No breaking changes to existing functionality

This fix ensures that the language toggle works consistently across all pages by dynamically detecting the current language from the URL rather than relying on potentially stale props.