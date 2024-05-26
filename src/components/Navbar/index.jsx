export const Navbar = () => {
  return (
    <nav className='bg-black p-5'>
      <ul className='flex'>
        <li>
          <button className='p-3 bg-white text-black font-semibold rounded-md'>
            Obtener laminas
          </button>
        </li>
        <li>
          <button className='p-3 rounded-md font-semibold'>Mi Álbum</button>
        </li>
      </ul>
    </nav>
  )
}
