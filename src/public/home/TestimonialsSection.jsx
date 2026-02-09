// import * as React from "react";
// import { Box, CardContent, Divider, Grid, Stack, Typography } from "@mui/material";
// import { Section, SvCard } from "./ui";

// function TestimonialsSectionImpl({ testimonials, tone = "default" }) {
//   return (
//     <Section
//       id="testimonials"
//       overline="Testimonials / case studies"
//       title="Built for both drivers and advertisers"
//       subtitle="A platform experience designed around trust, clarity, and measurable value."
//       tone={tone}
//     >
//       <Grid container spacing={2.5}>
//         {testimonials.map((t) => (
//           <Grid item xs={12} md={6} key={t.name}>
//             <SvCard
//               sx={{
//                 height: "100%",
//                 boxShadow: { xs: "0 10px 26px rgba(11, 91, 90, 0.10)", md: "0 14px 38px rgba(11, 91, 90, 0.10)" },
//               }}
//             >
//               <CardContent sx={{ p: 3.2 }}>
//                 <Stack spacing={1.5}>
//                   <Typography
//                     variant="h6"
//                     sx={{ fontWeight: 900, lineHeight: 1.25 }}
//                   >
//                     “{t.quote}”
//                   </Typography>
//                   <Divider sx={{ opacity: 0.6 }} />
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <Box
//                       aria-hidden="true"
//                       sx={{
//                         width: 34,
//                         height: 34,
//                         borderRadius: 999,
//                         background:
//                           "linear-gradient(135deg, rgba(11, 91, 90, 0.9), rgba(46, 204, 113, 0.8))",
//                       }}
//                     />
//                     <Box>
//                       <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>
//                         {t.name}
//                       </Typography>
//                       <Typography variant="caption" sx={{ color: "text.secondary" }}>
//                         {t.role}
//                       </Typography>
//                     </Box>
//                   </Stack>
//                 </Stack>
//               </CardContent>
//             </SvCard>
//           </Grid>
//         ))}
//       </Grid>
//     </Section>
//   );
// }

// const TestimonialsSection = React.memo(TestimonialsSectionImpl);
// export default TestimonialsSection;

