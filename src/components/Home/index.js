import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    iplTeamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const fetchedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    console.log(fetchedData)

    this.setState({
      iplTeamsList: fetchedData,
      isLoading: false,
    })
  }

  render() {
    const {iplTeamsList, isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="dashboard-heading">IPL Dashboard</h1>
            </div>

            <ul className="ipl-teams-container">
              {iplTeamsList.map(eachTeam => (
                <TeamCard key={eachTeam.id} teamCard={eachTeam} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
