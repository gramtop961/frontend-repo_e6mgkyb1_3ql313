import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zBXGLjse1OwBSbps/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-blue-200 text-xs tracking-wide uppercase">New</span>
            <span className="text-blue-200/70 text-xs">Interactive 3D hero</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Stream Animated Comics like a Superhero Platform
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100/90 max-w-2xl">
            Binge cinematic comic episodes, discover new worlds, and follow your favorite heroes with a Netflix-style experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#browse" className="rounded-full bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 font-semibold transition-colors">Start Watching</a>
            <a href="#featured" className="rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold backdrop-blur border border-white/20 transition-colors">Explore Series</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
