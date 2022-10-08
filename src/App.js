// import { FaShoppingCart } from "react-icons/fa";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useState } from 'react';
import Menu from './Menu/Menu';




function App() {

  const [data, setData] = useState(Menu);
  const [upDateData, setUpDateData] = useState([]);
  let [total, setTotal] = useState(0)
  let [items, setItems] = useState(0);

  const handleEntry = (id) => {
    const newData = Menu.find((elem) => {


      return elem.id === id
    })
    total += newData.price
    setTotal(total)

    setItems(++items);

    setUpDateData([...upDateData, newData])
    // setUpDateData(newData)
  }
  // console.log(upDateData);
  // console.log(upDateData)

  const handleRamove = (newPrice) => {
    const newValue = upDateData.filter((elem) => {

      return elem.id !== newPrice.id;
    })
    setTotal(total - newPrice.price);

    setItems(--items);


    setUpDateData(newValue);
  }


  return (
    <div>
      <nav style={{
        display: "flex",
        backgroundColor: "#eeeeee",
        justifyContent: "center"
      }}>

        <LocalMallIcon style={{
          marginTop: "24px",
          marginRight: "10px"

        }} />
        <h2 style={{
          color: "#424242",
          fontFamily: "serif",
          fontSize: "30px"
        }}>Apple Store</h2>

      </nav>

      <div>

        <div style={{
          display: "flex",
          justifyContent: "space-around"
        }}>
          {
            data.map((elem) => {
              return (
                <div key={elem.id} style={{
                  width: "30%",
                  textAlign: "center"
                }}>
                  <img src={elem.image} alt="iphonr14" style={{
                    width: "300px"

                  }} />
                  <div style={{
                    textAlign: "center"
                  }}>
                    <h3>{elem.name}</h3>
                    <p>{elem.desc}</p>
                    <h2>${elem.price}</h2>
                    <button onClick={() => handleEntry(elem.id)}
                      style={{
                        backgroundColor: "#2196f3",
                        color: "whitesmoke",
                        padding: "5px 10px",
                        border: "none",
                        fontStyle: "oblique"
                      }}>Buy Product</button>
                  </div>
                </div>
              )
            })
          }


        </div>
      </div>
      <hr />
      <div style={{
        textAlign: "center"

      }}>
        <h1 style={{
          color: "#424242"
        }}>Apple Basket</h1>
        <h2 style={{
          color: "#323232"
        }}>You have {items} items in your basket</h2>
      </div>

      <div>
        {
          upDateData.map((elemnt, indx) => {
            // const { image, id, name, desc, md } = elemnt;
            // console.log(elemnt.price);
            // setTotal(elemnt.price)
            return (
              <div key={indx} style={{
                display: "flex",
                width: "80%",
                margin: "auto",
                border: "1px solid #999999",
                margin: "10px auto",
                padding: "10px 5px"
              }}>
                <div style={{
                  margin: "auto"
                }}> <img src={elemnt.image} alt={elemnt.md} style={{
                  width: "100px"
                }} /></div>
                <div style={{
                  textAlign: "center",
                  margin: "auto"
                }}>
                  <h3>{elemnt.name}</h3>
                  <p>{elemnt.desc}</p>
                  <button onClick={() => handleRamove(elemnt)}
                    style={{
                      backgroundColor: "#2196f3",
                      color: "whitesmoke",
                      padding: "5px 10px",
                      border: "none",
                      fontStyle: "oblique"
                    }}>Cancel</button>
                </div>
              </div>
            )
          })
        }


        <h1 style={{
          textAlign: "center"
        }}>
          Total Amount:${total}.00
        </h1>




      </div>
    </div>
  );
}

export default App;
