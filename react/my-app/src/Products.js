// import {React,Component} from "react"
// class Products extends Component{
//     render(){
//         return(
//             <div className="sur">Iam a class component</div>
//         )
//     }
// }
// export default Products;

// import {React} from "react"
// const Products =()=>{
    
//         return(
//             <div className="sur">Iam a functional component</div>
//         )
    
// }
// export default Products;


import {React} from "react"
const Products =(Props)=>{
    
        return(
            <div className="sur">my name is {Props.name} my model number is{Props.model}</div>
        )
    
}
export default Products;



