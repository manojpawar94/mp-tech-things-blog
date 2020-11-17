import DefaultLayout from '@layouts/DefaultLayout'
import Link from 'next/link'
import { getAllPosts } from '@api/python-index'
import { getConfig } from '@api/index'

export default function PythonPostHome(props) {
    return (
        <DefaultLayout title={props.title} description={props.description}>
             <div className="container">
                <div className="row">
                    {props.posts.map(function (post, idx) {
                        return (
                            <div key={idx} className="card">
                                <h3>
                                    <Link href={'/posts/python/' + post.slug}>
                                        <a>{post.title}</a>
                                    </Link>
                                </h3>
                                <p>{post.author} | {post.timestamp}</p>
                                <p>{post.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </DefaultLayout>
    )
}

export async function getStaticProps() {
    const config = await getConfig()
    const allPosts = await getAllPosts()

    return {
        props: {
            posts: allPosts,
            title: config.title,
            description: config.description
        }
    }
}
