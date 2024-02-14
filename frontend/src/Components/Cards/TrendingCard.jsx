import React from 'react'
import { Link } from 'react-router-dom'

const TrendingCard = ({ data }) => {

    return (
        <Link to={data.link}>
            <div >
                <div class="w-96 bg-white border border-gray-200 rounded-lg shadow  ">
                    <a href="#">
                        <img class="rounded-t-lg object-cover h-40 w-full" src={data.image} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-xl font-normal tracking-tight text-gray-900 ">{data.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 ">{data.description}</p>
                    </div>
                </div>
            </div >
        </Link>
    )
}

export default TrendingCard