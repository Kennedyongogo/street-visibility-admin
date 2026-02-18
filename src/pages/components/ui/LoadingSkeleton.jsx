import { Box, Skeleton } from "@mui/material";
import { motion } from "framer-motion";

export function StatCardSkeleton() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Box
        sx={{
          p: 2.5,
          borderRadius: 2,
          background: "rgba(255,255,255,0.6)",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Skeleton variant="text" width="60%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="40%" height={36} />
        <Skeleton variant="text" width="30%" height={16} sx={{ mt: 1 }} />
      </Box>
    </motion.div>
  );
}

export function ChartSkeleton() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Box sx={{ p: 2, borderRadius: 2, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)" }}>
        <Skeleton variant="text" width={120} height={24} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" height={220} sx={{ borderRadius: 2 }} />
      </Box>
    </motion.div>
  );
}

export function TableSkeleton({ rows = 5 }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Box sx={{ p: 2, borderRadius: 2, background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)" }}>
        <Skeleton variant="text" width={180} height={28} sx={{ mb: 2 }} />
        {Array.from({ length: rows }).map((_, i) => (
          <Skeleton key={i} variant="rectangular" height={48} sx={{ mb: 1, borderRadius: 1 }} />
        ))}
      </Box>
    </motion.div>
  );
}
