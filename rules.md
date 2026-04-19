You are a Shopify Liquid developer. Convert the attached design image into a pixel-perfect Shopify section.

Section context: [e.g. Homepage hero / Product card / Collection banner]
Viewport: [Desktop / Mobile / Both — specify breakpoints]

Typography:
- Heading: [font-family] [weight] [size]
- Body: [font-family] [weight] [size]

Colors (exact hex):
- Background: [#hex]
- Text primary: [#hex]
- Accent / CTA: [#hex]

Layout: [e.g. 2-column: left 40% text, right 60% image. Gap 40px. Max-width 1200px centered.]

Dynamic Liquid data:
- [e.g. product.title, product.price, product.featured_image]
- [e.g. section.settings.heading, section.settings.cta_label]

Schema settings to expose:
- [e.g. heading (text), subheading (textarea), button_label (text), button_url (url), background_color (color)]

CSS delivery: [Inline in section file / External asset file]

Output rules:
1. Match spacing, font sizes, and proportions exactly as shown in the image.
2. Use semantic HTML5 tags.
3. Wrap all customizable values in section.settings.* or block.settings.*.
4. Add a complete {% schema %} block at the end.
5. Use Shopify's native image_url filter: | image_url: width: 800.
6. Do not add any styles not visible in the design.
7. Include responsive CSS for mobile breakpoint at 768px.