import List from '@/components/List'
import FormBox from '@/components/FormBox'
import HomeProvider from '@/components/home-provider'
import { getFirebaseData } from '@/utils'

const data = await getFirebaseData()

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 xl:p-24 bg-gradient-to-br from-emerald-900 to-amber-600">
      <div className="container mx-auto flex flex-col gap-8 items-center justify-center">
        <HomeProvider data={data}>
          <FormBox />
          <List />
        </HomeProvider>
      </div>
    </main>
  )
}
