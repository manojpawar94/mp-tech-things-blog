import DefaultLayout from '@layouts/DefaultLayout'
import Head from 'next/head'
import Link from 'next/link'

export default function PostLayout(props) {
    return (
        <DefaultLayout>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <article className="card">
                            <div dangerouslySetInnerHTML={{ __html: props.content }} />
                        </article>
                    </div>
                    <div className="col-sm-3">

                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}