
class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = { qty: 0 };
  }

  buy() {
    this.setState({qty: this.state.qty + 1})
    this.props.totalShow(this.props.price);
  }

  show() {
    this.props.prodShow(this.props.name);
  }

  render () {
    return (
      <div>
        <p>{this.props.name} - ${this.props.price}</p>
        <button onClick={() => {this.buy()}}>Buy</button>
        <button onClick={() => {this.show()}}>Show</button>
        <h3>Qty: {this.state.qty} item(s)</h3>
        <hr/>
      </div>
    );
  }
};

class Total extends React.Component {

  render() {
    return (
      <>
        <h3>Total cash: </h3>
      </>
    )
  }
}

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      total: 0
     };
  }
/* 
  getInitialState() {
    return {
      total: 0
    }
  } */

  calculateTotal(price) {
    this.setState({total: this.state.total + price})
    alert(this.state.total)
  }

  showProduct(name) {
    alert(name)
  }

  render() {
    return (
      <>
        <Product name='Android' price={158} 
                prodShow = {() => {this.showProduct()}}
                totalShow = {() => {this.calculateTotal()}}/>  
        <Product name='Apple' price={999} 
                prodShow = {() => {this.showProduct()}}
                totalShow = {() => {this.calculateTotal()}}/>  
        <Product name='SonyEricsson' price={10} 
                prodShow = {() => {this.showProduct()}}
                totalShow = {() => {this.calculateTotal()}}/>
        <Total/>  
      </>
    )
    
  }
}

ReactDOM.render(
  <ProductList/>,
  document.getElementById('like_button_container')
);
