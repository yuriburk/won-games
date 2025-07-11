type MainProps = {
  title?: string
}

const Main = ({ title = 'React Avançado' }: MainProps) => (
  <main className="flex items-center justify-center bg-background text-white w-screen h-screen p-12 text-center">
    <h1>{title}</h1>
  </main>
)

export default Main
