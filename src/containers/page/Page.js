import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Header from '../../components/header/header';

class Page extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Header />
            </React.Fragment>
        )
    }
}
export default Page;