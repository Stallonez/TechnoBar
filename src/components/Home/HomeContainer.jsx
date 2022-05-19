import { useState } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import InfoCard from "../InfoCard/InfoCard";
import ModalDialog from "../ModalDialog/ModalDialog";
import Home from "./Home";

const HomeContainer = (props) => {

    const [state, setState] = useState(false);

    let getState = (state) => setState(state);


    return <div>
        <Home {...props} />
    </div>
}

let mapStateToProps = (state) => {
    return {
        notesItems: state.notebook_Data,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


// const Home = (props)=>{
//     return <div>

//     </div>
// }

// export default Home;