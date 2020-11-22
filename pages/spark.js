import DefaultLayout from '_layouts/DefaultLayout'
import Link from 'next/link'
import { getAllPosts } from '_api/spark-index'
import { getConfig } from '_api/index'
import Image from 'next/image'

export default function GoLangPostHome(props) {
    return (
        <DefaultLayout title={props.title} description={props.description}>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12" style={{padding: '0px'}}>
                        <Image
                            src="/images/spark/home-banner.jpg"
                            alt="spark-banner"
                            width="1200"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h2 style={{ padding: '20px' }}>Apache Spark Tutorial</h2>
                    </div>
                </div>

                <div className="row">

                    {props.posts.map(function (post, idx) {
                        return (
                            <div className="col-sm-6" style={{padding: '0px'}}>
                                <div key={idx} className="card card-transit">
                                    <h3>
                                        <Link href={'/posts/spark/' + post.slug}>
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
