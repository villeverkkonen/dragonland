import React from 'react'
import highscoreService from '../services/highscores'

interface Highscore {
  id: string
  name: string
  roundsFought: number
  hits: number
  gold: number
}

interface HighscoresState {
  highscores: Highscore[]
}

export class Highscores extends React.Component<any, HighscoresState> {
  constructor(props: HighscoresState) {
    super(props)
    this.state = {
      highscores: [],
    }
  }

  async componentDidMount() {
    const highscores = await highscoreService.getTopTenOrdered()
    await this.setState({ highscores })
  }

  render() {
    return (
      <div className="highscores">
        <h3>Highscores</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rounds</th>
              <th>Hits</th>
              <th>Gold</th>
            </tr>
          </thead>
          <tbody>
            {this.state.highscores.map((highscore) => (
              <tr key={highscore.id}>
                {highscore.name.length > 15 ? (
                  <td>{highscore.name.slice(0, 15)}</td>
                ) : (
                  <td>{highscore.name}</td>
                )}
                <td>{highscore.roundsFought}</td>
                <td>{highscore.hits}</td>
                <td>{highscore.gold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Highscores
