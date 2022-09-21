function iegutDarglietasNoApi() {
    let datiNoApi=fetch('https://fakestoreapi.com/products/category/jewelery');
    let datiJson=await datiNoApi;
    console.log(datiJson);
    
}