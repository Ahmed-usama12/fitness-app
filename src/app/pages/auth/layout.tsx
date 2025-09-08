import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="flex gap-10">
      <section className=" w-full">Photo</section>
      <section className="w-full">
        <Outlet />
      </section>
    </main>
  );
}
