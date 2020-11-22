import matter from 'gray-matter'

export async function getAllPosts() {
    const context = require.context('../_posts/python', false, /\.md$/)
    const posts = []
    for (const key of context.keys()) {
        const post = key.slice(2);
        const content = await import(`../_posts/python/${post}`);
        const meta = matter(content.default)
        posts.push({
            slug: post.replace('.md', ''),
            title: meta.data.title,
            description: meta.data.description,
            timestamp : meta.data.timestamp,
            author: meta.data.author
        })
    }
    return posts;
}