export function GallerySection() {
  return (
    <section id="gallery" className="bg-black pb-10 px-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 h-full min-h-[500px] max-w-6xl mx-auto">
        {/* 1 */}
        <div className="col-span-1 flex flex-col gap-5">
          <img
            src="#"
            className="bg-white/5 w-full h-full max-w-40 max-h-40 aspect-square rounded-full"
            alt="branch 1"
          />

          <img
            src="#"
            className="bg-white/5 w-full h-full max-w-40 max-h-40 aspect-square rounded-full self-end"
            alt="branch 2"
          />
        </div>
        {/* 2 */}
        <div className="col-span-1 flex flex-col justify-end gap-5">
          <div>
            <img
              src="#"
              className="bg-white/5 w-full h-full max-w-80 max-h-80 aspect-square rounded-full"
              alt="branch 3"
            />
          </div>
        </div>
        {/* 3 */}
        <div className="col-span-1 flex flex-col gap-5">
          <div>
            <img
              src="#"
              className="bg-white/5 w-full h-full max-w-50 max-h-50 aspect-square rounded-full"
              alt="branch 4"
            />
          </div>
          <div>
            <img
              src="#"
              className="bg-white/5 w-full h-full max-w-50 max-h-50 aspect-square rounded-full"
              alt="branch 6"
            />
          </div>
        </div>
        {/* 4 */}
        <div className="col-span-1 flex flex-col justify-end gap-5">
          <div>
            <img
              src="#"
              className="bg-white/5 w-full h-full max-w-40 max-h-40 aspect-square rounded-full"
              alt="branch 5"
            />
          </div>
          <div>
            <img
              src="#"
              className="bg-white/5 w-full h-full max-w-80 max-h-80 aspect-square rounded-full"
              alt="branch 7"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
