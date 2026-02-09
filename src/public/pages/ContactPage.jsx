import * as React from "react";
import PublicShell from "../PublicShell";
import PageBackground from "./PageBackground";
import ContactSection from "../home/ContactSection";

export default function ContactPage() {
  return (
    <PublicShell>
      {({ openSignUp }) => (
        <PageBackground sx={{ py: 0 }}>
          <ContactSection tone="onDark" onOpenSignUp={openSignUp} />
        </PageBackground>
      )}
    </PublicShell>
  );
}

