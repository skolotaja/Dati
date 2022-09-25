async function iegutDarglietasNoApi() {
    let datiNoApi=await fetch('https://fakestoreapi.com/products/category/jewelery');
    let datiJson=datiNoApi.json;
    //console.log(datiJson);
    return datiJson;
    
}
async function iegutApgerbusNoApi() {
    let datiNoApi=await fetch('https://fakestoreapi.com/products/category/women%20clothing');
    let datiJson= datiNoApi.json;
    //console.log(datiJson);
    return datiJson;
}
async function iegutdarbaLaiksNoApi() {
    let datiNoApi=await fetch('https://skolotaja.github.io/Dati/darbaLaiks.json');
    let datiJson= await datiNoApi.json;
    //console.log(datiJson);
    return datiJson;
}
async function raditDatus() {
    let darglietasJson=await iegutDarglietasNoApi();
    let apgerbiJson= await iegutApgerbusNoApi();
    let produktiKopa=darglietasJson.concat(apgerbiJson);
    console.log(produktiKopa);
    for (let i =0;i<produktiKopa.length;i++)
        {
            console.log(produktiKopa[i]['title']); 
    }
raditDatus();
}