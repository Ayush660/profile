import ReactLoading from "react-loading";

const Load = () => {
    return ( 
        <div className="load">
            <ReactLoading type="spinningBubbles" color="white" height="30%" width="30%"/>
        </div>
     );
}
 
export default Load;