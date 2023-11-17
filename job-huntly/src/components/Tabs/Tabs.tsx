'use client';

import { ReactNode } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import useTabs from "@/hooks/useTabs";
import { TabsItem } from "@/helper/interfaces/Tabs";
import TabsContent from "../TabsContent/TabsContent";
import style from './style.module.css';

interface Props {
  tabList: TabsItem[],
  children: ReactNode
}

const Tabs = ({ tabList, children }: Props) => {
  const { selectedTab, handleSeletedTab } = useTabs();

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

      <TabsContent
        heading={tabList[selectedTab].content.title}
        subHeading={tabList[selectedTab].content.description}
        additionalElement={children}
      >
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
      </TabsContent>
    </>
  )
}

export default Tabs