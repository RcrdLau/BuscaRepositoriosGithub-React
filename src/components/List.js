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

        let finalList = []

        axios
            .get('https://api.github.com/users/rcrdlau/repos')
            .then(response => {
                console.log(response)
                console.log("entrou get")
                let data = response.data

                if (data.length > 0) {
                    console.log("antes for")
                    data.forEach(element => {
                        console.log("dentro for", element)
                        finalList.push({
                            avatar: element.owner.avatar_url,
                            name: element.owner.login,
                            repo: element.name,
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
                <p>loading...</p>
            )
        }
    }
    const renderError = () => {
        if (isError != null){
            return(
                <p>{isError}</p>
            )
        }
    }

    const renderList = () => {
        if (!isLoading && !isError) {
            return list.map(item => (
                <li>
                    <img src={item.avatar} className="profile-avatar" />
                    <div className="profile-infos">
                        <h2>{item.name}</h2>
                        <p>{item.repo}</p>
                    </div>
                </li>
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
            <section >
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