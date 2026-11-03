# Ayah Fashion – Website Redesign Documentation

Redesign of ammiclothings.com (currently "Ammikids by Ammi Enterprises") into the **Ayah Fashion** brand, using the logo and colour theme from the supplied brand image.

Version 1.0 · Prepared 31 October 2026

## 1. Purpose and Scope

The current website sells kids wear and ladies wear (manufacturer, supplier and wholesaler, Mumbai, est. 2003). The goal is to move the whole site to a new identity, **Ayah Fashion**, with a modern, soft-gradient look drawn from the new logo, while keeping the working commerce and enquiry features.

**In scope:** visual identity, layout, components, page designs, content rebrand, SEO and migration notes.

**Out of scope (unless agreed):** new product photography, copywriting of full product catalogues, payment gateway changes.

## 2. Audit of the Current Site

Findings from the live site:

- **Brand:** "Ammikids / Ammi Enterprises / Ammi Clothings" used interchangeably. Logo file is logo.png; footer states theme colours #c0006b and #e70080 (deep magenta).
- **Navigation:** Shop, Products, My Profile, Contact. A cart ("Your bag") with quick-view panel.
- **Home page sections:** splash screen, image slider (3 slides), Bestsellers, About Ammi Enterprises (with 2003 / PAN India / founder stats), Commitment-Quality-Network cards, "Join the Ammi circle" enquiry banner, "Watch the twirl" video strip, Instagram link.
- **Footer:** company address, phone, email, GST and Pan-India notes, WhatsApp link, product category links, and five policy pages (Terms, Privacy, Refund, Return, Shipping).
- **Commerce:** product quick view with size, colour, quantity, price in INR (for example ₹432), free shipping over ₹999.
- **Content type:** a kids-first message ("Little Couture, Big Dreams") although ladies wear is also sold.
- **Product categories:** Kids Embroidered Rayon Top, Kids Co Ord Set, Kids Frock, Kids Night Suit, Girl One Piece Dress, Ladies Kurti Set, Ladies Palazzo Set.

**Opportunities:** unify the brand name, widen the message beyond kids wear, strengthen the wholesale versus retail split, and tighten visual consistency.

## 3. Brand Identity (from the supplied image)

### 3.1 Logo

The logo is a wordmark: **Ayah** set in a high-contrast serif with an elongated, swashed "y" that drops below the baseline, and **FASHION** beneath it in small, widely letter-spaced serif capitals. The text carries a left-to-right gradient fill, set on a soft warm-to-pink gradient background.

Logo usage rules:

- Use the wordmark on light or soft-gradient backgrounds; on dark backgrounds, supply a white version.
- Clear space around the logo: at least the height of the letter "A" on all sides.
- Minimum width: 120 px on screen (header), at which "FASHION" is still legible; below that use the "Ayah" wordmark alone.
- Do not stretch, recolour outside the approved gradient, add shadows, or place on busy photography without an overlay.
- A transparent-background version (SVG preferred, PNG fallback) is required; the supplied file has the gradient baked into its background.

### 3.2 Colour Palette

Values below are approximated visually from the image. Please confirm exact values with an eyedropper or the original design file before development.

**Logo gradient (text)**

- Periwinkle blue: #5B73FB
- Violet: #8E6EE9
- Orchid: #B96ADB
- Hot pink: #F767C8

**Background gradient (surface)**

- Soft butter yellow: #FFF9B8
- Peach: #FFDDC8
- Blush pink: #FFCFD6
- Pastel orchid: #FDA8FA

**Supporting neutrals (added for readability)**

- Deep plum (body text and headings): #2E1F4D
- Muted plum (secondary text): #5E4F7E
- White: #FFFFFF
- Soft off-white card surface: #FFFBFA

**Signature gradients**

- Brand text gradient: periwinkle blue to hot pink, left to right (use for the hero headline, key numbers and section accents).
- Surface gradient: butter yellow to pastel orchid, left to right (use for hero, banners and the footer top edge).

### 3.3 Typography

- **Display / headings:** a high-contrast Didone-style serif that echoes the logo. Recommended: Playfair Display or Bodoni Moda (Google Fonts).
- **Body / UI:** a clean geometric sans for clarity. Recommended: Jost or Inter.
- **Labels and eyebrow text:** the sans in uppercase with wide tracking (0.3em), echoing "F A S H I O N".

