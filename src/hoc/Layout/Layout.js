import React, {Component} from "react";
import './Layout.css'
import MenuToggle from "../../components/Navigations/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigations/Drawer/Drawer";

class Layout extends Component {

    state = {
        menu: false
    }

    ToggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    onCloseHandler =() => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className='Layout'>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.onCloseHandler}
                />
                <MenuToggle
                    onToggle={this.ToggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;