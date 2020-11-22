import matter from 'gray-matter'
import marked from 'marked'
import yaml from 'js-yaml'

export async function getPostBySlug(topic, slug) {
    console.log(`${topic}::${slug}`)
    const fileContent = await import(`../_posts/${topic}/${slug}.md`)
    const meta = matter(fileContent.default)
    const content = marked(meta.content)
    return {
        title: meta.data.title,
        content: content
    }
}

export async function getConfig() {
    const config = await import(`../../config.yml`)
    return yaml.safeLoad(config.default)
}