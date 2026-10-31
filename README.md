# Square Harness website

The organization website: <https://square-harness.github.io/>.

GitHub Pages publishes the root of `main`. The site uses HTML, CSS, and a small
script for the contact dialog, with no build step. Edit `index.html` for content
and search metadata, and `style.css` for presentation.

When changing the stylesheet, update its `v` query value in both HTML pages
so returning browsers fetch the new CSS. Keep the screenshot's inline size
limit so it also fits when a stylesheet is unavailable or cached.

The logo, palette and fonts come from the
[Square Harness interface](https://github.com/Square-Harness/Square-Harness/tree/main/frontend).
Font licenses are included in `assets/fonts/`. The copied interface assets
retain their upstream license and notice in `assets/`.

`robots.txt` and `sitemap.xml` allow discovery of the canonical homepage.
Search engines decide when to crawl and index it.

The Contact button opens a native dialog. Close it with the close button,
Escape, or a click outside the window. `contact.js` handles opening and closing;
the browser provides modal focus management. The form stays hidden by default,
including when a stylesheet is unavailable. Without JavaScript, an email link
is shown instead.

The contact form posts JSON to a server-side relay hosted with Sites. The relay
keeps its Slack incoming webhook in secret runtime configuration and forwards
submissions to the private `contact-sh` channel. The browser shows success only
after Slack acknowledges delivery, keeps the entered message on errors, and
disables the send button while waiting. A hidden honeypot and bounded requests
help filter spam. The relay has its own tests and documentation in the adjacent
`organization-contact-relay` checkout. No Slack credentials belong in this repo.
Team names and personal website links are maintained in `index.html`.
