import React from 'react';
import Header from '../../components/header/header';

class Page extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div>
                    This is the Page Grid
                </div>
            </React.Fragment>
        )
    }
}
export default Page;