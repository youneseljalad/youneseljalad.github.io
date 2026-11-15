# Personal portfolio (GitHub Pages)

A single-page portfolio: profile, about, experience, education, skills, and app-store-style project listings. Plain HTML, CSS and JavaScript. No build step, no backend, no paid services, no API keys.

## Folder structure

```
portfolio/
├── index.html          page structure, profile text, SEO tags
├── style.css           all styling (light + dark themes)
├── script.js           YOUR CONTENT (top of file) + rendering code
├── README.md           this file
├── cv.pdf              (you add this) your CV
└── assets/
    └── images/
        ├── profile.jpg                      (you add this) your photo
        └── projects/
            ├── lims-icon.png                example names, rename freely
            ├── lims-screen-1.png
            ├── lims-screen-2.png
            ├── reservehub-icon.png
            └── ...
```

The file names above are examples. Whatever you name your images, write the same path in `script.js`. All paths are relative (no leading `/`), so the site works at `https://USERNAME.github.io/REPOSITORY-NAME/`.

## Where to edit what

| What | Where |
| --- | --- |
| Name, title, location, intro, About text | `index.html` (look for `EDIT` comments) |
| Page title, description, share preview | `<head>` of `index.html` |
| Email and social links | `SITE` at the top of `script.js` |
| Experience, education, skills | `EXPERIENCE`, `EDUCATION`, `SKILLS` in `script.js` |
| Projects | `PROJECTS` in `script.js` |
| Colors | the `:root` and `[data-theme="dark"]` blocks at the top of `style.css` |

Links and fields you leave empty (`""`) are hidden. Nothing shows as a dead button.

## Adding a project

Open `script.js`, find `PROJECTS`, copy one object, paste it after the last one (add a comma), and edit it:

```js
{
  id: 'my-app',
  name: 'My App',
  description: 'One sentence about what it does.',
  category: 'Mobile Apps',          // Web Apps, Mobile Apps, Websites, Tools, Other
  platform: 'Android',
  icon: 'assets/images/projects/my-app-icon.png',
  screenshots: [
    'assets/images/projects/my-app-screen-1.png',
    'assets/images/projects/my-app-screen-2.png'
  ],
  technologies: ['Kotlin', 'Firebase'],
  status: 'Live',
  websiteUrl: '',
  githubUrl: 'https://github.com/you/my-app',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=...',
  appStoreUrl: '',
  featured: false
}
```

- The first available link becomes the main button (website, then Google Play, App Store, details, GitHub). The rest appear as smaller buttons.
- With no link, a disabled label is shown instead (`ctaLabel`, or the status).
- Set `featured: true` for a larger listing with the longer `details` text. Featured projects are listed first.
- Filter buttons appear automatically for the categories you use.
- Screenshots keep their own proportions. Use PNG or JPG, about 600 to 900 px wide, and compress them (for example at squoosh.app) so the page stays fast.

All text is inserted as plain text, so characters like `<` or `&` in descriptions are safe.

## Preview on your computer

Double-click `index.html`, or for a more accurate test run this in the folder and open http://localhost:8000:

```
python -m http.server 8000
```

(The CV availability check only runs on a real server, not when opening the file directly.)

## Deploy on Vercel (fastest)

1. Put the folder in a GitHub repository (see the GitHub steps below), or skip GitHub and run `npx vercel` inside the folder.
2. On vercel.com choose **Add New, Project**, import the repository.
3. Framework preset: **Other**. Leave build command and output directory empty. Click **Deploy**.

Your site is live at a `.vercel.app` address in under a minute. You can connect your own domain in the project settings.

## The bold design layer

`crazy.css` and `fx.js` add the visual effects: living particle background, custom cursor, letter-by-letter headline, scroll reveals, tilting project cards, skills marquee, Rieti clock, and a command menu (press Ctrl or Cmd + K, or `/`). Remove the `crazy.css` link and the `fx.js` script tag in `index.html` to get the calm design back. Everything respects the visitor's reduced-motion setting.

