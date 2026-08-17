export default function NotFound() {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Marina Bulunamadı
          </p>
  
          <h1 className="mt-4 font-cormorant-garamont text-5xl font-bold text-darknavy">
            Aradığınız marina bulunamadı.
          </h1>
  
          <p className="mt-4 text-darknavy/60">
            Marina kaldırılmış veya yanlış bir bağlantı kullanılmış olabilir.
          </p>
        </div>
      </main>
    );
  }