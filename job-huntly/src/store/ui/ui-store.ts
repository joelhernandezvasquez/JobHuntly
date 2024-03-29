import { create } from 'zustand';

interface State {
isDashboardMenuOpen:boolean,
openDashboardMenu :() => void,
closeDashboardMenu :() => void;
}

export const useUIStore = create<State>()((set) => ({
 isDashboardMenuOpen:false,

 openDashboardMenu:() => set({isDashboardMenuOpen:true}),
 closeDashboardMenu:() => set({isDashboardMenuOpen:false})

}))