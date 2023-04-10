import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Orders = () => {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(" http://localhost:8000/orders").then((res) => {
            return res.json()
        }).then((resp) => {
            setOrders(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    const orderDetail = (id) => {
        navigate('/orders/detail/'+id)
    }

    const updateOrder = (id) => {
        navigate('/orders/update/'+id)
    }

    const removeOrder = (id) => {
        if(window.confirm('Remove order id ' + id + '?')) {
            fetch(' http://localhost:8000/orders/' + id, {
            method: "DELETE"
        }).then((res) => {
            alert('Order ' + id + ' remove succesfully')
            window.location.reload()
        }).catch((err) => {
            console.log(err.message)
        })
        }
    } 

    return (
        <div>
            <div className="flex items-center justify-between">
                <strong className='text-gray-700 font-medium'>Orders</strong>
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" to='/orders/create'>Add ( + )</Link>
            </div>
            <div className='mt-3'></div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Total</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipping Address</th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map(order => (<tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-xs uppercase font-medium">#{order.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs uppercase font-medium">{order.product_id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs uppercase font-medium">{order.customer_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs uppercase font-medium">{new Date(order.order_date).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs uppercase font-medium">{order.order_total}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs uppercase font-medium">{order.shipping_address}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs uppercase font-medium">
                            <a onClick={() => {orderDetail(order.id)}} className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><FontAwesomeIcon icon={faEnvelope} /></a>
                            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><FontAwesomeIcon onClick={() => {updateOrder(order.id)}} icon={faPenToSquare} /></a>
                            <a className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><FontAwesomeIcon onClick={() => {removeOrder(order.id)}} className='fa-trash' icon={faTrash} /></a>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>

    )
}
