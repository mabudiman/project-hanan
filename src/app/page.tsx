import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Welcome to Project Hanan</h1>
      <p className="text-lg text-gray-600 mb-8">This is a homepage for the Project Hanan website.</p>
      <div className="w-64 h-48 bg-white rounded-md shadow-md relative">
        <Image
          src="/images/homepage.jpg"
          alt="Project Hanan Logo"
          fill
        />
      </div>
    </div>
  )
}