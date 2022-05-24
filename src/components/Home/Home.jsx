import { useState } from "react";
import Card from "../Card/Card";
import InfoCard from "../InfoCard/InfoCard";
import ModalDialog from "../ModalDialog/ModalDialog";
import './Home.css';

const Home = (props) => {

    const [state, setState] = useState(false);
    const [id, setStateId] = useState();

    let getState = (state) => setState(state);
    let getId = (id) => setStateId(id)

    return <div>
        <h1>HOME</h1>

        <div className="row-cards">
            {props.notesItems.notebook_Asus_Data.map(item => {
                return <div onClick={() => {
                    getId(item.id)
                    getState(true)
                }} >
                    <Card item={item} />
                </div>
            })}

        </div>
        <ModalDialog toggle={state} getState={getState}>
            <InfoCard
                id={id}
            />
        </ModalDialog>
    </div>
}

export default Home;


// const Home = (props)=>{
//     return <div>

//     </div>
// }

// export default Home;