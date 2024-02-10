import { orderOnlinePage, diningOutPage, proAndProPlusPage, nightLifePage } from './Constants'
import filtersIcon from '../Assets/icons/filter.png';
import deliveryTimeIcon from '../Assets/icons/delivery-time.png';
import downArrowIcon from '../Assets/icons/down-arrow.png';

import biryaniCImg from '../Assets/icons/Food/biryaniC.png';
import burgerImg from '../Assets/icons/Food/burger.png';
import chickenImg from '../Assets/icons/Food/chicken.png';
import friesImg from '../Assets/icons/Food/fries.png';
import homestyleImg from '../Assets/icons/Food/homestyle.png';
import noodelsImg from '../Assets/icons/Food/noodels.png';
import pannerImg from '../Assets/icons/Food/panner.png';
import pizzaImg from '../Assets/icons/Food/pizza.png';
import sandwichImg from '../Assets/icons/Food/sandwich.png';
import shawarmaImg from '../Assets/icons/Food/shawarma.png';

import kfcImg from '../Assets/icons/Brands/kfc.png';
import pizzahutImg from '../Assets/icons/Brands/pizzahut.png';
import scoopsImg from '../Assets/icons/Brands/scoops.png';

import biryaniSCImg from '../Assets/images/Food/biryani.png';
import biryaniSCImg2 from '../Assets/images/Food/biryani2.png';
import chapathiImg from '../Assets/images/Food/chapathi.png';
import chickenSCImg from '../Assets/images/Food/chicken.png';
import fishImg from '../Assets/images/Food/fish.png';
import icecreamImg from '../Assets/images/Food/icecream.png';
import kfcSCImg from '../Assets/images/Food/kfc.png';
import pizzaSCImg from '../Assets/images/Food/pizza.png';
const TrendingCards = {
    order_online: {
        title: 'Order Online',
        description: "Stay home and order to your doorstep",
        image: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        link: orderOnlinePage
    },
    dining: {
        title: 'Dining',
        description: "View the city's favorite dining venues",
        image: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        link: diningOutPage
    },
    nightlife_clubs: {
        title: 'Nightlife and Clubs',
        description: "Explore the city's top nightlife outlets",
        image: "https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
        link: nightLifePage
    }
};

const CollectionCards = {
    slice_into_world_pizza_day: {
        image: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
        title: "Slice into world pizza day",
        count: "22",
    },
    its_a_date: {
        image: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
        title: "It's a date",
        count: "12",
    },
    conversation_starters: {
        image: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
        title: "Conversation starters",
        count: "15",
    },
    something_is_brewing: {
        image: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
        title: "Something is brewing",
        count: "32",
    }
};

const Listings = [
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "The Biery Library",
        rating: "4.5",
        imgSrc: "https://b.zmtcdn.com/data/pictures/9/18843699/565978a181e8ae4ab11218dd423e1695.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    },
    {
        link2: "",
        promoted: true,
        time: "25",
        offB: "asdf",
        proExtraB: "asdf",
        off: "asdf",
        proExtra: "something something",
        name: "Name hello",
        rating: "4",
        imgSrc: "https://zomatoclone.koushilmankali.in/images/Food/biryani.png"
    }

];

const foodCardScroll = [
    {
        name: "Biryani",
        imgSrc: biryaniCImg
    },
    {
        name: "Burger",
        imgSrc: burgerImg
    },
    {
        name: "Chicken",
        imgSrc: chickenImg
    },
    {
        name: "Fries",
        imgSrc: friesImg
    },
    {
        name: "Home Style",
        imgSrc: homestyleImg
    },
    {
        name: "Noodles",
        imgSrc: noodelsImg
    },
    {
        name: "Panner",
        imgSrc: pannerImg
    },
    {
        name: "Pizza",
        imgSrc: pizzaImg
    },
    {
        name: "Sandwich",
        imgSrc: sandwichImg
    },
    {
        name: "Shawarma",
        imgSrc: shawarmaImg
    },
]

const brandsCardScroll = [
    {
        name: "KFC",
        imgSrc: kfcImg,
        time: "45"
    },
    {
        name: "Pizza Hut",
        imgSrc: pizzahutImg,
        time: "35"
    },
    {
        name: "Scoops",
        imgSrc: scoopsImg,
        time: "49"
    },
    {
        name: "KFC",
        imgSrc: kfcImg,
        time: "19"
    },
    {
        name: "Pizza Hut",
        imgSrc: pizzahutImg,
        time: "22"
    },
    {
        name: "Scoops",
        imgSrc: scoopsImg,
        time: "33"
    },
]

const CollectionCardsArray = Object.values(CollectionCards)
const TrendingCardsArray = Object.values(TrendingCards);

export { TrendingCardsArray, CollectionCardsArray, foodCardScroll, brandsCardScroll, Listings };
