# LAMS Trading and Projects: website

React + Vite + TypeScript + Tailwind CSS + React Router + Lucide + Framer Motion.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build and deploy
```bash
npm run build      # outputs /dist
npm run preview    # test the production build
```
Upload `dist/` to any static host. Netlify (`public/_redirects`) and Vercel (`vercel.json`) are already configured for client-side routing. On other hosts, route all paths to `index.html`.

## GitHub demo
Pushing to `main` deploys the site to GitHub Pages and publishes a Docker image to GitHub Container Registry (GHCR). In the repository settings, enable Pages and select **GitHub Actions** as the build and deployment source. GitHub Actions cannot enable Pages for this repository automatically.

The demo URL is `https://shikaned.github.io/lams-trading-and-projects/`.

To run the production container locally:
```bash
docker build -t lams-trading-and-projects .
docker run --rm -p 8080:80 lams-trading-and-projects
```
Then open `http://localhost:8080`. The GHCR image is `ghcr.io/shikaned/lams-trading-and-projects:latest`.
GitHub creates new container packages as private. To allow public pulls, open the repository's **Packages**, select `lams-trading-and-projects`, then use **Package settings → Change visibility → Public**. GitHub hosts the image in GHCR; it does not keep a Docker container running as a website, so use the Pages URL for the live demo.

## Edit content
Everything editable lives in `src/data/company.ts`: phone, hours, address, map URL, services, values, projects.

## Photos
The logo is `public/logo.png`. Add photos to `public/images/` using the file names in `company.ts` (e.g. `hero.jpg`, `hero-construction.jpg`, `hero-cleaning.jpg`, `construction-painting.jpg`, `project-1.jpg`, `before-1.jpg`). Until a file exists, a labelled placeholder shows automatically. Use only photos you own or have licensed, and only label real LAMS work as projects.

## Contact form
Quote requests are sent to `eugenelamola@gmail.com` through FormSubmit. FormSubmit requires the recipient to confirm the first activation email before requests can be delivered. You can override the endpoint with `VITE_FORM_ENDPOINT` (copy `.env.example` to `.env` for local builds). The form reports success only when the email service accepts the request.

## Structure
```
public/        logo.png, images/, _redirects
src/data/      company.ts (all content)
src/components Button, Media, Navbar, Footer, ServiceCard, SectionHeading, PageHeader, ContactForm
src/pages      Home, About, Construction, Cleaning, Projects, Contact
```
