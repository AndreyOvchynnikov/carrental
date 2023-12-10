import Container from "components/Container";
import { teamData } from "data/teamData";
import s from './Team.module.css';

const Team = () => {
 
  return (
    
      <section>
        <Container>
              <ul className={s.teamList}>
            {teamData.map((employee, index) => {
                const { img, worker, job } = employee;
                return (
                    <li key={index} className={s.teamItem}>
                            <div className={s.teamItemImage}>
                                <img src={img} alt={worker} />
                            </div>
                            <div className={s.teamDescription}>
                                <h3>{worker}</h3>
                                <p>{job}</p>
                            </div>
                        </li>)
                    })}       
          </ul>
        </Container>
      </section>

  );
}

export default Team;
