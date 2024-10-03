import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latest-match-details-container">
      <div className="image-left-container">
        <div className="left-container">
          <p className="competingTeam">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="competingTeamLogo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr className="separator" />
      <div className="right-container">
        <h1 className="right-headings">First Innings</h1>
        <p className="right-answers">{firstInnings}</p>
        <h1 className="right-headings">Second Innings</h1>
        <p className="right-answers">{secondInnings}</p>
        <h1 className="right-headings">Man Of The Match</h1>
        <p className="right-answers">{manOfTheMatch}</p>
        <h1 className="right-headings">Umpires</h1>
        <p className="right-answers">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
