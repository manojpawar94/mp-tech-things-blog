import DefaultLayout from 'pages/_layouts/DefaultLayout'
import Link from 'next/link'
import { getAllPosts } from 'pages/_api/python-index'
import { getConfig } from 'pages/_api/index'
import Image from 'next/image'

export default function PythonPostHome(props) {
    return (
        <DefaultLayout title={props.title} description={props.description}>
            <div className="container">
                <div className="col-sm-12">
                    <Image
                        src="/images/python/home-banner.jpg"
                        alt="golang-banner"
                        width="1200"
                        height="500"
                        loading="lazy"
                    />
                </div>
                <div className="row">
                    {props.posts.map(function (post, idx) {
                        return (
                            <div className="col-sm-6" style={{ padding: '0px' }}>
                                <div key={idx} className="card card-transit">
                                    <h3>
                                        <Link href={'/posts/python/' + post.slug}>
                                            <a>{post.title}</a>
                                        </Link>
                                    </h3>
                                    <p>{post.author} | {post.timestamp}</p>
                                    <p>{post.description}</p>
                                </div>
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
