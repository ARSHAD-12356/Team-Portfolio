Place your 3D model file here.

Requirements:
- Filename (case-sensitive): `laptop.glb`
- Path available at runtime: `/models/laptop.glb`

How to add:
1. Put the file `laptop.glb` in this folder (`public/models/laptop.glb`).
2. Restart the dev server (`npm run dev`).

Notes:
- Do NOT put the file under `src/` or `app/` — `useGLTF` must load from `public` at `/models/...`.
- If you prefer to keep assets in a CDN, update `useGLTF("/models/laptop.glb")` to the CDN URL.
