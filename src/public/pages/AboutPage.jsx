import PageBackground from "./PageBackground";
import AboutSection from "../home/AboutSection";
import { valueDescriptionsByLabel, values } from "../home/constants";
import PublicShell from "../PublicShell";

export default function AboutPage() {
  return (
    <PublicShell>
      {({ openSignUp }) => (
        <PageBackground sx={{ py: 0 }}>
          <AboutSection
            onOpenSignUp={openSignUp}
            values={values}
            valueDescriptionsByLabel={valueDescriptionsByLabel}
          />
        </PageBackground>
      )}
    </PublicShell>
  );
}

