import { create } from 'zustand';

interface State {
isDashboardMobileMenuOpen:boolean,
openDashboardMobileMenu :() => void,
closeDashboardMobileMenu :() => void,

isNotificationPanelOpen:boolean,
openNotificationPanel:() => void,
closeNotificationPanel:() => void,

isDashboardDesktopMenuOpen:boolean,
openDashboardDesktopMenu :() => void,
closeDashboardDesktopMenu :() => void,
}

export const useUIStore = create<State>()((set) => ({
 isDashboardMobileMenuOpen:false,
 isNotificationPanelOpen:false,
 isDashboardDesktopMenuOpen:true,

 openDashboardMobileMenu:() => set({isDashboardMobileMenuOpen:true}),
 closeDashboardMobileMenu:() => set({isDashboardMobileMenuOpen:false}),

 openNotificationPanel:() => set({isNotificationPanelOpen:true}),
 closeNotificationPanel:() => set({isNotificationPanelOpen:false}),

 openDashboardDesktopMenu:() => set({isDashboardDesktopMenuOpen:true}),
 closeDashboardDesktopMenu:() => set({isDashboardDesktopMenuOpen:false}),

}))