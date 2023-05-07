import logo from './logo.svg';
import './App.css';
function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("https://example.com/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const handleAddToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const handleReleaseFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const handleDischargeFromService = (botId) => {
    fetch(`https://example.com/bots/${botId}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter((b) => b.id !== botId));
    });
  };

  return (
   <div>
      <BotCollection bots={bots} onAddToArmy={handleAddToArmy} />
      <YourBotArmy army={army} onReleaseFrom
      onDischargeFromService={handleDischargeFromService}/>
    </div>
  )
  }
export default App;