Suggested scale: H1 56/64 px, H2 40/48, H3 28/36, body 16/26, small 14/22. On mobile reduce H1 to 36/44.

### 3.4 Accessibility Notes

- Gradient text must not be used for paragraphs, only large headings, because the yellow end of the background has low contrast against the lighter pink and orchid tones of the logo gradient.
- Body text should use deep plum on light surfaces for strong contrast.
- White text on the hot pink end of the gradient is likely to fall below the WCAG AA 4.5:1 ratio. For buttons, use the deeper violet (#5B3FD1 or similar) with white text, or dark plum text on pink. Verify every pairing with a contrast checker.
- Visible focus outlines on all interactive elements; do not rely on colour alone to indicate state.

## 4. Design Tokens

Suggested CSS variables:

```css
:root {
  --ayah-blue: #5B73FB;
  --ayah-violet: #8E6EE9;
  --ayah-orchid: #B96ADB;
  --ayah-pink: #F767C8;
  --bg-yellow: #FFF9B8;
  --bg-peach: #FFDDC8;
  --bg-blush: #FFCFD6;
  --bg-orchid: #FDA8FA;
  --ink: #2E1F4D;
  --ink-soft: #5E4F7E;
  --surface: #FFFBFA;
  --action: #5B3FD1;
  --brand-gradient: linear-gradient(90deg, #5B73FB, #B96ADB, #F767C8);
  --surface-gradient: linear-gradient(90deg, #FFF9B8, #FFCFD6, #FDA8FA);
  --radius: 14px;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Jost', sans-serif;
}
```

## 5. Information Architecture

**Primary navigation:** Home · Shop (Kids, Girls, Ladies) · Wholesale · About · Contact

**Utility navigation:** Search · My Profile · Bag

**Sitemap**

- Home
- Shop
  - Kids Wear: Embroidered Rayon Tops, Co Ord Sets, Frocks, Night Suits
  - Girls Wear: One Piece Dresses
  - Ladies Wear: Kurti Sets, Palazzo Sets
  - Product detail pages
- Wholesale Enquiry
- About Ayah Fashion
- Contact
- Profile (login, orders, addresses)
- Cart and Checkout
- Policies: Terms and Conditions, Privacy, Refund, Return, Shipping

The "Wholesale" entry is new. It separates the manufacturer and supplier audience from retail shoppers, which the current site mixes together.

## 6. Page Specifications

### 6.1 Global Header

- Logo left (wordmark on a transparent background), navigation centre, search, profile and bag icons right.
- Sticky on scroll, with a white-to-transparent blur background so the gradient shows through.
- Bag icon shows an item count badge in hot pink with dark text.
- Mobile: hamburger menu, logo centred, bag right.

### 6.2 Home Page

1. **Hero:** full-width surface gradient with the Ayah wordmark or headline in brand-gradient text, one-line value statement, two buttons (Shop the Collection, Wholesale Enquiry), and a lifestyle image on the right. Existing slider images can be reused as a rotating image stack.
2. **Category tiles:** Kids, Girls, Ladies as three large rounded cards with image, title and "Explore" link.
3. **Bestsellers:** four-product carousel (image, name, price, quick view). Replaces the current Bestsellers block.
4. **Brand story strip:** short About text, with stats (Since 2003, Pan-India supply, Quality-checked) shown in gradient numerals.
5. **Why Ayah:** three cards, Commitment, Quality, Network (retaining the current three values).
6. **Video strip:** "Watch the twirl" renamed to match the brand voice, short looping clips with tap-to-play sound.
7. **Wholesale banner:** gradient band with quote request button and WhatsApp shortcut.
8. **Instagram feed link.**

### 6.3 Product Listing

- Left filter panel (category, size, colour, price) collapsing to a drawer on mobile.
- Grid: 4 columns desktop, 2 columns mobile.
- Product card: image with hover swap, name, price in ₹, quick add.
- Sort options: Newest, Price low to high, Price high to low.

### 6.4 Product Detail / Quick View

- Image gallery with thumbnails, name, price, short description.
- Size selector, colour swatches, quantity stepper, **Add to bag**.
- Notice line: "Free shipping over ₹999" (keep the existing threshold unless the owner changes it).
- Tabs: Details, Size guide, Shipping and returns.
- Wholesale pricing prompt: "Buying in bulk? Get a quote" linking to WhatsApp.

### 6.5 Bag and Checkout

- Slide-in bag drawer with line items, quantity changes and subtotal.
- Single-page checkout: contact, address, shipping, payment, order summary. Keep the existing secure checkout flow and gateway.

### 6.6 Profile

- Login or register, order history, saved addresses, wishlist.

### 6.7 About

- Brand story: established 2003 in Mumbai, founder Aqueel Yusuf Khan, quality process (reputed vendors, in-house re-check), pan-India network.

### 6.8 Contact

- Contact form, phone, email, WhatsApp button, address with embedded map, business hours.

### 6.9 Footer

- Surface gradient top edge, logo, short description, shop links, connect links, policies, address, phone, email and social icons.
- Copyright line updated to Ayah Fashion.

## 7. Components Library

- **Buttons:** primary (solid violet, white text), secondary (outline), gradient CTA (brand gradient with dark plum text, used sparingly).
- **Cards:** rounded corners (14 px), soft shadow, off-white surface.
- **Badges:** New, Bestseller, Sale, in pastel pink with plum text.
- **Form fields:** 48 px height, 1 px plum-tinted border, violet focus ring.
- **Toasts and drawers:** white surface, plum text, pink accent line.
- **Icons:** thin-line style to match the serif elegance of the logo.

## 8. Content and Rebranding Changes

- Replace every instance of **Ammikids, Ammi Enterprises, Ammi Clothings and "Ammi circle"** with **Ayah Fashion** or an approved variant (for example "Join the Ayah circle").
- Page titles and meta descriptions to be rewritten, for example: "Ayah Fashion | Kids, Girls and Ladies Wear from Mumbai."
- Tagline: the current "Little Couture, Big Dreams" is kids-focused. Options for the new brand: "Wear the Gradient of Joy", "Everyday Couture", or keep the existing line for kids only. To be confirmed by the owner.
- Update the Open Graph image, favicon, splash screen and email signatures.
- Legal pages must be updated to name the correct trading entity. Confirm whether the legal name remains Ammi Enterprises.
- Retain business facts after confirmation: Established 2003, founder Aqueel Yusuf Khan, A-7 Kasturchand Mill Compound, Mumbai 400028, +91 70219 46362, GST registration.
- Review the contact email (currently ammikidsretail@gmail.com) and move to a branded address such as hello@ayahfashion.com.

## 9. Technical Recommendations

- **Responsive:** mobile-first, breakpoints at 480, 768, 1024 and 1280 px.
- **Performance:** compress images (WebP or AVIF), lazy-load below-the-fold media, target Lighthouse performance above 85 on mobile.
- **SEO:** unique titles and descriptions, structured data for products (price in INR, availability), XML sitemap, clean URLs.
- **Domain and migration:** if the domain changes (for example ayahfashion.com), set up 301 redirects from every ammiclothings.com URL to its new equivalent to preserve search ranking.
- **Analytics:** GA4 and Meta Pixel, with events for add-to-bag, checkout start and WhatsApp click.
- **Security:** HTTPS site-wide (the current address uses http), secure cookies, input validation on forms.
- **Video:** host short clips efficiently, with poster images, and mute by default.

## 10. Implementation Plan

1. **Discovery and confirmation (week 1):** approve brand name usage, tagline, domain, final colour values, logo files.
2. **Design (weeks 2-3):** style guide, home page and product page mock-ups, mobile layouts, client review.
3. **Build (weeks 3-5):** theme and components, page templates, commerce integration, content migration.
4. **QA and content (week 6):** cross-browser and device testing, accessibility check, speed tuning, policy updates.
5. **Launch (week 7):** redirects, DNS, analytics, monitoring, post-launch fixes.

Timelines are indicative and depend on content readiness and approvals.

## 11. Deliverables Checklist

- Brand style guide (logo rules, colours, type)
- Logo files: SVG, transparent PNG, white version, favicon
- Design mock-ups for desktop and mobile
- Component and token library
- Rebranded website with all pages above
- Updated policy pages and metadata
- Redirect map
- Handover notes and admin training

## 12. Open Questions for the Owner

1. Is **Ayah Fashion** replacing Ammikids entirely, or will Ammikids remain as a kids sub-brand?
2. Should the website move to a new domain?
3. Can you supply the original logo file (SVG or transparent PNG) and the exact colour values?
4. Is the legal entity still Ammi Enterprises?
5. Should ladies wear get equal prominence to kids wear on the home page?
6. Is a separate wholesale enquiry flow wanted, with minimum order quantities?
7. Will new product photography be provided in the new brand style?
