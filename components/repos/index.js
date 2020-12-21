import React from 'react'
import Link from 'next/link'
import { AiOutlineStar } from 'react-icons/ai';
import { GoRepo } from 'react-icons/go'

const Repos = ({ repos }) => {
    return (
        <div id='projects'>
            <div className='title'>
                <h1>Tech Contributions</h1>
                <GoRepo /><span> {repos.length}</span>
            </div>
            <div className='repos'>
                {repos.map(repo => {
                    return (
                        <div key={repo.id} className='repo'>
                            <Link href={repo.html_url}>
                                <div>
                                    <h1>{repo.full_name}</h1>
                                    <p>Language: {repo.language} / <AiOutlineStar />{repo.stargazers_count}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Repos