import React from 'react';

class CoinPairForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fsym: '',
      tsym: ''
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let fsym = this.state.fsym;
    let tsym = this.state.tsym;
    this.props.changeCoinPair(fsym, tsym);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="padding-20">

          <div className="row" align="center">
            <div className="col-1"></div>
            <label className="col-4">From-Currency:
              <input placeholder=" BTC" onChange={this.update('fsym')} className="ml-3"></input>
            </label>

            <label className="col-4">To-Currency:
              <input placeholder=" USD" onChange={this.update('tsym')} className="ml-3"></input>
            </label>

            <input type="submit" value="View Currency Pair" className="col-2"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default CoinPairForm;