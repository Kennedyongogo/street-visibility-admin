import FeaturesSection from "../home/FeaturesSection";
import { features } from "../home/constants";
import PublicShell from "../PublicShell";

export default function FeaturesPage() {
  return (
    <PublicShell>
      <FeaturesSection features={features} />
    </PublicShell>
  );
}

