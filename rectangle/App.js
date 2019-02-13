// Render the rectangle using React!
// const App = (props) => {
//     let { rectangle } = props;
//     return (
//         <span>rectangle</span>
//     )
// }

const App = (props) => {
    let { rectangle } = props;
    console.log (rectangle);
    return (
        <div style={{width:rectangle.width, height:rectangle.height, backgroundColor:rectangle.color}}></div>
    )
};

{/* <App name="rectangle"/> */}


// // sau dday la tap thoi

// let adamsFunc = (parameter) => {
//     console.log(parameter)
// };

// adamsFunc({name:"adam"});

// // ^ That's how FUNCTIONS work

// // props is convention but it could be anything really
// let AdamsComponent = (props) => {
//     return <div>{props.name}</div>
// };

{/* <AdamsComponent name="adam"/> */}