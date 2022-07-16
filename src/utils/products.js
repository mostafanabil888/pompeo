import datashop from '../data/datashop.json'
export const getProducts = () => {
    return datashop
}

export function getProductbytitle (title) {
    const producttitle = title.replace("-"," "); 
    return datashop.find((product) => product.title === producttitle)  
}
  