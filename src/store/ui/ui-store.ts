import { create } from 'zustand';

interface State {
isDashboardMenuOpen:boolean,
openDashboardMenu :() => void,
closeDashboardMenu :() => void,

isNotificationPanelOpen:boolean,
openNotificationPanel:() => void,
closeNotificationPanel:() => void;
}

export const useUIStore = create<State>()((set) => ({
 isDashboardMenuOpen:false,
 isNotificationPanelOpen:false,

 openDashboardMenu:() => set({isDashboardMenuOpen:true}),
 closeDashboardMenu:() => set({isDashboardMenuOpen:false}),

 openNotificationPanel:() => set({isNotificationPanelOpen:true}),
 closeNotificationPanel:() => set({isNotificationPanelOpen:false}),



}))