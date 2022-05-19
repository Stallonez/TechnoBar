import { useState } from "react";
import Card from "../Card/Card";
import InfoCard from "../InfoCard/InfoCard";
import ModalDialog from "../ModalDialog/ModalDialog";

const Home = (props) => {

    const [state, setState] = useState(false);

    let getState = (state) => setState(state);


    return <div>
        <h1>HOME</h1>
        <div onClick={() => {
            return getState(true)
        }
        } >
            <Card />
        </div>
        <ModalDialog toggle={state} getState={getState}>
            <InfoCard />
        </ModalDialog>
    </div>
}

export default Home;


// const Home = (props)=>{
//     return <div>

//     </div>
// }

// export default Home;