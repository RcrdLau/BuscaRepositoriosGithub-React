import React from 'react'

const Body = () => {
    return (
        <section className="body">
            <div className="submit-line">
                <form  action=" " method="post">
                    <button className="submit-lente" type="submit">
                        <span><i class="fa fa-search"></i></span>
                    </button>
                    <input type="search" id="busca" name="search"/>
                </form>
            </div>
        </section>
    )
}

export default Body