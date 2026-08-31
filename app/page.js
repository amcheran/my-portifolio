import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Prevent crashing if env vars aren't set yet on Vercel
const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null

export default async function Home() {
  let projects = []
  
  if (supabase) {
    const { data } = await supabase.from('projects').select('*')
    if (data) projects = data
  }

  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto space-y-8">
      <header className="space-y-2 border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-bold text-indigo-400">My Portfolio</h1>
        <p className="text-slate-400">Built completely on my smartphone.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Featured Projects</h2>
        
        {projects.length === 0 ? (
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-sm text-slate-400">
            No projects found yet. Connect Supabase keys in Vercel to load items dynamically!
          </div>
        ) : (
          <div className="grid gap-4">
            {projects.map((item) => (
              <div key={item.id} className="bg-slate-800 p-4 rounded-lg border border-slate-700 space-y-2">
                <h3 className="font-medium text-lg text-slate-100">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
