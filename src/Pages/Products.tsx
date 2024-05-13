import React, { useState, useEffect } from "react";
import axios  from "axios";

interface  Products {
    id : number;
    name: string;
    price: number; 
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const apiUrl = 'http://127.0.0.1:5000/product';
                const Token = localStorage.getItem('Token');
                console.log("no token",Token)
                if (!Token) {
                    throw new Error('token not found');
                }

                const response = await axios.get<Products[]>(apiUrl, {
                    headers: {
                        'Authorization': `${Token}`,
                    }
                });

                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
    return(
        <>
        <div>
            <h3>my products</h3>
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {products.map(Products =>(
                        <tr key={Products.id}>
                            <td>{Products.id}</td>
                            <td>{Products.name}</td> 
                            <td>{Products.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Products;