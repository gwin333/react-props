// Render the circles using React!
// const App = (props) => {
//     let { circles } = props;
//     return (
//         <span>circles</span>
//     )
// }

const App = (props) => {
    let { circles } = props;
    console.log (circles);
    return (
        <div style={{width:circles.radius, height:circles.radius, borderRadius:circles.radius, backgroundColor:circles.color}}></div>
    )
};

const Circle = null;  // CHALLENGE: Write a separate Circle component for use in the App component