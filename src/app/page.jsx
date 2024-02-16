import HomeContainer from '@/components/HomeContainer'

const testItems = [
  {
    title: 'Movie',
    value: '19.00',
  },
  {
    title: 'Mall',
    value: '50.00',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 xl:p-24 bg-gradient-to-br from-emerald-900 to-amber-600">
      <div className="container mx-auto flex flex-col gap-8 items-center justify-center">
        <HomeContainer data={testItems} />
      </div>
    </main>
  )
}