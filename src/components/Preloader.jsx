function Preloader() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Loader */}
        <div className="w-32 h-32 flex items-center justify-center">
          <img
            src="https://cdn.dribbble.com/userupload/20666161/file/original-bbbab00152e56a800d901fa190f9442d.gif"
            alt="Loading BookBazaar"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Brand */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Book<span className="text-amber-400">Bazaar</span>
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Opening your world of books...
          </p>
        </div>

        {/* Loading indicator */}
        <div className="h-1 w-32 overflow-hidden rounded-full bg-slate-800">
          {/* <div className="h-full w-1/2 animate-pulse rounded-full bg-amber-400" /> */}
          <div className="h-full w-1/2 rounded-full bg-amber-400 animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
