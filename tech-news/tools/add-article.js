#!/usr/bin/env node
/**
 * TechPuls Article Publisher
 *
 * A CLI tool for AI to add new articles to TechPuls.
 * Can be run directly or imported as a module.
 *
 * Usage:
 *   node add-article.js --title "..." --category "ai" --content "..."
 *
 * Or programmatically:
 *   const { addArticle } = require('./add-article');
 *   addArticle({ title: "...", category: "ai", content: "..." });
 */

const fs = require('fs');
const path = require('path');

const ARTICLES_FILE = path.join(__dirname, '..', 'js', 'articles.js');

/**
 * Generate a URL-safe slug from a title
 */
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[æ]/g, 'ae')
        .replace(/[ø]/g, 'o')
        .replace(/[å]/g, 'a')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .substring(0, 60);
}

/**
 * Get today's date in ISO format
 */
function getTodayDate() {
    return new Date().toISOString().split('T')[0];
}

/**
 * Format article content as HTML if it's plain text
 */
function formatContent(content) {
    // If content already has HTML tags, return as-is
    if (content.includes('<p>') || content.includes('<h2>')) {
        return content;
    }

    // Convert plain text paragraphs to HTML
    return content
        .split('\n\n')
        .map(paragraph => `<p>${paragraph.trim()}</p>`)
        .join('\n\n');
}

/**
 * Create a new article object
 */
function createArticle(options) {
    const {
        title,
        excerpt,
        category,
        content,
        author = 'TechPuls AI',
        date = getTodayDate(),
        image = '',
        imageAlt = '',
        featured = false,
        popular = false
    } = options;

    if (!title || !category || !content) {
        throw new Error('title, category, and content are required');
    }

    // Generate excerpt if not provided
    const finalExcerpt = excerpt || content
        .replace(/<[^>]+>/g, '')
        .substring(0, 150)
        .trim() + '...';

    return {
        id: generateSlug(title),
        title,
        excerpt: finalExcerpt,
        category,
        author,
        date,
        image,
        imageAlt: imageAlt || title,
        featured,
        popular,
        content: formatContent(content)
    };
}

/**
 * Add a new article to articles.js
 */
function addArticle(options) {
    const article = createArticle(options);

    // Read current file
    let fileContent = fs.readFileSync(ARTICLES_FILE, 'utf8');

    // Find the ARTICLES array and insert new article at the top
    const insertPoint = fileContent.indexOf('const ARTICLES = [') + 'const ARTICLES = ['.length;

    // Format the new article as JavaScript
    const articleJS = `
    {
        id: "${article.id}",
        title: "${article.title.replace(/"/g, '\\"')}",
        excerpt: "${article.excerpt.replace(/"/g, '\\"')}",
        category: "${article.category}",
        author: "${article.author}",
        date: "${article.date}",
        image: "${article.image}",
        imageAlt: "${article.imageAlt.replace(/"/g, '\\"')}",
        featured: ${article.featured},
        popular: ${article.popular},
        content: \`${article.content}\`
    },`;

    // Insert the new article
    fileContent = fileContent.slice(0, insertPoint) + articleJS + fileContent.slice(insertPoint);

    // Write back to file
    fs.writeFileSync(ARTICLES_FILE, fileContent);

    console.log(`Article added: ${article.id}`);
    console.log(`Title: ${article.title}`);
    console.log(`Category: ${article.category}`);
    console.log(`Date: ${article.date}`);
    console.log(`Featured: ${article.featured}`);

    return article;
}

/**
 * Parse command line arguments
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const options = {};

    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace('--', '');
        const value = args[i + 1];

        if (key === 'featured' || key === 'popular') {
            options[key] = value === 'true';
        } else {
            options[key] = value;
        }
    }

    return options;
}

// Run CLI if called directly
if (require.main === module) {
    const options = parseArgs();

    if (!options.title) {
        console.log(`
TechPuls Article Publisher

Usage:
  node add-article.js --title "Article Title" --category "ai" --content "<p>Content...</p>"

Options:
  --title      Article headline (required)
  --category   One of: mobil, pc, gaming, software, ai, vitenskap, sikkerhet, elbil (required)
  --content    Full article HTML content (required)
  --excerpt    Short summary (optional, auto-generated if not provided)
  --author     Author name (default: "TechPuls AI")
  --date       Publication date YYYY-MM-DD (default: today)
  --image      Image URL (optional)
  --imageAlt   Image alt text (optional)
  --featured   Set as featured article: true/false (default: false)
  --popular    Show in popular list: true/false (default: false)

Example:
  node add-article.js \\
    --title "Apple lanserer ny iPhone" \\
    --category "mobil" \\
    --excerpt "Apple har annonsert sin nyeste iPhone med revolusjonerende funksjoner." \\
    --content "<p>Apple har i dag avduket...</p><h2>Nye funksjoner</h2><p>Den nye modellen...</p>" \\
    --featured true
        `);
        process.exit(1);
    }

    try {
        addArticle(options);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

module.exports = { addArticle, createArticle, generateSlug };
