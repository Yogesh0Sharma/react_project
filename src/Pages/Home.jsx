
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Pages from "./Pages"
import FoodCatagory from "../components/FoodCatagory"
import Recipe from '../components/Recipe';
import SearchResult from '../components/SearchResult';


export default function Home() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Pages />} />
                <Route path="/FoodCatagory/:type" element={<FoodCatagory />} />
                <Route path="/recipe/:id" element={<Recipe />} />
                <Route path="/searched/:name" element={<SearchResult />} />
            </Routes>

        </>
    )
}
