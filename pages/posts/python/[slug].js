import PostLayout from 'pages/_layouts/PostLayout'
import { getAllPosts } from "pages/_api/python-index"
import { getPostBySlug } from 'pages/_api/index'

export default function Post(props) {
    return <PostLayout title={props.post.title} content={props.post.content} posts={props.posts}  topic={props.topic} />
}

export async function getStaticProps(context) {
    return {
        props: {
            post: await getPostBySlug('python', context.params.slug),
            posts: await getAllPosts(),
            topic : 'python'
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