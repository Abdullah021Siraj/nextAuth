import { NavBar } from "./_components/navbar"

function ProtectedLayout({children}) {
  return (
    <div className='h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 to-blue-800'>
      <NavBar />
       {children}
    </div>
  )
}

export default ProtectedLayout