import Productsmain from "../Productsmain";
import { Text } from '@mantine/core';
import { useState } from "react";

function TabsProductM() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Texto', 'Texto', 'Texto'];

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <>
            <div className="tabs-container">
                <div className="tab-list">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`tab ${index === activeTab ? 'active-tab' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            <Text
                                mt={45}
                                mr={15}
                                fw={700}
                            >
                                {tab}
                            </Text>
                        </div>
                    ))}
                </div>

                <div className="tab-content">
                    {activeTab === 0 && <Productsmain />}
                    {activeTab === 1 && <Productsmain />}
                    {activeTab === 2 && <Productsmain />}
                </div>
            </div>
        </>
    );
}

export default TabsProductM;