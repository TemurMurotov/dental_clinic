# Dental Clinic

Next.js 16 + Prisma (PostgreSQL) + next-intl (uz / ru / en) website with an admin panel.

## Local development

```bash
cp .env.example .env        # fill in DATABASE_URL, SESSION_SECRET, ...
npm install
npm run db:push             # create tables
npm run db:seed             # admin user + sample content
npm run dev
```

Without `BLOB_READ_WRITE_TOKEN`, uploaded images are saved to `public/uploads`.

## Deploy to Vercel

1. Push the repository to GitHub and import it at [vercel.com/new](https://vercel.com/new).
2. In the project's **Storage** tab:
   - create a **Postgres** database (Neon). This adds `DATABASE_URL`.
   - create a **Blob** store. This adds `BLOB_READ_WRITE_TOKEN` (the filesystem is read-only on Vercel, so admin image uploads go to Blob).
3. In **Settings → Environment Variables**, add:
   - `SESSION_SECRET`: output of `openssl rand -base64 32` (required; admin login fails in production without it)
   - `NEXT_PUBLIC_SITE_URL`: e.g. `https://your-domain.uz` (optional; defaults to the Vercel production domain)
4. Create the tables and the admin user **before the first build**. Public pages are prerendered from the database at build time, so the build fails if the database is empty:

   ```bash
   npx vercel env pull .env.production.local   # or copy DATABASE_URL by hand
   DATABASE_URL="..." npm run db:push
   DATABASE_URL="..." ADMIN_EMAIL="..." ADMIN_PASSWORD="..." npm run db:seed
   ```

5. Deploy. After logging in at `/admin`, change the password under **Settings**.

Blog posts and cases you edit in the admin panel appear on the site right away (the cache is revalidated on each change); you don't need to redeploy.
