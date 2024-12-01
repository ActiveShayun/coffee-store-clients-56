import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeUpdate = () => {

    const singleCoffee = useLoaderData()
    const navigate = useNavigate()

    const {_id, name, quantity, supplier, taste, category, details, photo } = singleCoffee

    const handleCoffeeUpdate = event => {
        event.preventDefault()
        const form = new FormData(event.target)
        const name = form.get('name')
        const quantity = form.get('quantity')
        const supplier = form.get('supplier')
        const taste = form.get('taste')
        const category = form.get('category')
        const details = form.get('details')
        const photo = form.get('photo')

        const updateCoffee = {name, quantity, supplier, taste, category, details, photo }

        console.log(updateCoffee);
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee Update successful',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                  navigate("/")
                }
            })


    }

    return (
        <div className="card bg-[#F4F3F0] w-full shrink-0 shadow-2xl py-4">

            <form onSubmit={handleCoffeeUpdate} className="card-body">
                <div className="text-center mb-8 space-y-2">
                    <h1 className="text-4xl font-bold">Update Coffee</h1>
                    <p className="md:w-3/5 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                {/* coffee name and quantity row */}
                <div className="flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="coffee name" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg">Coffee Quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Coffee Quantity" className="input input-bordered" required />
                    </div>

                </div>
                {/* coffee Taste and Supplier row */}
                <div className="flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg">Supplier</span>
                        </label>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg">Taste</span>
                        </label>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered" required />
                    </div>

                </div>
                {/* coffee Category and Details row */}
                <div className="flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Photo</span>
                    </label>
                    <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-4 px-8">
                    <button className="btn bg-[#D2B48C]">Update Coffee</button>
                </div>
            </form>

        </div>
    );
};

export default CoffeeUpdate;