import React, {Component} from 'react';
import './App.css';
import PrimarySearchAppBar from "./PrimarySearchAppBar";

import Airplane from '@material-ui/icons/AirplanemodeActive';

class App extends Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <PrimarySearchAppBar/>
                <Airplane className="miring"/>
            </div>
        )
    }
}

export default App;
