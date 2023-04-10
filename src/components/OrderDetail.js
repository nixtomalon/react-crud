import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const OrderDetail = () => {
    const { orderId } = useParams()
    const [order, setOrder] = useState({})

    useEffect(() => {
        fetch(" http://localhost:8000/orders/"+orderId).then((res) => {
            return res.json()
        }).then((resp) => {
            console.log(resp)
            setOrder(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    return (
        <div>
            <strong className='text-gray-700 font-medium'>Order Detail</strong>
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Product ID">
                        Product ID
                    </label>
                    <input disabled='disabled' value={order.product_id} type="text" placeholder="Product ID" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Customer Name">
                        Customer Name
                    </label>
                    <input disabled='disabled' value={order.customer_name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Customer Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Order Total">
                        Order Total
                    </label>
                    <input disabled='disabled' value={order.order_total} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Order Total" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Order Date">
                        Order Date
                    </label>
                    <input disabled='disabled' value={order.order_date} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Order Date" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Shipping Address">
                        Shipping Address
                    </label>
                    <input disabled='disabled' value={order.shipping_address} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Shipping address" />
                </div>
                <div className="flex items-center">
                    <Link to='/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Okay</Link>
                </div>
            </form>
        </div>
    )
}
