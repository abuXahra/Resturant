import friedPotato from '../images/egusi1.jpg'
import chips from '../images/chips1.jpg'
import fisherman from '../images/fisherman.jpg'
import coconutrice from '../images/coconutrice.jpg'


const buttonFunc = (action) => {
    return action;
}


export const PRODUCTS = [
    {
        productImg: friedPotato,
        productName: "Fried Potato",
        productPrice: "2500",
        productDescription: "Porridge Beans With Assorted Protein & Fried Plantain. Kidney shaped brown beans boiled and garnished with pepper, palmoil, onion seasoning cubes and salt",
        productCategory: "FRIES",
        cliFunk: buttonFunc,
    },
    {
        productImg: chips,
        productName: "Chips",
        productPrice: "2500",
        productDescription: "Porridge Beans With Assorted Protein & Fried Plantain. Kidney shaped brown beans boiled and garnished with pepper, palmoil, onion seasoning cubes and salt",
        productCategory: "FRIES",
        cliFunk: buttonFunc,
    },
    // {
    //     productImg: fisherman,
    //     productName: "fisherman",
    //     productPrice: "2500",
    //     productDescription: "Porridge Beans With Assorted Protein & Fried Plantain. Kidney shaped brown beans boiled and garnished with pepper, palmoil, onion seasoning cubes and salt",
    //     productCategory: "Fish"
    // },
    // {
    //     productImg: coconutrice,
    //     productName: "Coconut Rice",
    //     productPrice: "2500",
    //     productDescription: "Porridge Beans With Assorted Protein & Fried Plantain. Kidney shaped brown beans boiled and garnished with pepper, palmoil, onion seasoning cubes and salt",
    //     productCategory: "FRIES"
    // },

]