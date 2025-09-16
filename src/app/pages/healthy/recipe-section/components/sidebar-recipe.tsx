import test from "@assets/images/about-man1.png";
export default function SidebarRecipe() {
  return (
    <div className="col-span-2 w-[409px] space-y-4 rounded-xl border-2 p-4">
      {/* Links */}
      <ul className="flex justify-center gap-4">
        <li>Breakfast</li>
        <li>Breakfast</li>
        <li>Breakfast</li>
      </ul>

      {/* Meals */}
      <div className="space-y-8">
        <div className="flex cursor-pointer items-center gap-4 border-b-2 pb-4">
          <div className="h-[88px] w-[81px] overflow-hidden rounded-xl">
            <img className="object-cover" src={test} alt={test} />
          </div>
          <article className="flex-1">
            <h3 className="text-lg text-white">Pasta With Meat</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, qui?
            </p>
          </article>
        </div>

        <div className="flex cursor-pointer items-center gap-4">
          <div className="h-[88px] w-[81px] overflow-hidden rounded-xl">
            <img className="object-cover" src={test} alt={test} />
          </div>
          <article className="flex-1">
            <h3 className="text-lg text-white">Pasta With Meat</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, qui?
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
