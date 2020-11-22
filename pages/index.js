import DefaultLayout from 'pages/_layouts/DefaultLayout'
import Link from 'next/link'
import { getConfig } from 'pages/_api/index'
import { getAllPosts as getGoLangAllPost } from 'pages/_api/go-index'
import { getAllPosts as getPythonAllPost } from 'pages/_api/python-index'
import { getAllPosts as getSparkAllPost } from 'pages/_api/spark-index'

export default function Home(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <div className="container">
        <div className="row">
          <h3 className="title">Apache Spark Tutorials</h3>
        </div>
        <div className="row">
          {props.sparkPosts.map(function (post, idx) {
            if (idx > 3)
              return;
            return (
              <div key={idx} className="col-sm-4" style={{ padding: '0px' }}>
                <div className="card card-transit">
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
        <div className="row">
          <h3 className="title">Go Language Tutorials</h3>
        </div>
        <div className="row">
          {props.goPosts.map(function (post, idx) {
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
          <h3 className="title">Python Tutorials</h3>
        </div>
        <div className="row">
          {props.pythonPosts.map(function (post, idx) {
            if (idx > 3)
              return;
            return (
              <div key={idx} className="col-sm-4" style={{ padding: '0px' }}>
                <div className="card card-transit">
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
        <div className="row">
          <h3 className="title">Design Pattern in Go Language</h3>
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
  const allGoLangPosts = await getGoLangAllPost()
  const allPythonPosts = await getPythonAllPost()
  const allSparkPosts = await getSparkAllPost()

  return {
    props: {
      goPosts: allGoLangPosts,
      pythonPosts: allPythonPosts,
      sparkPosts: allSparkPosts,
      title: config.title,
      description: config.description
    }
  }
}
