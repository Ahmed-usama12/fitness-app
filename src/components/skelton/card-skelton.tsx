export default function CardSkelton() {
  return (
    <div className="relative mx-auto size-[300px] animate-pulse rounded-3xl bg-zinc-100 md:size-[400px]">
      <div className="absolute bottom-16 left-5 mx-auto h-3 w-3/4 rounded-full bg-zinc-200"></div>
      <div className="absolute bottom-8 left-5 mx-auto h-3 w-1/4 rounded-full bg-zinc-200"></div>
    </div>
  );
}
