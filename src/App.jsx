import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import FeaturedRow from './components/FeaturedRow'
import Footer from './components/Footer'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [featured, setFeatured] = useState([])
  const [popular, setPopular] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        // Seed demo data silently (backend will skip if already seeded)
        await fetch(`${API_BASE}/api/seed`, { method: 'POST' }).catch(() => {})

        const res = await fetch(`${API_BASE}/api/series?limit=20`)
        const data = await res.json()
        const items = data.items || []
        setFeatured(items.filter((i) => i.featured))
        setPopular(items)
      } catch (e) {
        setError('Unable to load content from the server.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />

      <main id="browse" className="relative -mt-24 z-10">
        <div className="container mx-auto space-y-10">
          {error && (
            <div className="mx-6 bg-red-500/10 border border-red-500/20 text-red-200 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {loading ? (
            <div className="px-6 py-20 text-blue-200/80">Loading your comics…</div>
          ) : (
            <>
              <section id="featured" className="mt-10">
                <FeaturedRow title="Featured Series" items={featured} />
              </section>
              <section id="new">
                <FeaturedRow title="Popular Now" items={popular} />
              </section>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
