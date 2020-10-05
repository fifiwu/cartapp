import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [arrItems, setarrItems] = useState([]);
  const [qty, setQTY] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    GenerateItems();
  }, []);

  const GenerateItems = () => {
    var data = [
      { name: "Chicken momo", price: 10.50, image: "https://www.theterracekitchen.in/wp-content/uploads/2019/07/048.-Chicken-Momos_545X545.png", qty: 1 },
      { name: "Spice Mexican potatoes", price: 8.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQY9mY7w3NZoAKV--b41fnzsY_Mf5Zojzw3ag&usqp=CAU", qty: 1 },
      { name: "Breakfast", price: 5.90, image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Pooja_Thakur/Masala_French_Toaste.jpg", qty: 1 }
    ];
    setTotal(24.9);
    setarrItems(data);
  }

  const CalcTotal = () => {
    var sum = 0;
    for (let index = 0; index < arrItems.length; index++) {
      sum += (arrItems[index].qty * arrItems[index].price);
    }
    setTotal(sum);
  }

  const incQTY = (item) => {
    var index = arrItems.findIndex(obj => obj.name === item.name);
    var cqty = arrItems[index].qty;
    cqty++;
    console.log(cqty);;
    var ulist = arrItems;
    ulist[index].qty = cqty;
    setarrItems(ulist);
    setQTY(cqty);
    CalcTotal();
  }

  const decQTY = (item) => {

    var index = arrItems.findIndex(obj => obj.name === item.name);
    var cqty = arrItems[index].qty;
    if (cqty > 1) {
      cqty--;
      console.log(cqty);
      var ulist = arrItems;
      ulist[index].qty = cqty;
      setarrItems(ulist);
      setQTY(cqty);
      CalcTotal();
    }
  }

  const RemoveItem = (item) => {
    var ulist = arrItems;
    ulist = ulist.filter(obj => obj.name !== item.name, 1);
    console.log(ulist);
    setarrItems(ulist);
  }

  return (

    <div>
      <div>
        <div className="row" style={{ padding: "50px" }}>
          <div className="col-md-8">
            {
              arrItems.map(item => (
                <div className="row" key={item.name}>
                  <img src={item.image} className="img-responsive img-circle" />
                  <div className="column" >
                    <h2>{item.name}</h2>
                    <p>#4231648</p>
                  </div>
                  <div className="number">
                    <span className="minus" onClick={() => decQTY(item)}>-</span>
                    <input type="text" value={item.qty} disabled={true} />
                    <span className="plus" onClick={() => incQTY(item)}>+</span>
                  </div>
                  <div className="number">
                    <h2>${Number(item.qty * item.price).toFixed(2)}</h2>
                  </div>
                  <div className="number">
                    <h2 className="btn btn-primary" onClick={() => RemoveItem(item)}>
                      X
              </h2>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="col-md-4 creditcard" style={{ backgroundColor: "gray" }}>
            <h2>Card Details</h2>
            <div className="cardtitle">
&nbsp;
            </div>
            <div className="cardtitle">
              Name of Card
            </div>
            <input type="text" className="form-control" />
            <div className="cardtitle">
              Card Number
            </div>
            <input type="text" className="form-control" />
            <div className="cardtitle">
              Expiration date
            </div>
            <select className="col-md-3">
              <option>mm</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <select className="col-md-3">
              <option>yyyy</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
            </select>
            <input type="text" value="XXX" className="col-md-3" />
            <div className="cardtitle">
            </div>
            <button className="CheckOut btn-primary">Check Out</button>
          </div>
        </div>
        <div className="row">
          <div className="column" >
          </div>
          <div className="column" >
          </div>
          <div className="number" >
            subtTotal
     <h2>${total}</h2>
          </div>
        </div>
      </div>
    </div >
  )
}


export default App;

