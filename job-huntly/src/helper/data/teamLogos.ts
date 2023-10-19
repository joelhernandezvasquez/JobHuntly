import { TeamLogo } from "../interfaces/TeamLogo";
import waveLogo from '../../assets/Group.jpg';
import DsignLogo from '../../assets/Group 170.jpg';
import joboxLogo from '../../assets/Logo 28.jpg';
import twinsLogo from '../../assets/Vector.jpg';
import bubleLogo from '../../assets/Union.jpg';

export const teamLogos:TeamLogo [] = [
    {
        id:crypto.randomUUID(),
        companyName:'Wave',
        logo:waveLogo
    },
    {
        id:crypto.randomUUID(),
        companyName:'Dsign.',
        logo:DsignLogo
    },
    {
        id:crypto.randomUUID(),
        companyName:'Jobox',
        logo:joboxLogo
    },
    {
        id:crypto.randomUUID(),
        companyName:'Twins',
        logo:twinsLogo
    }
]