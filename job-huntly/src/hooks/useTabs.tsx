import {useState} from 'react'

const useTabs = () => {
 const [selectedTab, setSelectedTab] = useState(0);

 const handleSeletedTab = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  }
  
    return {
        selectedTab,
        handleSeletedTab
    }
}

export default useTabs