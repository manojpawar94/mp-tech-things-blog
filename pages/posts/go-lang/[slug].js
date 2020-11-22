import PostLayout from '_layouts/PostLayout'
import { getAllPosts } from "_api/go-index"
import { getPostBySlug } from '_api/index'

export default function Post(props) {
    return <PostLayout title={props.post.title} content={props.post.content} posts={props.posts}  topic={props.topic} />
}

export async function getStaticProps(context) {
    return {
        props: {
            post: await getPostBySlug('go-lang', context.params.slug),
            posts: await getAllPosts(),
            topic : 'go-lang'
        }
    }
}
export async function getStaticPaths() {
    let paths = await getAllPosts()
    paths = paths.map(post => ({
        params: {
            slug: post.slug
        }
    }));
    return {
        paths: paths,
        fallback: false
    }
}