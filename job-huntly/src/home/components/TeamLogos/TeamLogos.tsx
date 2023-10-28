import Image from 'next/image';
import { teamLogos } from '@/helper/data/teamLogos';
import style from './style.module.css';

const TeamLogos = () => {
    return (
        <div className={style.team_logo_wrapper}>
            <h2 className={style.team_logo_headline}>Join Over 100,000 teams that are using JobHuntly to get more done</h2>

            <ul className={style.team_logo_menu}>
                {teamLogos.map((team) => {
                    return (
                        <li key={team.id} className={style.team_logo_menu_item}>
                            <Image
                                src={team.logo}
                                width={42}
                                height={42}
                                alt={`logo of ${team.companyName}`}
                            />
                            <h3 className={style.team_logo_menu_item_headline}>{team.companyName}</h3>
                        </li>
                    )
                })}

                <li className={style.team_logo_menu_item}>
                    <svg className={style.team_logo_icon} xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.9204 25.2013C44.8894 25.1731 50.5347 19.5103 50.5347 12.5347C50.5347 5.67361 44.8611 0 37.8681 0C30.875 0 25.3333 5.67361 25.2014 12.5347C25.2014 5.67361 19.5278 0 12.5347 0C5.67361 0 0 5.67361 0 12.6667C0 19.6597 5.67361 25.2014 12.5347 25.3333C5.54167 25.3333 0 31.0069 0 38C0 44.993 5.67361 50.6667 12.6667 50.6667C19.2441 50.6667 24.6542 45.6475 25.2741 39.2321C25.955 45.5841 31.3359 50.5345 37.8681 50.5345C44.8611 50.5345 50.5347 44.8609 50.5347 37.8678C50.5347 30.8922 44.8894 25.2295 37.9204 25.2013ZM25.2606 36.6364C25.8785 30.2378 31.2616 25.228 37.8155 25.2013C30.8472 25.1736 25.3333 19.6425 25.3333 12.7986C25.3333 19.6597 19.6597 25.3333 12.7986 25.3333C19.2072 25.4566 24.5798 30.2995 25.2606 36.6364Z" fill="#202430" />
                    </svg>
                    <h3 className={style.team_logo_menu_item_headline}>Bubles</h3>
                </li>
            </ul>
        </div>
    )
}

export default TeamLogos