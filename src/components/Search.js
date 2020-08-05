import React, { Component, Fragment } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from './ImageResults';

class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '17776862-3f6fa9f6b734d6a3b873658a3',
        images: []
    }

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, ()=>{
            if(val === '') {
                this.setState({ images: [] })
            } else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({ images: res.data.hits }))
                .catch(err => console.error(err))
            }
        })
    }

    onAmountChange = (e, index, value) => {
        this.setState({ amount: value })
    }

    render() {
        console.log(this.state.images)
        return(
            <Fragment>
                <TextField 
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search for images"
                    hintText="For example, type traveller"
                    fullWidth={true}
                />
                <br />
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={20} primaryText="20" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="50" />
                </SelectField>
                <br />
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null }

            </Fragment>
        )
    }
}

export default  Search;