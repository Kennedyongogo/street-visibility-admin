import ValuesSection from "../home/ValuesSection";
import { valueDescriptionsByLabel, values } from "../home/constants";
import PublicShell from "../PublicShell";

export default function ValuesPage() {
  return (
    <PublicShell>
      <ValuesSection values={values} valueDescriptionsByLabel={valueDescriptionsByLabel} />
    </PublicShell>
  );
}

