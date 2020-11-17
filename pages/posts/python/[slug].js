import PostLayout from '@layouts/PostLayout'
import { getAllPosts } from "@api/python-index"
import { getPostBySlug } from '@api/index'

export default function Post(props) {
    return <PostLayout title={props.title} content={props.content} />
}

export async function getStaticProps(context) {
    return {
        props: await getPostBySlug('python',context.params.slug)
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