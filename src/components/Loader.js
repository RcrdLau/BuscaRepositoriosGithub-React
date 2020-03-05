import React from 'react'
import { useSelector } from 'react-redux'
import LoaderImage from 'assets/loader.gif'

const Loader = () => {
    const loader = useSelector(state => state.loader)

    return (
        <>
            {loader && (
                <img className="loader" alt="carregando..." src={LoaderImage} />
            )}
        </>
    )
}
export default Loader