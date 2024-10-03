import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchCard

  const matchStatusClassName = matchStatus === 'Won' ? 'win' : 'lost'

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="match-card-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
