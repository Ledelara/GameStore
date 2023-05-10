import "./Home.css";
import {useState} from 'react';

//Data
import bestSellers from "../data/bestSellers.json";
import releases from "../data/release.json";
import games from "../data/data.json";
import consoles from "../data/consoles.json";

const Home = () => {

    const [filterGenre, setFilterGenre] = useState(null)

  return (
    <div className="home-container">
        <div className='release-container'>
            <h2 className='release-h2'>Lançado recentemente: </h2>
            <div className='recent-release'>
                {releases.map(release => (
                    <>
                        <img src={release.image}/>
                        <p>{release.description}</p>
                    </>
                ))}
            </div>
        </div>
        <div className='game-container'>
            <h2 className='games-h2'>Jogos populares: </h2>
            <div>
                <button className='filter-buttons' onClick={() => setFilterGenre(null)}>Limpar filtro</button>
                <button className='filter-buttons' onClick={() => setFilterGenre('Ação')}>Ação</button>
                <button className='filter-buttons' onClick={() => setFilterGenre('Ação e aventura')}>Ação e aventura</button>
                <button className='filter-buttons' onClick={() => setFilterGenre('Esporte')}>Esporte</button>
                <button className='filter-buttons' onClick={() => setFilterGenre('Luta')}>Luta</button>
                <button className='filter-buttons' onClick={() => setFilterGenre('RPG')}>RPG</button>
                <button className='filter-buttons' onClick={() => setFilterGenre('Terror')}>Terror</button>
            </div>
            <div className='game-list'>
                {games.filter(game => !filterGenre || game.genre === filterGenre).map(game => {
                    return (
                        <>
                            <ul key={game.id}>
                                <li>
                                    <img src={game.image} alt={game.name}/>
                                </li>
                                <li>
                                    <p className='game-name'>{game.name}</p>
                                </li>
                                <li>
                                    <p>{game.genre}</p>
                                </li>
                                <li>
                                    <p>R$ {parseFloat(game.price).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                                </li>
                            </ul>
                        </>
                    )
                })}
            </div>
        </div>
        <div className='game-container'>
            <h2 className='games-h2'>Mais vendidos: </h2>
            <div className='game-list'>
                {bestSellers.map(bestSeller => {
                    return (
                        <>
                            <ul key={bestSeller.id}>
                                <li>
                                    <img src={bestSeller.image} alt={bestSeller.name}/>
                                </li>
                                <li>
                                    <p className='game-name'>{bestSeller.name}</p>
                                </li>
                                <li>
                                    <p>{bestSeller.genre}</p>
                                </li>
                                <li>
                                <p>R$ {parseFloat(bestSeller.price).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                                </li>
                            </ul>
                        </>
                    )
                })}
            </div>
        </div>
        <div className='premium-container'>
            <div>
                <p>Assine a GameStore <span>Premium</span> por apenas R$ 29,99 e ganhe 30% de desconto nas suas compras.</p>
                <button className='btn'>Confira!</button>
            </div>
            <div>
                {consoles.map(console => {
                    return (
                        <>
                            <img src={console.image} alt={console.name}/>
                            <p className='console-text'>Você também pode utilizar o desconto da GameStore <span>Premium</span> na compra de consoles. Aproveite!</p>
                        </>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Home
