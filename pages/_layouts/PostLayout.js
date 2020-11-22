import DefaultLayout from 'pages/_layouts/DefaultLayout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function PostLayout(props) {
    return (
        <DefaultLayout>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <h3>Tutorials</h3>
                        {props.posts.map(function (post, idx) {
                            if (idx > 3)
                                return;
                            return (
                                <div key={idx} style={{ padding: '0px' }}>
                                    <div className="card card-transit">
                                        <Link href={'/posts/' + props.topic +'/' + post.slug}>
                                            <a>{post.title}</a>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-sm-9">
                        <article className="card">
                            <div dangerouslySetInnerHTML={{ __html: props.content }} />
                        </article>
                    </div>

                </div>
            </div>
        </DefaultLayout>
    )
}