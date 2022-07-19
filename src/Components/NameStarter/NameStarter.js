import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { sourdoughContext } from "../../helpers/sourdoughContext";
import "./NameStarter.css";

const NameStarter = () => {
  const { sourdough, setSourdough } = useContext(sourdoughContext);
  const navigate = useNavigate();

  const handleStarterName = (e) => {
    const { name, value } = e.target;
    setSourdough({ ...sourdough, [name]: value });
  };

  const submitStarterName = (e) => {
    e.preventDefault();

    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sourdough),
    };

    fetch(`http://localhost:3030/sourdough/startername`, opts)
      .then((res) => res.json())
      .then((data) => setSourdough(data.data));

    navigate("/calculator");
  };

  return (
    <main className='name-starter'>
      <div>
        <h1>What's the name of your sourdough starter?</h1>
        <form className='name-starter-input-form' onSubmit={submitStarterName}>
          <input
            className='name-starter-input'
            type='text'
            name='starterName'
            value={sourdough.starterName}
            onChange={handleStarterName}
            required
          />
          <div className='name-starter-button-wrapper'>
            <input type='submit' value='Go' />
          </div>
        </form>
      </div>
    </main>
  );
};

export default NameStarter;
