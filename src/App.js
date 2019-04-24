import React, {Component} from 'react';
import './App.css';
import Navbar from "./PrimarySearchAppBar";
import HotelCard from "./HotelCard";

import Smap from './SampleMap';

class App extends Component {
    state = {
        open: false,
        hotels: [
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
            {nama: 'Lorem Ipsum', tanggal: '12 September 2019', deskrpsi: 'Lorem ipsum sit dolor amet'},
        ]
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState({hotels : this.state.hotels});
    }

    render() {
        return (
            <div className="row">
                <div className="col m12">
                    <Navbar/>
                    <Smap/>
                    <br/>
                    <div className="row">
                        <div className="col m5">
                            {this.state.hotels.map((data, key) => {
                                return (
                                    <div key={key}>
                                        <HotelCard title={data.nama} tanggal={data.tanggal} deskripsi={data.deskrpsi}/>
                                        <br/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col m6">
                            <h1>MAPS HERE</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
