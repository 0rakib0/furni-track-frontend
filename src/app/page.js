import Card from "@/components/deshbord/card";
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
      </div>
    </div>
  );
}
