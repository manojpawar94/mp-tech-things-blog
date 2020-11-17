import DefaultLayout from '@layouts/DefaultLayout'
import Link from 'next/link'
import { getConfig } from '@api/index'
import { getAllPosts } from '@api/go-index'

export default function Home(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <div className="container">
        <div className="row">
          <h3>Go Programming Language Tutorials</h3>
        </div>
        <div className="row" style={{ marginLeft: '-15px', marginRight: '-15px' }}>
          {props.posts.map(function (post, idx) {
            if (idx > 3)
              return;
            return (
              <div key={idx} className="col-sm-4" style={{ padding: '0px' }}>
                <div className="card card-transit">
                  <h3>
                    <Link href={'/posts/go-lang/' + post.slug}>
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
        <div className="row">
          <h3>Design Pattern in Go Programming Language</h3>
        </div>
        <div className="row">
          <div className="col-sm-12 card">
            <div style={{ textAlign: 'center' }}>Comming Soon...!</div>
          </div>
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
