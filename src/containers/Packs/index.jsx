import MainLayout from "../../layout"

const Packs = () => {
  return (
    <MainLayout>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-4">
          <button className="w-64 h-64 bg-custom-gray rounded-lg flex items-center justify-center">
            <img src="./src/assets/open.png" alt="description" className="w-36 h-36" />
          </button>
          <button className="w-64 h-64 bg-custom-gray rounded-lg flex items-center justify-center">
            <img src="./src/assets/open.png" alt="description" className="w-36 h-36" />
          </button>
          <button className="w-64 h-64 bg-custom-gray rounded-lg flex items-center justify-center">
            <img src="./src/assets/open.png" alt="description" className="w-36 h-36" />
          </button>
          <button className="w-64 h-64 bg-custom-gray rounded-lg flex items-center justify-center">
            <img src="./src/assets/open.png" alt="description" className="w-36 h-36" />
          </button>
        </div>
      </div>
    </MainLayout>
  )
}

export default Packs