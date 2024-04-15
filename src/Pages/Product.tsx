import { useState, useEffect } from "react";
import axios from "axios";
import ProtectedRoute from "../Component/ProtectedRoute";
import Logout from "./logout";



interface Product{
    id : number;
    name : String;
    price : number;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products data when the component mounts
    async function fetchProducts() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/product");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
        <ProtectedRoute/>
        <Logout/>
      <div className="container">
        <h2>Products Table</h2>
        <table id="myTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;

