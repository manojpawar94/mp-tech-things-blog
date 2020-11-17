import GitHubRepoList from "@components/github-repo-component";
import DefaultLayout from "@layouts/DefaultLayout";
import Head from "next/head";

export default function Profilio() {
    return (
        <DefaultLayout>
            <Head>
                <title>Profilio</title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <GitHubRepoList />
                    </div>
                    <div className="col-sm-6">
                        <h3>LinkedIn Posts</h3>
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6721024408019836928" height="1136px" width="100%" frameborder="0" allowfullscreen="" scrolling="no" title="Embedded post"></iframe>
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6728305951742423040" height="470px" width="100%" frameborder="0" allowfullscreen="" scrolling="no" title="Embedded post"></iframe>
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6621647236990373888" height="900px" width="100%" frameborder="0" allowfullscreen="" scrolling="no" title="Embedded post"></iframe>
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6680330224418201600" height="636px" width="100%" frameborder="0" allowfullscreen="" scrolling="no" title="Embedded post"></iframe>
                    </div>
                </div>
            </div>

        </DefaultLayout>
    )
}