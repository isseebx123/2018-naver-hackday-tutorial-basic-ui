import SideBar from './component/SideBar'
import Container from './component/Container'
const React = require('react');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activateFunction: 'SelectAll',
            // SelectContactAll, SelectContactByGroup, SelectContactByTag, SelectContactByName
            // InsertContact, ModifyContact, DeleteContact
            // SelectGroup, InsertGroup, ModifyGroup, RemoveGroup
            // FrequentlyUseContact
            // SelectDuplicateContact, SelectSimilarContact
            popup: false,
        };
    }

    _setActivateFunction(activateFunction){
        this.setState({
            activateFunction: activateFunction,
        })
    }

    render() {
        if(this.state.popup === true) {

        }
        return (
            <div>
                <SideBar />
                <Container />
            </div>
        )
    }
}

export default App;
