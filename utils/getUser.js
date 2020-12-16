
const getUser = async (username) => {
    const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    const originalrepos = await resRepos.json()

    const dontShowRepos = ['Felipe-martins1/exercicios-modulos-e-testes-unitarios']
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
    const isNotFork = repo => !repo.fork
    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        html_url: repo.html_url
    })

    const repos = originalrepos.filter(isNotFork).filter(dontShowFilter).map(extractData)
    return repos
}

export default getUser

