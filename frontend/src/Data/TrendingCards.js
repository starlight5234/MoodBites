const TrendingCards = {
    order_online: {
        title: 'Order Online',
        description: "Stay home and order to your doorstep",
        image: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        link: "/order-food-online"
    },
    dining: {
        title: 'Dining',
        description: "View the city's favorite dining venues",
        image: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        link: "/dine-out"
    },
    nightlife_clubs: {
        title: 'Nightlife and Clubs',
        description: "Explore the city's top nightlife outlets",
        image: "https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        link: "/drinks-and-nightlife"
    }
};

const trendingCardsArray = Object.values(TrendingCards);

export default trendingCardsArray;
