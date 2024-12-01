import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";


const Home = () => {
    const allCoffee = useLoaderData()
    const [coffees, setCoffees] = useState(allCoffee)
    return (
        <div>
            <h2 className="text-3xl text-pink-300">All coffee here now {allCoffee.length}</h2>
            <div className="grid grid-cols-2 gap-3">
                {
                    coffees.map(coffee =>
                        <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        >
                        </CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;