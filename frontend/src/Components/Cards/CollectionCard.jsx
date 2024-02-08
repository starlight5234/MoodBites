import React from 'react'

const CollectionCard = () => {
    return (
        <div className="min-w-250 max-w-280 min-h-300 max-h-330 relative m-5 rounded-md cursor-pointer">
            <img className="absolute w-full h-full rounded-md object-cover brightness-60" src="https://zomatoclone.koushilmankali.in/images/cathcthematch.jpg" alt="collection card" />
            <div className="absolute bottom-10 left-10 text-white">
                <div className="text-lg">Title</div>
                <div className="text-sm">
                    <span className="">Place-0-1</span>
                    <span className=""> Places</span>
                    <span className="">
                        {/* <img className="w-10 h-10 invert" src={rightArrow} alt="right arrow" /> */}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard