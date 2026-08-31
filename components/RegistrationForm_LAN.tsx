import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";

interface TeamMember {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  discord: string;
  instagram: string;
  steam?: string;
  institution: string;
  location: string;
}

interface FormData {
  game: string;
  teamName: string;
  teamMembers: TeamMember[];
}

const steps = ['Alege Jocul', 'Configurare Echipă', 'Detalii Participanți'];

const RegistrationForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedGame, setSelectedGame] = useState<string>("");
  const [teamName, setTeamName] = useState<string>("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      discord: "",
      instagram: "",
      steam: "",
      institution: "",
      location: "",
    },
  ]);

  const { handleSubmit } = useForm<FormData>();

  const handleGameChange = (event: any) => {
    const game = event.target.value;
    setSelectedGame(game);
    
    // Resetare logică: CS2 și LoL sunt echipe de 5 membri; restul sunt Solo
    const newSize = game === "cs2" || game === "lol" ? 5 : 1;
    setTeamName("");
    
    setTeamMembers(Array(newSize).fill(null).map(() => ({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      discord: "",
      instagram: "",
      steam: "",
      institution: "",
      location: "",
    })));
  };

  const handleMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...teamMembers];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setTeamMembers(newMembers);
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 0: return !!selectedGame;
      case 1: return (selectedGame === "cs2" || selectedGame === "lol") ? teamName.length > 2 : true;
      case 2: return teamMembers.every(m => m.firstName && m.lastName && m.email && m.phone && m.discord && m.instagram);
      default: return false;
    }
  };

  const onSubmit = async () => {
    if (!gdprConsent) {
      setSubmitError("Trebuie să accepți prelucrarea datelor.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const scriptUrl = "https://script.google.com/macros/s/AKfycbz_Y_7U6OZ3q80CuSsRLB2STqGUcTfZeJ0nsYM3Bi3FwgfNAleHnr23dcwj0eH-39uu/exec";
      
      const submissionData = {
        game: selectedGame,
        teamName: (selectedGame === "cs2" || selectedGame === "lol") ? teamName : `Solo_${teamMembers[0].lastName}`,
        leader: teamMembers[0],
        teamMembers: (selectedGame === "cs2" || selectedGame === "lol") ? teamMembers.slice(1) : []
      };

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors", // Important pentru Google Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData)
      });

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError("Eroare la trimitere. Verifică conexiunea.");
    } finally {
      setSubmitting(false);
    }
  };

  const commonTextFieldStyles = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
      "&.Mui-focused fieldset": { borderColor: "#00FF00" },
    },
    "& .MuiInputBase-input": { color: "white" },
    "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.7)" },
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: "100%", p: 2 }}>
      {submitSuccess ? (
        <Alert severity="success">Înscriere reușită! Verifică email-ul.</Alert>
      ) : (
        <>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label} sx={{ '& .MuiStepLabel-label': { color: 'white' } }}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <Stack spacing={3}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: "white" }}>Alege Jocul</InputLabel>
                <Select value={selectedGame} onChange={handleGameChange} sx={commonTextFieldStyles}>
                  <MenuItem value="cs2">Counter-Strike 2 (Echipă 5v5)</MenuItem>
                  <MenuItem value="lol">League of Legends (Echipă 5v5)</MenuItem>
                  <MenuItem value="mc">Minecraft (Solo)</MenuItem>
                  <MenuItem value="EAFC26">EA Sports FC 26 (Solo)</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" onClick={() => setActiveStep(1)} disabled={!selectedGame}>Înainte</Button>
            </Stack>
          )}

          {activeStep === 1 && (
            <Stack spacing={3}>
              {(selectedGame === "cs2" || selectedGame === "lol") ? (
                <TextField 
                  fullWidth 
                  label="Nume Echipă" 
                  value={teamName} 
                  onChange={(e) => setTeamName(e.target.value)} 
                  sx={commonTextFieldStyles} 
                />
              ) : (
                <Typography color="white">Ai ales o probă Solo. Apasă 'Înainte' pentru detalii.</Typography>
              )}
              <Box display="flex" justifyContent="space-between">
                <Button onClick={() => setActiveStep(0)}>Înapoi</Button>
                <Button variant="contained" onClick={() => setActiveStep(2)} disabled={(selectedGame === "cs2" || selectedGame === "lol") && !teamName}>Înainte</Button>
              </Box>
            </Stack>
          )}

          {activeStep === 2 && (
            <Stack spacing={3} sx={{ maxHeight: '60vh', overflowY: 'auto', p: 1 }}>
              {teamMembers.map((member, index) => (
                <Box key={index} sx={{ p: 2, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2 }}>
                  <Typography color="#00FF00" gutterBottom>
                    {index === 0 ? "Lider / Jucător Solo" : `Membru ${index + 1}`}
                  </Typography>
                  <Stack spacing={2}>
                    <TextField label="Nume" value={member.lastName} onChange={(e) => handleMemberChange(index, "lastName", e.target.value)} sx={commonTextFieldStyles} />
                    <TextField label="Prenume" value={member.firstName} onChange={(e) => handleMemberChange(index, "firstName", e.target.value)} sx={commonTextFieldStyles} />
                    <TextField label="Email" value={member.email} onChange={(e) => handleMemberChange(index, "email", e.target.value)} sx={commonTextFieldStyles} />
                    <TextField label="Telefon" value={member.phone} onChange={(e) => handleMemberChange(index, "phone", e.target.value)} sx={commonTextFieldStyles} />
                    <TextField label="Discord ID" value={member.discord} onChange={(e) => handleMemberChange(index, "discord", e.target.value)} sx={commonTextFieldStyles} />
                    <TextField label="Link Instagram" value={member.instagram} onChange={(e) => handleMemberChange(index, "instagram", e.target.value)} sx={commonTextFieldStyles} />
                    {selectedGame === "cs2" && (
                      <TextField label="Link Steam" value={member.steam} onChange={(e) => handleMemberChange(index, "steam", e.target.value)} sx={commonTextFieldStyles} />
                    )}
                  </Stack>
                </Box>
              ))}
              
              <Box sx={{ p: 2, border: '1px dashed rgba(255,255,255,0.08)', borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.01)' }}>
                <Typography color="white" sx={{ fontWeight: 'bold', mb: 1 }}>Taxă de participare — 15 lei de persoana</Typography>
                <Typography color="white" sx={{ mb: 1 }}>
                  Se solicită plata unei taxe de participare de <strong>15&nbsp;lei</strong>. Plata se poate efectua prin Revolut , IBAN: <strong>RO53 REVO 0000 1686 3916 8767</strong>.
                </Typography>
                <Typography color="white" sx={{ mb: 1 }}>
                  <strong>Important:</strong> la plată trebuie să apară <em>Prenume Nume</em> exact ca în formular.
                </Typography>
                <Typography color="white" variant="caption" sx={{ mt: 1 }}>
                  Pentru nelămuriri legate de plată: <em>lsaciasi@gmail.com</em>
                </Typography>
              </Box>

              <Box>
                <input type="checkbox" checked={gdprConsent} onChange={(e) => setGdprConsent(e.target.checked)} />
                <Typography variant="caption" color="white" sx={{ ml: 1 }}>Accept prelucrarea datelor personale.</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Button onClick={() => setActiveStep(1)}>Înapoi</Button>
                <Button 
                  variant="contained" 
                  onClick={onSubmit} 
                  disabled={submitting || !validateStep(2)}
                  sx={{ background: 'linear-gradient(45deg, #00FF00, #0047FF)' }}
                >
                  {submitting ? <CircularProgress size={24} /> : "Finalizează Înscrierea 🎮"}
                </Button>
              </Box>
            </Stack>
          )}
        </>
      )}
    </Box>
  );
};

export default RegistrationForm;