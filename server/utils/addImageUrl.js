const { serverUrl } = require("../config/config");

const addImageUrl=(objectArg)=>{
    return {
        ...objectArg,
        images: objectArg?.images?.map((image)=>`${serverUrl}/uploads/${image}`)
    }
}

module.exports = addImageUrl