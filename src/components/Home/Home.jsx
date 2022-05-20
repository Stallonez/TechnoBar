import { useState } from "react";
import Card from "../Card/Card";
import InfoCard from "../InfoCard/InfoCard";
import ModalDialog from "../ModalDialog/ModalDialog";
import './Home.css';

const Home = (props) => {

    const [state, setState] = useState(false);

    let getState = (state) => setState(state);
    console.log(props.notesItems);

    return <div>
        <h1>HOME</h1>
        <div onClick={() => {
            return getState(true)
        }
        } >
            <div className="row-cards">
                {props.notesItems.notebook_Asus_Data.map(item => {
                    return <Card item={item} />
                })}
            </div>
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