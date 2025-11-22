import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import "./App.css"





export default function App() {

const cards = data.map(item => {
return (
    <Card 
    key={item.id} 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
    />
)
})        

return (
<div>

    <Navbar />
    <Hero />
    <div className="card--list">
    {cards}
    
    </div>
    <div className="app--footer">Developing by <a href="https://github.com/sherksiva" target="_blank">Sivaprakash Raman</a></div>
</div>
)
}