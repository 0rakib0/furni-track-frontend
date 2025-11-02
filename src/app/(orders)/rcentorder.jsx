async function recentOrders() {
    
    const recent_delivery_orders_res = await fetch("http://127.0.0.1:8000/recent-delivery-order/")
    const recent_delivery_orders = await recent_delivery_orders_res.json()
    return (
     recent_delivery_orders
    )
    
}
export default recentOrders