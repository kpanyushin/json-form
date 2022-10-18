import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import BootstrapTabs from "react-bootstrap/Tabs";

import { ResultForm } from "../ResultForm";
import { stubConfig } from "../../utils/stubConfig";
import { ConfigForm } from "../ConfigForm/ConfigForm";

import { Config } from "../../types/types";

export const Tabs = (): JSX.Element => {
  const [schema, setSchema] = useState<Config | null>(null);
  const [activeKey, setActiveKey] = useState<string>("config");
  const handleSelect = (key: string | null) => {
    if (!key) return;

    setActiveKey(key);
  };
  const handleConfigSubmit = (config: string) => {
    setSchema(JSON.parse(config));
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
        <ConfigForm
          config={stubConfig as Config}
          onSubmit={handleConfigSubmit}
        />
      </Tab>
      <Tab eventKey="result" title="Result">
        {schema && <ResultForm schema={schema} />}
      </Tab>
    </BootstrapTabs>
  );
};
