'use client';

import { ReactNode, useState } from "react";
import Image from "next/image";
import { TabsItem } from "@/helper/interfaces/Tabs";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import style from './style.module.css';

interface Props {
  tabList: TabsItem[],
  children: ReactNode
}

const Tabs = ({ tabList, children }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSeletedTab = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  }

  return (
    <>
      <ul className={style.tabs_menu}>
        {tabList.map((tab, index) => {
          return (<li key={tab.id}
                    className={`${style.tabItem} ${selectedTab === index && style.active_tab}`}
                    onClick={() => handleSeletedTab(index)}>
                    {tab.item}
                </li>
          )
        })}
      </ul>

      <div className={style.tab_content}>
        {tabList[selectedTab].content.illustration &&
          <Image
            className={style.tab_header_illustration}
            width={290}
            height={200}
            src={tabList[selectedTab].content.illustration as StaticImport}
            alt={`illustration of ${tabList[selectedTab].content.title}`}
          >
          </Image>
        }
        <h2 className={style.tab_header}>{tabList[selectedTab].content.title}</h2>
        <p className={style.tab_header_content}>{tabList[selectedTab].content.description}</p>
        {children}
      </div>
    </>
  )
}

export default Tabs