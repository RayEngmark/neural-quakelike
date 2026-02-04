# TechPuls - AI Article Publishing Guide

This guide explains how AI can publish new articles to TechPuls.

## Quick Start

To add a new article, edit `/tech-news/js/articles.js` and add a new article object at the TOP of the `ARTICLES` array.

## Article Schema

```javascript
{
    id: "unique-article-slug",           // Required: URL-safe identifier
    title: "Article Headline",            // Required: The main headline
    excerpt: "Short summary...",          // Required: 1-2 sentences for cards
    category: "ai",                       // Required: See categories below
    author: "TechPuls AI",               // Required: Author name
    date: "2024-02-04",                  // Required: ISO format YYYY-MM-DD
    image: "",                           // Optional: Image URL (empty = placeholder)
    imageAlt: "Image description",       // Optional: Alt text for accessibility
    featured: false,                     // Optional: Show in hero section
    popular: false,                      // Optional: Show in sidebar
    content: `<p>Full article...</p>`   // Required: HTML content
}
```

## Categories

Use one of these category values:
- `mobil` - Smartphones, tablets, wearables
- `pc` - Computers, hardware, components
- `gaming` - Video games, consoles, gaming hardware
- `software` - Apps, operating systems, services
- `ai` - Artificial intelligence, machine learning
- `vitenskap` - Science, research, discoveries
- `sikkerhet` - Cybersecurity, privacy, hacking
- `elbil` - Electric vehicles, charging, autonomous driving

## Content Formatting

The `content` field supports HTML. Use these tags:

```html
<p>Paragraph text</p>

<h2>Section Heading</h2>

<h3>Sub-heading</h3>

<ul>
    <li>Bullet point</li>
</ul>

<ol>
    <li>Numbered item</li>
</ol>

<blockquote>Quote or highlight</blockquote>

<strong>Bold text</strong>

<em>Italic text</em>

<a href="https://example.com">Link text</a>
```

## Example: Adding a New Article

1. Open `/tech-news/js/articles.js`
2. Find the `ARTICLES` array
3. Add your article at the TOP (after the opening `[`)

```javascript
const ARTICLES = [
    // ADD NEW ARTICLES HERE (at the top)
    {
        id: "new-iphone-feature-announced",
        title: "Apple annonserer ny iPhone-funksjon som endrer alt",
        excerpt: "Den nye funksjonen vil være tilgjengelig for alle iPhone-brukere fra neste uke.",
        category: "mobil",
        author: "TechPuls AI",
        date: "2024-02-05",
        image: "",
        imageAlt: "iPhone med ny funksjon",
        featured: true,  // Set to true to make this the hero article
        popular: true,
        content: `
            <p>Apple har i dag annonsert en ny funksjon...</p>

            <h2>Slik fungerer det</h2>
            <p>Den nye funksjonen lar brukere...</p>

            <ul>
                <li>Første fordel</li>
                <li>Andre fordel</li>
            </ul>

            <blockquote>Dette er en game-changer for iPhone-brukere</blockquote>

            <p>Funksjonen rulles ut fra neste uke.</p>
        `
    },
    // ... existing articles below
];
```

## Tips for Good Articles

1. **Headlines**: Keep them clear and informative. Use Norwegian.
2. **Excerpts**: Summarize the key point in 1-2 sentences.
3. **Content structure**:
   - Start with an intro paragraph
   - Use `<h2>` for main sections
   - Use lists for features/specifications
   - Use blockquotes for important quotes
   - End with a conclusion or next steps
4. **Length**: Aim for 300-600 words
5. **Featured**: Only set ONE article as featured at a time

## Setting Featured Article

To change the featured (hero) article:
1. Set `featured: false` on the current featured article
2. Set `featured: true` on the new featured article

## Testing

Open `/tech-news/index.html` in a browser to see your changes.
- The featured article appears at the top
- Other articles appear in the grid below
- Popular articles appear in the sidebar

## File Structure

```
tech-news/
├── index.html          # Homepage
├── article.html        # Article view page
├── css/
│   └── style.css       # All styling
├── js/
│   ├── articles.js     # Article data (EDIT THIS)
│   └── app.js          # Application logic
├── articles/           # (Optional) Individual article JSON files
└── images/             # (Optional) Article images
```

## Advanced: Using Images

To add images to articles:
1. Save the image to `/tech-news/images/`
2. Set the `image` field to the relative path: `images/my-image.jpg`

Or use external URLs:
```javascript
image: "https://example.com/image.jpg"
```

If no image is provided, a category-specific placeholder is used automatically.
