import { useEffect, useState } from "react";
import "./Home.css"
import Product from "./components/Product";
import { Link } from "react-router-dom";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);


    function filterCategory(category) {
        const filtered = products.filter(product => {
            if (product.category === category) return true;
            else return false;
        })
        var brands = [];
        filtered.forEach(product => brands.push(product.brand));
        brands = [...new Set(brands)];
        setBrands(brands);

        setFiltered(filtered);
    }

    function filterBrand(brand) {
        const filteredBrands = products.filter(product => {
            if (product.brand === brand) return true;
            else return false;
        })
        setFiltered(filteredBrands);
    }

    const searchProduct = (prod) => {
        setFiltered(products.filter(product => {
            return product.title.toLowerCase().includes(prod);
        }))
    }

    useEffect(() => {
        async function fetchProducts() {
            const resp = await fetch("https://dummyjson.com/products");
            const data = await resp.json();
            setProducts(data.products);
            setFiltered(data.products);

            var category = [];
            data.products.forEach(product => category.push(product.category));
            category = [...new Set(category)];
            setCategories(category)
        }

        fetchProducts();

    }, [])

    return (
        <div className="home">
            <div className="home-top">
                <div className="top-left">
                    <select name="category" id="" onChange={e => filterCategory(e.target.value)}>
                        <option value="" hidden>Category</option>
                        {
                            categories.map((categ, i) => <option value={categ} key={i}>{categ}</option>)
                        }
                    </select>
                    <select name="brand" id="" onChange={e => filterBrand(e.target.value)}>
                        <option value="" hidden>Brands</option>
                        {
                            brands.map((brand, i) => <option value={brand} key={i}>{brand}</option>)
                        }
                    </select>
                    <div className="option-reset">
                        <span className="material-symbols-rounded">restart_alt</span>
                        <span id="reset" >Reset</span>
                    </div>
                </div>
                <div className="top-right">
                    <div className="search">
                        <label htmlFor="search">Search</label>
                        <input type="text" id="search" onChange={e => searchProduct(e.target.value)} />
                    </div>
                    <div className="add-to-cart-btn">
                        <Link to="/cart">
                            <button>Add To Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="home-main">
                <table>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Buy</th>
                        </tr>
                        {
                            filtered.map((product, i) => {
                                return (
                                    <Product product={product} key={i} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default Home;