import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { MetaMaskButton, Button, Field, Form, Select, Slider } from 'rimble-ui';
import './NewCampaign.css';
import axios from 'axios';
import Web3Provider, { useWeb3Context, Web3Consumer, Connectors } from 'web3-react';
import { ethers } from "ethers";

const { InjectedConnector, NetworkOnlyConnector } = Connectors
const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })
const connectors = { MetaMask }

function NewCampaign() {
    return (
    <Web3Provider connectors={connectors} libraryName="ethers.js">
      <div className="App">
        <Web3Component />
      </div>
    </Web3Provider>
    );
}

function Web3Component() {
  const context = useWeb3Context();

  console.log(context);

  if (context.error) {
    console.error("Error!");
  }

  const [transactionHash, setTransactionHash] = React.useState();

  function sendTransaction() {
    const signer = context.library.getSigner();

    signer
      .sendTransaction({
        to: ethers.constants.AddressZero,
        value: ethers.utils.bigNumberify("0")
      })
      .then(({ hash }) => {
        setTransactionHash(hash);
      });
  }

  return (
      <div>
        <MetaMaskButton.Outline
            onClick={() => context.setConnector('MetaMask')}>
            Connect With MetaMask
        </MetaMaskButton.Outline>
        <NewCampaignC />
        <Web3ConsumerComponent />
      </div>
  );
}

function Web3ConsumerComponent() {
  return (
    <Web3Consumer>
      {context => {
        const { active, connectorName, account, networkId } = context;

        return (active);
      }}
    </Web3Consumer>
  );
}

class NewCampaignC extends Component {
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
            redirect: false,
        };
        this.pinataURL = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
        this.pinataAPIKey = '8ded24d796a7aa0afdde';
        this.pinataSecretAPIKey = 'a7bc4931b0f61b3467466a73df13a01f72988bcc90cb2303e8421549ed15579d'
        this.JSONBody = {};
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
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        this.JSONBody = this.state;
        axios.post(this.pinataURL,
                    this.JSONBody,
                    {
                        headers: {
                            'pinata_api_key': this.pinataAPIKey,
                            'pinata_secret_api_key': this.pinataSecretAPIKey
                        }
                    })
        .then((response) => {
            this.setState({ redirect: true })
        })
        .catch((error) => {
            console.log(error)
        });
    }

    isFormValid(e) {
        return
    }

    render() {
        const { redirect } = this.state;
        if(redirect) {
            return(<Redirect to='/profile'/>);
        }
        return (
            <div>
            <div className='hero'>
                <p>Hello Kevin,</p>
                <h2 className='greeting'>New Campaign</h2>
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
