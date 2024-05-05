import React from 'react'
import { Link } from 'react-router-dom'

const HomepageCard = ({ data }) => {

    const { url, name, rest_type, rate, cost, votes } = data

    return (
        <Link to={url} className='mx-5 my-2 '>
            <div class="w-60 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name.length > 12 ? name.substring(0, 12) + '...' : name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <p className='text-xs font-medium'>{rest_type || ""}</p>
                    <div className='flex justify-between align-middle items-center'>
                        <p className='text-md font-bold'>₹ {cost}</p>
                        <div className='flex align-middle items-center space-x-1 bg-green-500 px-2 py-1 rounded-md text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            <p className='text-xs font-medium '>
                                {rate}</p>
                        </div>
                    </div>
                </p>
                <a href={url} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Order now
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </Link>
    )
}

export default HomepageCard