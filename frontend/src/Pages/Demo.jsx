import React from 'react'
import CollectionCard from '../Components/Cards/CollectionCard/CollectionCard'

const Demo = () => {
    const data = {
        image: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
        title: "Slice into world pizza day",
        count: "32",
    }

    return (
        <div>
            <CollectionCard data={data} />
        </div>
    )
}

export default Demo