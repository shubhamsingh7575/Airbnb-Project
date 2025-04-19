import data from "./data.js"

const modifieddata = data.data.map((dest) => {
    return {
        ...dest,
        image: dest.image.url
    }
})

console.log(modifieddata)