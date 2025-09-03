import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="flex gap-10">
      <section>Photo</section>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
