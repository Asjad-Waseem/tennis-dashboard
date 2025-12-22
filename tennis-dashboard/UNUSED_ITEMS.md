# Unused Items & Code Cleanup

This document tracks items that may be unused or need cleanup in the codebase.

## ✅ Resolved Issues

### 1. `src/app/styles/global.css` ✅
   - **Status:** Now in use
   - **Location:** Imported in `src/app/layout.tsx`
   - **Purpose:** Global Tailwind CSS configuration and base styles
   - **Note:** This file is actively used and should not be removed

### 2. `MonthlyPerformance` Type Duplication ✅
   - **Status:** Resolved
   - **Current State:** 
     - Type is defined once in `src/types/index.ts`
     - All components import from centralized location:
       - `src/components/client/performance-bar-chart/types.ts` ✅
       - `src/components/client/performance-bar-chart-card/types.ts` ✅
   - **Note:** No duplicate definitions found - all components properly import from `@/types`

## 🔍 Current Status

As of the latest codebase review, there are **no unused items** that need immediate attention. All files and types are properly utilized:

- ✅ All CSS files are imported and used
- ✅ All type definitions are centralized and properly imported
- ✅ All components are referenced in the application
- ✅ All API routes are functional

## 📝 Maintenance Notes

### When Adding New Components

1. **Types:** Always import from `src/types/index.ts` for shared types
2. **Component-specific types:** Define in component's `types.ts` file
3. **CSS:** Use Tailwind classes, add to `global.css` only if needed for global styles
4. **Constants:** Add to `src/lib/constants.ts` for shared constants

### Code Review Checklist

- [ ] No duplicate type definitions
- [ ] All imports use `@/` alias
- [ ] Unused files removed
- [ ] Types properly exported/imported
- [ ] CSS files are actually imported

## 🗑️ Potential Cleanup (Future)

If you encounter unused items in the future, document them here:

### Example Format:
```
### Item Name
- **Location:** `path/to/file`
- **Reason:** Why it's unused
- **Action:** Remove / Refactor / Keep for future use
```

---

**Last Updated:** Current as of latest codebase review  
**Status:** ✅ No unused items detected
