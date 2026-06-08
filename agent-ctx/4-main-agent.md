# Task 4 - Profile Picture Upload & Profile Editing for Town Square

## Summary of Changes

### 1. Prisma Schema — Added `avatarUrl` field
- Added `avatarUrl String?` field to `ForumUser` model (after `avatarColor`)
- Ran `bun run db:push` to sync the schema

### 2. API — Updated forum users routes to handle `avatarUrl`
- POST handler: Added `avatarUrl` to destructured body and both `update`/`create` upsert objects
- Added new PUT handler for updating user by `id` with support for `name`, `bio`, `role`, `location`, `avatarUrl`, and `communities`
- PATCH handler in `[id]/route.ts`: Added `avatarUrl` to destructured body and update data

### 3. Upload API — Created `/api/upload` route
- Accepts POST with FormData containing a `file` field
- Validates file type (image only) and size (max 5MB)
- Saves files to `public/uploads/` with unique names (Date.now() + extension)
- Returns `{ url: "/uploads/filename" }`

### 4. ForumUser Interface & Types Updated
- Added `avatarUrl?: string` to `ForumUser` interface
- Added `avatarUrl?: string` to `ForumComment` author type
- Added `Camera`, `Pencil`, and `Save` icon imports from lucide-react

### 5. Onboarding Flow — Added Profile Picture step (Step 2)
- Step indicator updated from 3 steps to 4 steps
- New Step 2: Profile Picture upload with 120x120px circular area
- `handleComplete` updated to upload avatar file via `/api/upload` before creating user

### 6. Edit Profile Modal & Capability
- New `EditProfileModal` component with all editable fields
- Avatar upload with same mechanism as onboarding
- On save, calls `PUT /api/forum/users` with updated data
- Added "Edit Profile" button in profile dropdown (before Sign Out)

### 7. Avatar Rendering Updates
- All avatar circles now check for `avatarUrl` and show the image with `object-cover` when available
- Falls back to initial letter with `avatarColor` background

### 8. Supporting Changes
- Installed missing `remark-gfm` package
- Created `public/uploads/` directory
- Lint passes cleanly, dev server compiles successfully
