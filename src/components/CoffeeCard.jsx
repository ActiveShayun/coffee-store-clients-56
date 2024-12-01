import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee
    console.log(coffees);
    const handleDeleteCoffee = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remainingCoffee = coffees.filter(cof => cof._id != id)
                        setCoffees(remainingCoffee)
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{category}</p>
                </div>
                <div className="card-actions justify-end ">
                    <div className="join join-vertical space-y-2">
                        <button className="btn join-item">view</button>
                        <NavLink to={`/updateCoffee/${_id}`}
                            className="btn join-item"
                        >
                            update
                        </NavLink>
                        <button onClick={() => handleDeleteCoffee(_id)}
                            className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;