import Navbar from "@/components/auth/navbar";
const ProtectedLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-y-10 items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 to-blue-800">
  <Navbar />
  {children}
</div>

  );
};

export default ProtectedLayout;