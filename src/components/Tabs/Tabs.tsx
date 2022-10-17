import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import BootstrapTabs from "react-bootstrap/Tabs";

import { ConfigTab } from "./ConfigTab/ConfigTab";
import { ResultTab } from "./ResultTab/ResultTab";

export interface ConfigProps {
  title?: string;
  description?: string;
  properties: {
    [key: string]: {
      title: string;
      type: string;
      [key: string]: string | boolean | number;
    };
  };
}

export const Tabs = (): JSX.Element => {
  const [config, setConfig] = useState<ConfigProps | null>(null);
  const [activeKey, setActiveKey] = useState<string>("config");
  const handleSelect = (key: string | null) => {
    if (!key) return;

    setActiveKey(key);
  };
  const handleConfigSubmit = (value: string) => {
    setConfig(JSON.parse(value));
    setActiveKey("result");
  };

  return (
    <BootstrapTabs
      id="tabs"
      className="mb-3"
      activeKey={activeKey}
      defaultActiveKey="config"
      data-testid="tabs"
      onSelect={handleSelect}
    >
      <Tab eventKey="config" title="Config">
        <ConfigTab onSubmit={handleConfigSubmit} />
      </Tab>
      <Tab eventKey="result" title="Result">
        <ResultTab config={config} />
      </Tab>
    </BootstrapTabs>
  );
};
