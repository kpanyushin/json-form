import { ResultForm } from "../../ResultForm";
import { ConfigProps } from "../Tabs";

interface ResultProps {
  config: ConfigProps | null;
}

export const ResultTab = ({ config }: ResultProps): JSX.Element | null => {
  return config && <ResultForm schema={config} />;
};
