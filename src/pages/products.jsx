import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        name: "Sepatu Nike",
        price: 1000000,
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea, eligendi ab vel consequuntur ullam natus ut quod delectus repellendus deserunt similique est quaerat illum? Aut, laborum inventore?`,
    },
    {
        id: 2,
        name: "Sepatu Puma",
        price: 2000000,
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea, eligendi ab vel consequuntur ullam natus ut quod delectus repellendus deserunt similique est quaerat illum? Aut, laborum inventore?`,
    },
    {
        id: 3,
        name: "Sepatu Adisomad",
        price: 3000000,
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea, eligendi ab vel consequuntur ullam natus ut quod delectus repellendus deserunt similique est quaerat illum? Aut, laborum inventore?`,
    },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        }
    ]);

    const handleAddToCart = (id) => {
        setCart([
            ...cart,
            {
                id: id,
                qty: 1
            }
        ]);
    }

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                                handleAddToCart={handleAddToCart}
                            />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">
                        Cart
                    </h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                        <td>{item.qty}</td>
                                        <td>{(product.price * item.qty).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage;