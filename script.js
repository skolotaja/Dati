async function iegutDarglietasNoApi() {
    let datiNoApi=await fetch('https://fakestoreapi.com/products/category/jewelery');
    let datiJson=datiNoApi.json;
    console.log(datiJson);
    //return datiJson;
    
}
async function iegutApgerbus() {
    let datiNoApi=await fetch('https://fakestoreapi.com/products/category/women%20clothing');
    let datiJson=datiNoApi.json;
    console.log(datiJson);
    //return datiJson;
}