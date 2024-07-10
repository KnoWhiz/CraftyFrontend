import '../styles/global.css';

import Demo from '@/components/Landing Page/Demo';
import Footer from '@/components/Navbar/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main meta={<Meta title="Crafty" description="" />}>
      <div className="mt-16 flex flex-col">
        <Navbar />
        <Demo />
        <Footer />
      </div>
    </Main>
  );
};

export default Index;
