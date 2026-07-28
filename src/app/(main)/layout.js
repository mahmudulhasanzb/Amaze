import Navbar from '@/components/layout/Navbar';

const layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default layout
