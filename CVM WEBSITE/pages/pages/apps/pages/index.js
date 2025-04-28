import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-6 text-center text-3xl font-bold">
        Welcome to CVM MODDING A SITE BASED ALL AROUND MODDED APKS AND CHEATS
      </header>

      <main className="p-8">
        <h2 className="text-2xl mb-4">Available Apps</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/apps/yourfirstapp">
              <div className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700">
                THE First Modded APK
              </div>
            </Link>
          </li>
          {/* Add more apps here */}
        </ul>
      </main>
    </div>
  )
}
