async function iegutDarglietasNoApi() {
    let datiNoApi=await fetch('https://fakestoreapi.com/products/category/jewelery');
    let datiJson=await datiNoApi.json;
    console.log(datiJson);
    //return datiJson;
    
}
async function iegutApgerbusNoApi() {
    let datiNoApi=await fetch('https://fakestoreapi.com/products/category/women%20clothing');
    let datiJson= await datiNoApi.json;
    console.log(datiJson);
    //return datiJson;
}
async function iegutdarbaLaiksNoApi() {
    let datiNoApi=await fetch('https://skolotaja.github.io/Dati/darbaLaiks.json');
    let datiJson= await datiNoApi.json;
    console.log(datiJson);
    //return datiJson;
}