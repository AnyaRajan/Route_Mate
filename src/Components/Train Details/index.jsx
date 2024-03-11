import Traindetails from './train.jsx';
import Navbar from '../Navbar/navbar.jsx';

function Index() {
  return (
    <>
    <Navbar />
    <div className="Index rounded-[12px]">
      <header className="Index-header">
      <Traindetails/>
      <Traindetails/>
      <Traindetails/>
      <Traindetails/>
      </header>
    </div>
    </>
  );
}

export default Index;
