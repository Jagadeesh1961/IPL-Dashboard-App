import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: [],
    recentMatches: [],
    teamBannerUrl: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatch()
  }

  getTeamMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const fetchedMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const fetchedRecentMatches = data.recent_matches.map(eachTeam => ({
      competingTeam: eachTeam.competing_team,
      competingTeamLogo: eachTeam.competing_team_logo,
      date: eachTeam.date,
      firstInnings: eachTeam.first_innings,
      id: eachTeam.id,
      manOfTheMatch: eachTeam.man_of_the_match,
      matchStatus: eachTeam.match_status,
      result: eachTeam.result,
      secondInnings: eachTeam.second_innings,
      umpires: eachTeam.umpires,
      venue: eachTeam.venue,
    }))

    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: fetchedMatchDetails,
      recentMatches: fetchedRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state

    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-match ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="team-match-container">
            <img
              src={teamBannerUrl}
              className="banner-image"
              alt="team banner"
            />
            <h1 className="latest-match-heading">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recent-matches-list">
              {recentMatches.map(eachTeam => (
                <MatchCard matchCard={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
