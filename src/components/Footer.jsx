function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container mx-auto px-6 py-10 text-blue-200/70 text-sm flex flex-col sm:flex-row gap-4 justify-between">
        <div>© {new Date().getFullYear()} PanelPlay • Stream animated comics</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Help</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
