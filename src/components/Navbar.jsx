import { useState } from 'react'
import { Menu, Search, Play, Flame } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur bg-slate-950/60 border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 grid place-items-center shadow-lg">
            <Play className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-bold tracking-tight">PanelPlay</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-blue-100/90">
          <a href="#browse" className="hover:text-white">Browse</a>
          <a href="#featured" className="hover:text-white">Featured</a>
          <a href="#new" className="hover:text-white">New</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-blue-100">
            <Search className="h-4 w-4" />
            <input className="bg-transparent placeholder-blue-200/70 text-sm outline-none" placeholder="Search comics" />
          </div>
          <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 text-blue-100/90 space-y-2">
          <a href="#browse" className="block">Browse</a>
          <a href="#featured" className="block">Featured</a>
          <a href="#new" className="block">New</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
