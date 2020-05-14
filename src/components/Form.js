import React from 'react';
import { Button, Input} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import PageviewIcon from '@material-ui/icons/Pageview';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
class form extends React.Component{
    constructor(props){
        super(props);

    }
render()
{
    return(
        <div class name="field">
        <div>
            <h1 className="si">Search for Company's Share Price</h1>
            </div>
        <form  className="search" noValidate autoComplete="on" onSubmit={this.props.loadstock}>
        <Input type="text"required placeholder="Search" name="stock" inputProps={{ 'aria-label': 'description' }} id="st" size="Large" />
        <button className="se" id="st" type="submit"><SearchIcon /></button>
        
        </form>
        </div>
    );
}

}
export default form;