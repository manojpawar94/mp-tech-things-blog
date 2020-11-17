import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

export default function GitHubRepoList() {
    const { data, error } = useSWR('https://api.github.com/users/manojpawar94/repos', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)
    return (
        <div>
            <h3>My GitHub Repositories</h3>
            {
                data.map((github,index) => (
                    <GitHubRepoCard key={index} {...github} />
                ))
            }
        </div>
    )
}

function GitHubRepoCard(props) {
    console.log(props);
    return (
        <div className="card card-transit ">
            <a href={props.html_url}><h3>{props.name}</h3></a>
            <p>{props.description}</p>
        </div>
    )
}