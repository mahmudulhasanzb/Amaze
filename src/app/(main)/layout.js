import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default layout