## Publish with GitHub Pages (no Git knowledge needed)

1. Create a free account at github.com and sign in.
2. Click **+** (top right), then **New repository**.
3. Repository name: pick one, for example `portfolio`. (If you name it `USERNAME.github.io` the site will live at `https://USERNAME.github.io/` with no subfolder.)
4. Choose **Public**, then **Create repository**.
5. On the empty repository page click **uploading an existing file**.
6. Drag in everything inside the `portfolio` folder: `index.html`, `style.css`, `script.js`, `README.md`, `cv.pdf`, and the `assets` folder. Drag the contents, not the outer folder, so `index.html` is at the top level of the repository.
7. Click **Commit changes**.
8. Go to **Settings**, then **Pages** (left menu).
9. Under **Build and deployment**, set Source to **Deploy from a branch**. Choose branch **main** and folder **/ (root)**, then **Save**.
10. Wait one or two minutes and refresh the Pages screen. It shows your address:
    `https://USERNAME.github.io/REPOSITORY-NAME/`

To update later: open the file on GitHub, click the pencil icon, edit, and commit. Or use **Add file, Upload files** to replace images.

### Same thing with Git commands

```
cd portfolio
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
git push -u origin main
```

Then do steps 8 to 10 above.

## Troubleshooting

- **Page is unstyled or has no projects:** `style.css` and `script.js` must be in the same folder as `index.html`, with exactly those names (lowercase).
- **Images missing:** file names are case-sensitive on GitHub (`Profile.jpg` is not `profile.jpg`). Check the path in `script.js` matches the real file. Missing images never break the layout: you get initials or a hidden gallery.
- **CV button says "CV not available yet":** upload a file named exactly `cv.pdf` at the top level of the repository.
- **404 on the Pages address:** check Settings, Pages shows a green "Your site is live" message, and that `index.html` is in the root, not inside another folder.
- **Changes don't appear:** wait a minute, then hard refresh (Ctrl+Shift+R, or Cmd+Shift+R on Mac).
- **Share preview shows no picture:** the `og:image` tag in `index.html` needs your real full address. Social networks cache previews, so re-test with their debugger tools after changing it.

## Share preview (SEO)

In the `<head>` of `index.html`, customize: `<title>`, `description`, `og:title`, `og:description` and `og:image` (full URL of an image, ideally 1200x630). GitHub Pages cannot generate dynamic preview cards, so this is a fixed image and text.

## Checklist: still to do before sharing

Already filled in: name, location (Rieti, Italy), intro, education (Tuscia Master 1, Sétif Master 2 and Bachelor's), SIGEAD internship, retail and online-sales experience, courses (Coursera, edX), spoken languages, email, phone, LinkedIn.

- [ ] `assets/images/profile.jpg`: your photo (square, about 600x600)
- [ ] `cv.pdf`: your CV at the top level of the repository
- [ ] `script.js` `SITE`: add GitHub, Instagram, Facebook or a personal website if you want them shown
- [ ] `script.js` `EDUCATION` and `EXPERIENCE`: add start/end dates (`start`, `end`) where you know them
- [ ] `script.js` `COURSES`: add a `url` to each certificate, and any other courses you completed
- [ ] `script.js` `PROJECTS`: add project links (`websiteUrl`, `githubUrl`, store links), icons and real screenshots
- [ ] `assets/images/projects/`: one icon and your real screenshots per project
- [ ] `index.html` `<head>`: replace `USERNAME` and `REPOSITORY-NAME` in the `og:image` tag after publishing
- [ ] Check the SIGEAD internship and shop entries: correct titles, add dates and locations

Privacy note: your email and phone number are public once the site is live, and bots collect them. If you start getting spam, remove `phone` (or `email`) in `SITE` and re-upload `script.js`.
