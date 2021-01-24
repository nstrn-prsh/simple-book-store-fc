import React from 'react'

// const Wrapper = (props) => {
//     return ( 
//         <div className={props.center}>
//             {props.children}
//         </div>
//      );
// }

//  e46
const Wrapper =(WrapperComponent, className) =>{
    return (props)=>(
        <div className={className}>
            <WrapperComponent  {...props}/>
        </div>
    )
}
 
export default Wrapper;