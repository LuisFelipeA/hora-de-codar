import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="BMW"/>
                <Item marca="Ferrari"/>
            </ul>
        </>
    )
}

export default List