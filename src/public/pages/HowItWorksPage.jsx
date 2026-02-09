import HowItWorksSection from "../home/HowItWorksSection";
import { steps } from "../home/constants";
import PublicShell from "../PublicShell";
import PageBackground from "./PageBackground";

export default function HowItWorksPage() {
  return (
    <PublicShell>
      {({ openPricing }) => (
        <PageBackground sx={{ py: 0 }}>
          <HowItWorksSection steps={steps} onOpenPricing={openPricing} />
        </PageBackground>
      )}
    </PublicShell>
  );
}

