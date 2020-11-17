import DefaultLayout from '@layouts/DefaultLayout'
import Link from 'next/link'
import { getAllPosts } from '@api/go-index'
import { getConfig } from '@api/index'

export default function GoLangPostHome(props) {
    return (
        <DefaultLayout title={props.title} description={props.description}>
            <div className="container">
                <div className="row">
                    {props.posts.map(function (post, idx) {
                        return (
                            <div key={idx} className="card card-transit">
                                <h3>
                                    <Link href={'/posts/go-lang/' + post.slug}>
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
/*
<a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
            <li key={idx}>
              <Link href={'/posts/go-lang/' + post.slug}>
                <a>{post.title} ::  {post.description}</a>
              </Link>
            </li>
          */
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
