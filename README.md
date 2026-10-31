# Square Harness website

The organization website: <https://square-harness.github.io/>.

GitHub Pages publishes the root of `main`. The site is plain HTML and CSS,
with no build step. Edit `index.html` for content
and search metadata, and `style.css` for presentation.

The logo, palette and fonts come from the
[Square Harness interface](https://github.com/Square-Harness/Square-Harness/tree/main/frontend).
Font licenses are included in `assets/fonts/`. The copied interface assets
retain their upstream license and notice in `assets/`.

`robots.txt` and `sitemap.xml` allow discovery of the canonical homepage.
Search engines decide when to crawl and index it.

The contact form posts to FormSubmit, which forwards messages to the configured
recipient after email activation. FormSubmit's default CAPTCHA remains enabled,
and a hidden honeypot helps filter automated submissions. The confirmation page
is `contact-sent.html`. Contact names and GitHub profile links are maintained in
`index.html`.
