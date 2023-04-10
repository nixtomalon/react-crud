import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

export const UpdateOrder = () => {
    const { orderId } = useParams()
    const [order, setOrder] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(' http://localhost:8000/orders/' + orderId, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(order),
        }).then((res) => {
            alert('Save succesfully')
            navigate('/')
        }).catch((err) => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        fetch(" http://localhost:8000/orders/"+orderId).then((res) => {
            return res.json()
        }).then((resp) => {
            setOrder(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    return (
        <div>
            <strong className='text-gray-700 font-medium'>Update Order</strong>
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Product ID">
                        Product ID
                    </label>
                    <input value={order.product_id} onChange={(e) => setOrder({ ...order, product_id: e.target.value })} type="text" placeholder="Product ID" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Customer Name">
                        Customer Name
                    </label>
                    <input value={order.customer_name} onChange={(e) => setOrder({ ...order, customer_name: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Customer Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Order Total">
                        Order Total
                    </label>
                    <input value={order.order_total} onChange={(e) => setOrder({ ...order, order_total: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Order Total" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Shipping Address">
                        Shipping Address
                    </label>
                    <input value={order.shipping_address} onChange={(e) => setOrder({ ...order, shipping_address: e.target.value, order_date: new Date().toLocaleDateString() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
                </div>
                <div className="flex items-center">
                    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Update
                    </button>
                    <Link to='/' className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Back</Link>
                </div>
            </form>
        </div>
    )
}
