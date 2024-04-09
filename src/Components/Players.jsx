import { useEffect, useState } from 'react';
import { useGetPlayersQuery } from '../api/Api'
import { useNavigate } from 'react-router-dom';
import PlayerCard from './Card';
import AddPuppyForm from './Form';
import SearchBar from './SearchBar';

const Players = () => {
  const navigate = useNavigate();
  
  const { data = {}, error, isLoading, refetch } = useGetPlayersQuery();

  const [searchParameter, setSearchParameter] = useState('');

  useEffect(()=>{
    refetch();
  },[])

  
  if (isLoading) {
   return <section><p>Players are loading...</p></section>
  } 

  
  if (error) {
    return <section><p>{error.data.error.message}</p></section>
  }

  const playersToDisplay = searchParameter && data?.data?.players ? data?.data?.players.filter(player => player.name.toLowerCase().includes(searchParameter.toLowerCase())) : data?.data?.players

  return (
    <section >
        <AddPuppyForm />
        <h1>All Players</h1>
        <SearchBar searchParameter={searchParameter} setSearchParameter={setSearchParameter}/>
      <div className="players">
         
        {playersToDisplay && playersToDisplay.map((player) => (
        
            <button className="player-card"  key={player.id} onClick={() => navigate(`/players/${player.id}`)}>
                <PlayerCard  name={player.name} imageUrl={player.imageUrl}/>
            </button>
      ))}
      </div>
    </section>
  );
};


export default Players;