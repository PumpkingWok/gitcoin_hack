import React, { Component } from 'react';
import { MetaMaskButton, Button, Field, Form, Select, Slider } from 'rimble-ui';
import './NewCampaign.css';
import { Connectors } from 'web3-react';

class NewCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bag: 'Paper',
            name: '',
            address: '',
            cost: '',
            reward: '',
            startDate: '',
            endDate: '',
            invalidData: true,
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.invalidData = !(nextState.bag
                                && nextState.name
                                && nextState.address
                                && nextState.cost
                                && nextState.reward
                                && nextState.startDate
                                && nextState.endDate)
        console.log(this.state);
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        console.log(this.state);
    }

    isFormValid(e) {
        return
    }

    render() {
        return (
            <div>
            <div className='hero'>
                <p>Hello Kevin,</p>
                <h2 className='greeting'>New Campaign</h2>
                <MetaMaskButton.Outline>
                    Connect With MetaMask
                </MetaMaskButton.Outline>
            </div>
            <div className='form'>
                <Field label='Choose your color bag'>
                    <Select
                        name='bag'
                        value={this.state.value}
                        required={true}
                        onChange={this.handleChange}
                        items={[
                            "Paper",
                            "Plastic",
                            "Fabric",
                            "Metal",
                            "Glass",
                            "Compost",
                            "AHP",
                            "Battery"
                        ]}
                     />
                </Field>
                <Field label='Name'>
                    <input
                        name='name'
                        type='text'
                        required={true}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </Field>
                <Field label='Address'>
                    <input
                        name='address'
                        type='text'
                        required={true}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </Field>
                <Field label='Cost'>
                    <input
                        name='cost'
                        type='text'
                        required={true}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </Field>
                <Field label='From'>
                    <input
                        name='startDate'
                        type='date'
                        required={true}
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                </Field>
                <Field label='To'>
                    <input
                        name='endDate'
                        type='date'
                        required={true}
                        selected={this.state.endDate}
                        onChange={this.handleChange}
                    />
                </Field>
                <Field label='Reward per bag'>
                    <input
                        name='reward'
                        type='text'
                        required={true}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </Field>
                <Button disabled={this.state.invalidData} onClick={this.onSubmit}>Create Campaign</Button>
            </div>
        </div>
        );
    }
}
export default NewCampaign;
