import * as React from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TextField,
  InputAdornment,
  MenuItem,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Add,
  FilterList,
  Edit,
  ContentCopy,
  CloudUpload,
  CheckCircle,
  Schedule,
  PlayArrow,
  MoreVert,
} from "@mui/icons-material";
import StatCard from "./ui/StatCard";
import EmptyState from "./ui/EmptyState";
import { sampleCampaigns, packageTypes } from "./data/sampleData";
import { useDashboardTheme } from "./dashboard/DashboardThemeContext";

const statusConfig = {
  Draft: { color: "default", icon: Edit },
  Pending: { color: "warning", icon: Schedule },
  Active: { color: "success", icon: PlayArrow },
  Completed: { color: "info", icon: CheckCircle },
};

function CreateCampaignModal({ open, onClose }) {
  const { theme } = useDashboardTheme();
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState({
    name: "",
    package: "",
    neighborhoods: "",
    budget: "",
    startDate: "",
    endDate: "",
  });

  const steps = ["Choose Package", "Target & Budget", "Upload Artwork", "Review"];
  const nextDisabled = step === 0 ? !form.package : step === 1 ? !form.name || !form.budget : false;

  const handleNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const pkg = packageTypes.find((p) => p.id === form.package);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth slotProps={{ paper: { sx: { borderRadius: 2, background: theme.bgCard, border: `1px solid ${theme.border}` } } }}>
      <DialogTitle sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Create New Campaign</DialogTitle>
      <DialogContent>
        <Stepper
          activeStep={step}
          sx={{
            mb: 3,
            "& .MuiStepLabel-label": { color: theme.mode === "dark" ? theme.mustard : undefined },
            "& .MuiStepLabel-label.Mui-active": { color: theme.mode === "dark" ? theme.mustard : undefined },
            "& .MuiStepLabel-label.Mui-completed": { color: theme.mode === "dark" ? theme.mustard : undefined },
            "& .MuiStepIcon-root": { color: theme.mode === "dark" ? `${theme.teal}60` : undefined },
            "& .MuiStepIcon-root.Mui-active": { color: theme.teal },
            "& .MuiStepIcon-root.Mui-completed": { color: theme.green },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Typography variant="subtitle2" sx={{ mb: 2, color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                Select a package tier
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {packageTypes.map((p) => (
                  <Paper
                    key={p.id}
                    variant="outlined"
                    sx={{
                      p: 2,
                      cursor: "pointer",
                      border: form.package === p.id ? `2px solid ${theme.teal}` : `1px solid ${theme.border}`,
                      background: form.package === p.id ? `${theme.teal}18` : "transparent",
                      "&:hover": { borderColor: theme.teal, background: `${theme.teal}12` },
                    }}
                    onClick={() => setForm((f) => ({ ...f, package: p.id }))}
                  >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Box>
                        <Typography fontWeight={600} sx={{ color: theme.text }}>{p.name}</Typography>
                        <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                          {p.cars} cars • {p.kmTarget.toLocaleString()} km target
                        </Typography>
                      </Box>
                      <Typography fontWeight={700} sx={{ color: theme.teal }}>
                        KES {p.price.toLocaleString()}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <TextField
                fullWidth
                label="Campaign Name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                sx={{ mb: 2 }}
                InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
                inputProps={{ style: { color: theme.text } }}
              />
              <TextField
                fullWidth
                label="Target Neighborhoods / Routes"
                placeholder="e.g. Westlands, Kilimani, CBD"
                value={form.neighborhoods}
                onChange={(e) => setForm((f) => ({ ...f, neighborhoods: e.target.value }))}
                multiline
                rows={2}
                sx={{ mb: 2 }}
                InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
                inputProps={{ style: { color: theme.text } }}
              />
              <TextField
                fullWidth
                label="Budget (KES)"
                type="number"
                value={form.budget}
                onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                InputProps={{ startAdornment: <InputAdornment position="start" sx={{ color: theme.mode === "dark" ? theme.mustard : undefined }}>KES</InputAdornment> }}
                sx={{ mb: 2 }}
                InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
                inputProps={{ style: { color: theme.text } }}
              />
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  value={form.startDate}
                  onChange={(e) => setForm((f) => ({ ...f, startDate: e.target.value }))}
                  InputLabelProps={{ shrink: true, sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
                  inputProps={{ style: { color: theme.text } }}
                />
                <TextField
                  fullWidth
                  label="End Date"
                  type="date"
                  value={form.endDate}
                  onChange={(e) => setForm((f) => ({ ...f, endDate: e.target.value }))}
                  InputLabelProps={{ shrink: true, sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
                  inputProps={{ style: { color: theme.text } }}
                />
              </Box>
              {pkg && form.budget && (
                <Box sx={{ mt: 2, p: 1.5, borderRadius: 2, background: `${theme.green}18` }}>
                  <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                    Coverage estimate: ~{Math.round((Number(form.budget) / pkg.price) * pkg.kmTarget).toLocaleString()} km
                  </Typography>
                </Box>
              )}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Box
                sx={{
                  border: `2px dashed ${theme.border}`,
                  borderRadius: 2,
                  p: 4,
                  textAlign: "center",
                  "&:hover": { borderColor: theme.teal, background: `${theme.teal}12` },
                  cursor: "pointer",
                }}
              >
                <CloudUpload sx={{ fontSize: 48, color: theme.mode === "dark" ? theme.mustard : theme.textMuted, mb: 1 }} />
                <Typography sx={{ color: theme.text }}>Drag & drop ad artwork here</Typography>
                <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                  PNG, JPG up to 5MB
                </Typography>
              </Box>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Paper variant="outlined" sx={{ p: 2, borderColor: theme.border }}>
                <Typography variant="subtitle2" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>Campaign Summary</Typography>
                <Typography sx={{ color: theme.text }}>{form.name || "—"}</Typography>
                <Typography variant="body2" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                  {pkg?.name} • KES {form.budget ? Number(form.budget).toLocaleString() : "—"}
                </Typography>
              </Paper>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleBack} disabled={step === 0}>
          Back
        </Button>
        <Box sx={{ flex: 1 }} />
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={step === steps.length - 1 ? onClose : handleNext}
          disabled={nextDisabled && step < 2}
          sx={{
            background: `linear-gradient(135deg, ${theme.teal} 0%, #154a4e 100%)`,
            "&:hover": { background: `linear-gradient(135deg, #257a80 0%, ${theme.teal} 100%)` },
          }}
        >
          {step === steps.length - 1 ? "Create Campaign" : "Next"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function CampaignManagement() {
  const { theme } = useDashboardTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const [createOpen, setCreateOpen] = React.useState(false);

  React.useEffect(() => {
    if (searchParams.get("create") === "1") {
      setCreateOpen(true);
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [campaigns] = React.useState(sampleCampaigns);

  const filtered = campaigns.filter((c) => {
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const activeCount = campaigns.filter((c) => c.status === "Active").length;
  const totalKm = campaigns.reduce((a, c) => a + c.km_covered, 0);

  return (
    <Box>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, flexWrap: "wrap", gap: 2 }}>
          <Typography variant="h5" fontWeight={700} sx={{ color: theme.text }}>
            Campaign Management
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setCreateOpen(true)}
            sx={{
              background: `linear-gradient(135deg, ${theme.teal} 0%, #154a4e 100%)`,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { background: `linear-gradient(135deg, #257a80 0%, ${theme.teal} 100%)` },
            }}
          >
            New Campaign
          </Button>
        </Box>
      </motion.div>

      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <StatCard title="Active Campaigns" value={activeCount} variant="dark" />
        <StatCard title="Total KM Covered" value={totalKm} suffix=" km" variant="dark" />
      </Box>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 2,
            background: theme.bgCard,
            border: `1px solid ${theme.borderSubtle}`,
            overflow: "hidden",
          }}
        >
          <Box sx={{ p: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
            <TextField
              size="small"
              placeholder="Search campaigns..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="small" sx={{ color: theme.mode === "dark" ? theme.mustard : undefined }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                minWidth: 220,
                "& .MuiOutlinedInput-input": { color: theme.text },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: theme.border },
                "& .MuiInputBase-input::placeholder": { color: theme.mode === "dark" ? theme.mustard : undefined, opacity: 0.8 },
              }}
            />
            <TextField
              select
              size="small"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              InputProps={{ sx: { color: theme.text } }}
              InputLabelProps={{ sx: { color: theme.mode === "dark" ? theme.mustard : undefined } }}
              sx={{
                minWidth: 140,
                "& .MuiOutlinedInput-notchedOutline": { borderColor: theme.border },
                "& .MuiSelect-select": { color: theme.text },
              }}
            >
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="Draft">Draft</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </TextField>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ background: `${theme.green}18` }}>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Campaign</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Package</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Progress</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>KM Covered</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Budget</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Status</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: theme.mode === "dark" ? theme.mustard : theme.text }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map((row, i) => {
                  const progress = row.km_target ? Math.min(100, (row.km_covered / row.km_target) * 100) : 0;
                  const StatusIcon = statusConfig[row.status]?.icon || CheckCircle;
                  return (
                    <TableRow
                      key={row.id}
                      sx={{ "&:hover": { background: `${theme.green}12` } }}
                    >
                      <TableCell sx={{ color: theme.text }}>
                        <Typography fontWeight={500} sx={{ color: theme.text }}>{row.name}</Typography>
                        <Typography variant="caption" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                          {row.start_date} → {row.end_date}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: theme.text }}>{row.package_type}</TableCell>
                      <TableCell sx={{ minWidth: 140, color: theme.text }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                              flex: 1,
                              height: 8,
                              borderRadius: 4,
                              "& .MuiLinearProgress-bar": { background: theme.green },
                            }}
                          />
                          <Typography variant="caption" sx={{ color: theme.text }}>{Math.round(progress)}%</Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: theme.text }}>{row.km_covered.toLocaleString()} / {row.km_target.toLocaleString()} km</TableCell>
                      <TableCell sx={{ color: theme.text }}>KES {row.budget.toLocaleString()}</TableCell>
                      <TableCell>
                        <Chip
                          icon={<StatusIcon sx={{ fontSize: 16 }} />}
                          label={row.status}
                          color={statusConfig[row.status]?.color || "default"}
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="right" sx={{ color: theme.text }}>
                        <Tooltip title="Edit">
                          <IconButton size="small" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                            <Edit fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Duplicate">
                          <IconButton size="small" sx={{ color: theme.mode === "dark" ? theme.mustard : theme.textMuted }}>
                            <ContentCopy fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {filtered.length === 0 && (
            <Box sx={{ py: 6 }}>
              <EmptyState
                variant="dark"
                icon={FilterList}
                title="No campaigns match your filters"
                description="Try adjusting your search or status filter."
                actionLabel="Clear Filters"
                onAction={() => {
                  setSearch("");
                  setStatusFilter("all");
                }}
              />
            </Box>
          )}
        </Paper>
      </motion.div>

      <CreateCampaignModal open={createOpen} onClose={() => setCreateOpen(false)} />
    </Box>
  );
}
