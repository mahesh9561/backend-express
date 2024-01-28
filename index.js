const express = require('express');

const app = express()
const port = 3000
const githubData = {
    "login": "Mahi9561",
    "id": 115930797,
    "node_id": "U_kgDOBuj2rQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/115930797?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Mahi9561",
    "html_url": "https://github.com/Mahi9561",
    "followers_url": "https://api.github.com/users/Mahi9561/followers",
    "following_url": "https://api.github.com/users/Mahi9561/following{/other_user}",
    "gists_url": "https://api.github.com/users/Mahi9561/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Mahi9561/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Mahi9561/subscriptions",
    "organizations_url": "https://api.github.com/users/Mahi9561/orgs",
    "repos_url": "https://api.github.com/users/Mahi9561/repos",
    "events_url": "https://api.github.com/users/Mahi9561/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Mahi9561/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-10-16T12:21:14Z",
    "updated_at": "2022-12-04T18:08:55Z"
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('<h1>Hello Mahesh</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})