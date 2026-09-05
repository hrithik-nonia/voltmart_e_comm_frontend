export function HeadingComp({ text }) {
  return (
    <>
      <div>
        <div
          className={`flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest ${text ? text : "text-white"} uppercase mb-1`}
        >
          <span>NODE ARCHITECTURES</span>
          <span>•</span>
          <span className="text-white font-light">6 Hubs Active</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Shop by Category
        </h2>
      </div>
    </>
  );
}
