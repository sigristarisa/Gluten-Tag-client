import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const goToNameStarter = () => navigate("./name-starter");
  return (
    <main>
      <section className='content-container'>
        <div className='title-container'>
          <h1>Gluten Tag!</h1>
          <h2>Let's start your sourdough journey</h2>
        </div>
        <div className='btn-container'>
          <button onClick={() => goToNameStarter()}>Enter</button>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
