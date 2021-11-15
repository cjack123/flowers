//Step 1
const flowers = [
    {
        id: 1,
        color: "white",
        species: "rose",
        price: 0.90
    },
    {
        id: 2,
        color: "red",
        species: "tulip",
        price: 1.10
    },
    {
        id: 3,
        color: "pink",
        species: "sunflower",
        price: 0.10
    },


]
    

const newFlowerOne = {
    id: 4,
    color: "purple",
    species: "orchid",
    price: 1.71
}


const newFlowerTwo = {
    id: 5,
    color: "orange",
    species: "daisy",
    price: 0.65
}
console.log(flowers.length)
///////////////////////////////////////////////////////
// Step 2

const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxId = currentLastFlower.id
    const idForNewFlower = maxId + 1

    flowerObject.id = idForNewFlower
    flowers.push(flowerObject)
    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */


}

// addFlower(orchid)
// addFlower(tulip)

// console.log(flowers)

///////////////////////////////////////////////////////////////////////////
//Step 3
// why wont the function read the flower object outside of the array?
/////////////////////////////////////////////////////////////////////////////////
   /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */

const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

    for (const flower of flowers)  {
            if (flower.price >= 1.00) {
            expensiveFlowers.push(flower)    
            }

        }

    return expensiveFlowers  // Do not change this code
}

// console.log(findExpensiveFlowers())


///////////////////////////////////////////////////////////////////////////////
// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}




///////////////////////////////////
//Please ignore. This section is for testing/practice section. I am showing my work/thought process.////
////////////////////////////////////
// const flowerBouqet = 1

// for (flower of flowers)  {
//     if (flower.id === findExpensiveFlowers) {
//         flower.price => 1.00
//         console.log(`People love the ${flower.species} bouquets. Each flower cost ${flower.price}`)
//     }
// }

////////////////////////////////////////////////////////////////////

// const flowers = [
//     {
//         id: 1,
//         color: "white",
//         species: "rose",
//         price: 0.90
//     },
//     {
//         id: 2,
//         color: "red",
//         species: "tulip",
//         price: 1.10
//     },
//     {
//         id: 3,
//         color: "pink",
//         species: "sunflower",
//         price: 3.10
//     },


// ]
    

// const newFlowerOne = {
//     id: 4,
//     color: "purple",
//     species: "orchid",
//     price: 1.71
// }


// const newFlowerOne = {
//     id: 5,
//     color: "orange",
//     species: "daisy",
//     price: 0.65
// }

// ///////////////////////////////////////////////////////
// // Step 2

// const addFlower = (flowerObject) => {
//     const lastIndex = flowers.length - 1
//     const currentLastFlower = flowers[lastIndex]
//     const maxId = currentLastFlower.id
//     const idForNewFlower = maxId + 1

//     flowerObject.id = idForNewFlower
//     flowers.push(flowerObject)
    
// }

// // addFlower(orchid)
// // addFlower(tulip)

// // console.log(flowers)

// ///////////////////////////////////////////////////////////////////////////
// //Step 3
// const findExpensiveFlowers = () => {
//     const expensiveFlowers = []  // Do not change this code

//     for (const flower of flowers)  {
//             if (flower.price >= 1.00) {
//             expensiveFlowers.push(flower)    
//             }

//         }

//     return expensiveFlowers  // Do not change this code
// }

// console.log(findExpensiveFlowers())