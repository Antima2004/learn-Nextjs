//Error Handling Example
function getRandomInt(count:number){
    return Math.floor(Math.random()*count);
}



export default function ProductDetailsLayout({
    children,
}:{
    children:React.ReactNode;
}){
     // error handling example
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error loading products");
    }

    return(
        <>
        {children}
        <h2>feature products</h2>
        </>
    );

}