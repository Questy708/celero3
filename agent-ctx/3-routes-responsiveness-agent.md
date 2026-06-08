# Task 3: Routes Page Responsiveness + Terminology Change

## Agent: Routes Responsiveness Agent

## Summary
Fixed all responsiveness issues on the Routes page and implemented "Engines" → "Pillars" terminology change.

## Files Modified
1. `/home/z/my-project/src/artemis/pages/RoutesPage.tsx` - All responsiveness fixes
2. `/home/z/my-project/src/artemis/data/routes.ts` - Terminology changes (4 instances)

## Key Changes

### Terminology (routes.ts)
- "velocity engine" → "velocity pillar" (Lagos)
- "prototyping engine" → "prototyping pillar" (Nairobi)  
- "economic engine" → "economic pillar" (Casablanca, 2 instances)

### Pricing Cards (RoutesPage.tsx)
- Cards stack vertically on mobile (`grid-cols-1 lg:grid-cols-[340px_1fr]`)
- Bottom border on mobile between info and coverage sections
- Coverage grid: `grid-cols-1 sm:grid-cols-2`
- CTA buttons: `w-full lg:w-auto`, `min-h-[44px]`
- Full Route Book button: `w-full sm:w-auto`, `min-h-[44px]`

### Map / BlueprintMap
- Horizontal scroll on mobile with `overflow-x-auto` and inner `min-w-[600px] md:min-w-0`
- Pin labels hidden on small screens (`hidden sm:block`)
- Detail panel becomes bottom sheet on mobile (`inset-x-0 bottom-0 top-auto`, `w-full`, `max-h-[85vh]`, `rounded-t-lg`)

### RoutesBridge
- Image aspect ratio: `aspect-[3/2] sm:aspect-[4/3]` with `max-h-[200px] sm:max-h-none`

### PreambleSection
- Stats grids: responsive padding and font sizes

### InvitationSection
- CTA links: `px-5 sm:px-8 py-5 sm:py-6 min-h-[44px]`

## Verification
- `bun run lint` passes cleanly
- Dev server compiles successfully
