import { useGetPlayerQuery, } from "../api/Api";
import { useParams, Link, useNavigate } from "react-router-dom";
import PlayerCard from "./Card";

const PlayerDetails = () => {
    const { playerId } = useParams();
    const navigate = useNavigate();
  
    const { data = {}, error, isLoading } = useGetPlayerQuery(playerId);
  
    const handleDelete = async (id) => {
      await deletePlayerById(id); // Call deletePlayerById directly
  
      navigate('/', { preventScrollReset: false });
    };

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <section><p>Player is loading...</p></section>
  }

  // Show an error message if the fetch failed
  if (error) {
    return <section><p>{error.data.error.message}</p></section>
  }

  const player = data?.data?.player;

  return (
    <section>
      {player && (
        <div>
          <h1>Name: {player.name}</h1>
          <img className="player-image" src={player.imageUrl} />
          <div className="player">
            <h3>Breed: {player.breed}</h3>
            <div>
              <p>Status: {player.status}</p>
              <p>Score: {player?.team?.score || 0}</p>
            </div>
          </div>
          <button onClick={()=> handleDelete(player.id)}>Remove Player</button>
          <div>
            <h2>Team: {player?.team?.name || "None"}</h2>
            {player?.team && (
              <div className="teammates">
                {player?.team.players.map(
                  (teammate) =>
                    teammate.id !== parseInt(playerId) && (
                      <Link
                        className="teammate"
                        key={teammate.id}
                        to={`/players/${teammate.id}`}
                      >
                        <div className="player-card">
                          <PlayerCard
                            name={teammate.name}
                            imageUrl={teammate.imageUrl}
                          />
                        </div>
                      </Link>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PlayerDetails;