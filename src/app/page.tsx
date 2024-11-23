import ButtonComponent from "@/components/ButtonComponent";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main>
      <div>Dashboard</div>
      <Link href={"/products"}>
        <ButtonComponent>Products</ButtonComponent>
      </Link>
    </main>
  );
}
