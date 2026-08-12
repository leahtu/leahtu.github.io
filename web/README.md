# Personal site

The front site is static HTML and CSS with a small progressive-enhancement script. GitHub
Pages serves the contents of `public/`; the deployment workflow adds the Quartz digital
garden at `/garden/`.

## Local preview

```powershell
python -m http.server 3000 --directory public
```

Open <http://localhost:3000>.

Edit the HTML files in `public/`, shared styles in `public/assets/styles.css`, and the
optional scroll enhancement in `public/assets/site.js`.
