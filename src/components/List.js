import React, { useState } from 'react'
import axios from 'axios'

const List = () => {

    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)

    const searchRepositories = (e) => {
        e.preventDefault()

        setIsError(null)
        setIsLoading(true)

        // Promise.all([
        //     api.get('/users/diego3g'),
        //     api.get('/phones/diego3g'),
        //   ]).then([user, phones] => {
        //     console.log(user);
        //     console.log(phones);
        //   });
        let searchReturned = 0
        searchReturned = document.getElementById("busca").value
        console.log("retorno escrito: ", searchReturned)
        let finalList = []

        axios
            // .get(`https://api.github.com/users/${searchReturned}/repos`)
            .get(`https://api.github.com/search/repositories?q=${searchReturned}+language:assembly&sort=stars&order=desc`)
            .then(response => {
                console.log(response)
                console.log("entrou get")
                let data = response.data

                if (data.items.length > 0) {
                    console.log("antes for")
                    data.items.forEach(element => {
                        console.log("dentro for", element)
                        finalList.push({
                            avatar: element.owner.avatar_url,
                            name: element.owner.login,
                            repo: element.name,
                            link: element.html_url
                        })
                    })
                    console.log("final list> ", finalList)
                    setList(finalList)
                } else {
                    setIsError("não achamos nada na sua busca")
                }
            })
            .catch(() => {
                setIsError("deu algum problema na requisiçao")
                console.log("entrou catch")
            })  
            .finally(() => {
                setIsLoading(false)
                console.log("entrou finally")
            })
    }

    const renderLoader = () => {
        if (isLoading){
            return(
                <p className="message load">loading...</p>
            )
        }
    }
    const renderError = () => {
        if (isError != null){
            return(
                <p className="message">{isError}</p>
            )
        }
    }

    const renderList = () => {
        if (!isLoading && !isError) {
            return list.map(item => (
            <a href={item.link}>
                <li>
                    <img src={item.avatar} className="profile-avatar" alt="imagem de perfil" />
                    <div className="profile-infos">
                        <h2>{item.name}</h2>
                        <p>{item.repo}</p>
                    </div>
                </li>   
            </a>
            ))
        }
    }

    return (
        <>
            <section className="body">
            <div className="submit-line">
                <form onSubmit={searchRepositories} >
                    <button className="submit-lente" type="submit">
                        <span><i class="fa fa-search"></i></span>
                    </button>
                    <input type="search" id="busca" name="search"/>
                </form>
            </div>
            </section>
            <section>
                {renderError()}
                {renderLoader()}
                <ul className="list-container">
                    {renderList()}
                </ul>      
            </section>
        </>
    )
}

export default List