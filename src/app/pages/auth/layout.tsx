import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="grid h-screen grid-cols-12 gap-10">
      <section className="col-span-6">Photo</section>
      <section className="col-span-6 h-full flex items-center justify-center">
        <Outlet />
      </section>
    </main>
  );
}
