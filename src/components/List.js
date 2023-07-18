import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="BMW" ano={1997}/>
                <Item marca="Ferrari" ano={2020} />
                <Item marca="Porshe" ano={1982} />
                <Item  />
            </ul>
        </>
    )
}

export default List