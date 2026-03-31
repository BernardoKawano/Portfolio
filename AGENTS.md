<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Portfolio Design System Sync
- Always use tokens from `docs/DESIGN_SYSTEM.md` for spacing, colors, type, radius, and motion.
- Keep editable content centralized in `src/config/*` and `src/content/*`.
- Preserve bilingual structure under `src/i18n/messages/{pt,en}.ts`.
- Do not hardcode recruiter-facing copy inside page files when a dictionary key exists.
