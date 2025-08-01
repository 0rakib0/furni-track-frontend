import Card from "@/components/deshbord/card";
import OrdersTable from "@/components/orders_Table/OrdersTable";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="my-8">
        <h3 className="text-2xl">👋 Welcome, Admin</h3>
        <p>Here is your furniture order overview.</p>
      </div>
      <div>
        <Card></Card>
        {/* recently orderd item product */}
        <div className="my-8">
          <OrdersTable title="🧾🆕Recently Orderd Items"></OrdersTable>
        </div>
        {/* Up Comming Delivery Order */}
        <OrdersTable title={'🚚🕒Up-Comming Delivery Order'}></OrdersTable>
      </div>
    </div>
  );
}
