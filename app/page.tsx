import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import UnitTable from "@/components/unit-table/unit-table"
import Button from "@/components/button/button"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white dark:bg-black font-sans">
      <main className="flex flex-col flex-1 w-full min-h-screen py-24 px-24 gap-10">
        <div className="flex flex-col gap-6">
          <Header mainHeader={true}>
            Battle Game Web App
          </Header>
          <p className="max-w-xs">
            - Companion app for battle game. Unit information and map preview.
          </p>
        </div>
        <UnitTable />
        <Footer>
          <p>
            Footer
          </p>
        </Footer>
      </main>
    </div>
  )
}