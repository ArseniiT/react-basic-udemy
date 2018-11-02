
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
        <h3>Total cash: ${this.props.total}</h3>
      </>
    )
  }
}

class ProductForm extends React.Component {

  submit(e) {
    e.preventDefault();
    alert('Name: ' + this.refs.name.value + ' $' + this.refs.price.value);

    this.refs.name.value = '';
    this.refs.price.value = '';
    
  }

  render() {
    return (
      <form onSubmit={()=> {this.submit()}}>
        <input type="text" placeholder="Product Name" ref="name"/> -
        <input type="text" placeholder="Product Price" ref="price"/>
        <br/><br/>
        <button>Create product</button>
        <hr/>
      </form>
    );
  }

}

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      total: 0,
      productList: [
        {name: 'Android', price: 158},
        {name: 'Apple', price: 999},
        {name: 'SonyEricsson', price: 10}
      ]
     };

     // https://stackoverflow.com/questions/45998744/react-this-state-is-undefined
     this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal(price) {
    this.setState({total: this.state.total + price});
    alert(price);
  }

  showProduct(name) {
    alert(name);
  }

  change() {
    
  }
  

  render() {
    let that = this;
    let products = this.state.productList.map(function(product) {
      return (
        <Product name={product.name} price={product.price} 
                prodShow = {that.showProduct}
                totalShow = {that.calculateTotal}/> 
      );
    });


    return (
      <>
        <ProductForm/>
        <div>{products}</div>
        <Total total={this.state.total} />  
      </>
    )
    
  }
}

ReactDOM.render(
  <ProductList/>,
  document.getElementById('like_button_container')
);
