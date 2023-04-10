import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export const AddOrder = () => {
    const [order, setOrder] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(' http://localhost:8000/orders', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(order),
        }).then((res) => {
            console.log(res)
            alert('Save succesfully')
            navigate('/')
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div>
            <strong className='text-gray-700 font-medium'>Add New Order</strong>
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Product ID">
                        Product ID
                    </label>
                    <input onChange={(e) => setOrder({ ...order, product_id: e.target.value })} type="text" placeholder="Product ID" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Customer Name">
                        Customer Name
                    </label>
                    <input onChange={(e) => setOrder({ ...order, customer_name: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Customer Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Order Total">
                        Order Total
                    </label>
                    <input onChange={(e) => setOrder({ ...order, order_total: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Order Total" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Shipping Address">
                        Shipping Address
                    </label>
                    <input onChange={(e) => setOrder({ ...order, shipping_address: e.target.value, order_date: new Date().toLocaleDateString() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
                </div>
                <div className="flex items-center">
                    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add
                    </button>
                    <Link to='/' className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Back</Link>
                </div>
            </form>
        </div>
    )
}
