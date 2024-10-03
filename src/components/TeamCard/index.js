import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCard} = props
  const {name, teamImageUrl, id} = teamCard
  return (
    <li className="team-card-item">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img className="team-card-logo" src={teamImageUrl} alt={name} />
        <p className="team-card-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
