import React, { useState } from 'react'
import axios from 'axios'

const List = () => {

    const [list, setList] = useState([])

    const searchRepositories = () => {
        axios.get('url')
            .then(response => {
                console.log(response)
                setList(response.data)
            })
    }

    const renderList = (list) => {
        return list.map(item => (
            <li>
                <img src={item.avatar} className="profile-avatar" />
                <div className="profile-infos">
                    <h2>{item.Name}</h2>
                    <p>{item.repName}</p>
                </div>
            </li>
        ))
    }

    // const mock = {
    //     profile1: [
    //         avatar = "foto",
    //         nome = "A",
    //         repositorio = "Conqueor"
    //     ],
    //     profile2: [
    //         avatar = "foto",
    //         nome = "B",
    //         repositorio = "Eletrocutar"
    //     ],
    //     profile3: [
    //         avatar = "foto",
    //         nome = "C",
    //         repositorio = "Impeto"
    //     ],
    // }

    return (
        <section >
            <ul className="list-container">
                <li>
                    <img className="profile-avatar" />
                    <div className="profile-infos">
                        <h2>Fulano</h2>
                        <p>Projeto de React</p>
                    </div>
                </li>
                <li>
                    <img className="profile-avatar" />
                    <div className="profile-infos">
                        <h2>Fulano</h2>
                        <p>Projeto de React</p>
                    </div>
                </li>
                <li>
                    <img className="profile-avatar" />
                    <div className="profile-infos">
                        <h2>Fulano</h2>
                        <p>Projeto de React</p>
                    </div>
                </li>
                <li>
                    <img className="profile-avatar" />
                    <div className="profile-infos">
                        <h2>Fulano</h2>
                        <p>Projeto de React</p>
                    </div>
                </li>
                <li>
                    <img className="profile-avatar" />
                    <div className="profile-infos">
                        <h2>Fulano</h2>
                        <p>Projeto de React</p>
                    </div>
                </li>
            </ul>
            
        </section>
    )
}

export default List

// const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];
// 	return (
// 		<ul>
// 			{ tarefas.map(tarefa => <li>{ tarefa }</li>) }
// 		</ul>