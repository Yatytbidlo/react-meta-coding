import React from 'react';
import Navbar from "./components/navigationbar/Navbar"
import Aboutme from "./components/aboutme/Aboutme"
import Education from "./components/education/Education"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/footer";
import ProductList from "./components/productslist/ProductList";
import Data from "./components/data/Data"
import ToDoList from "./components/todolist/ToDoList";

const App = () => {
    const {products} = Data;
    return (
        <div>
            <Navbar />
            <ToDoList />
            <ProductList products={products}/>
            <Aboutme />
            <Education />
            <Experience />
            <Footer />
        </div>
    );
};

export default App;