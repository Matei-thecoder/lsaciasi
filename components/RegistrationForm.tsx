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
  // Checkbox,
} from "@mui/material";
// import {
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";
import { useForm } from "react-hook-form";

interface TeamMember {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institutionType: string;
  institution: string;
  location: string;
  accommodation: string;
  facebook?: string;
}

const steps = ['Selectare Proba', 'Număr Participanți', 'Detalii Echipă'];

interface FormData {
  competition: string;
  teamName: string;
  teamMembers: TeamMember[];
}

const RegistrationForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCompetition, setSelectedCompetition] = useState<string>("");
  const [teamSize, setTeamSize] = useState<number>(1);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      institutionType: "university",
      institution: "",
      location: "",
      accommodation: "Nu",
    },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [teamName, setTeamName] = useState<string>("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const { handleSubmit } = useForm<FormData>({
    defaultValues: {
      competition: "",
      teamName: "",
      teamMembers: [
        {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          institutionType: "university",
          institution: "",
          location: "",
          accommodation: "Nu",
        },
      ],
    },
  });

  const handleCompetitionChange = (event: any) => {
    setSelectedCompetition(event.target.value);
    setTeamSize(1);
    setTeamMembers([
      {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        institutionType: event.target.value === "junior" ? "highschool" : "university",
        institution: "",
        location: "",
        accommodation: "Nu",
      },
    ]);
  };

  const handleTeamSizeChange = (event: any) => {
    const newSize = parseInt(event.target.value);
    setTeamSize(newSize);
    
    if (newSize > teamMembers.length) {
      const newMembers = Array(newSize - teamMembers.length).fill(null).map(() => ({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        institutionType: "university",
        institution: "",
        location: "",
        accommodation: "Nu",
      }));
      setTeamMembers([...teamMembers, ...newMembers]);
    } else {
      setTeamMembers(teamMembers.slice(0, newSize));
    }
  };

  const handleMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...teamMembers];
    newMembers[index] = {
      ...newMembers[index],
      [field]: value,
    };
    setTeamMembers(newMembers);
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 0:
        return !!selectedCompetition;
      case 1:
        return teamSize > 0;
      case 2:
        return teamMembers.every(member => {
          const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'institution', 'location', 'accommodation'];
          return requiredFields.every(field => member[field as keyof TeamMember] !== '');
        });
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const onSubmit = async () => {
    if (!gdprConsent) {
      setSubmitError("Trebuie să fiți de acord cu prelucrarea datelor personale pentru a putea continua.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    
    try {
      const scriptUrl = "https://script.google.com/macros/s/AKfycbwC5-F6gQRMzzSlnLNDHn_KsWOga-7G0CSqMYdVO2wP-F7Qs5rxOpDwsE5LoW1Nof7Y_A/exec";
      
      // Prepare the data
      const submissionData = {
        competition: selectedCompetition,
        teamName: teamSize > 2 ? teamName : "Team " + teamMembers[0].lastName,
        teamLeader: {
          firstName: teamMembers[0].firstName,
          lastName: teamMembers[0].lastName,
          email: teamMembers[0].email,
          phone: teamMembers[0].phone,
          institutionType: teamMembers[0].institutionType,
          institution: teamMembers[0].institution,
          location: teamMembers[0].location,
          accommodation: "Nu",
          facebook: teamMembers[0].facebook
        },
        teamMembers: teamSize > 1 ? teamMembers.slice(1).map(member => ({
          firstName: member.firstName,
          lastName: member.lastName,
          email: member.email,
          phone: member.phone,
          institutionType: member.institutionType,
          institution: member.institution,
          location: member.location,
          accommodation: "Nu",
          facebook: member.facebook
        })) : []
      };

      console.log("Sending data:", JSON.stringify(submissionData)); // Debug log

      // Submit to Google Apps Script
      const response = await fetch(scriptUrl, {
        redirect: "follow",
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(submissionData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSubmitSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("A apărut o eroare la trimiterea formularului. Vă rugăm să încercați din nou.");
    } finally {
      setSubmitting(false);
    }
  };

  const commonTextFieldStyles = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.1)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.2)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#DA6CFF",
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.7)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#DA6CFF",
    },
    "& .MuiSelect-icon": {
      color: "rgba(255, 255, 255, 0.7)",
    },
  };

  const selectStyles = {
    ...commonTextFieldStyles,
    "& .MuiSelect-select": {
      padding: "12px 14px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#DA6CFF",
    },
  };

  const renderNavigationButtons = () => {
    if (activeStep === steps.length - 1) {
      return (
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{
            width: '100%',
            mt: { xs: 3, md: 4 },
            justifyContent: 'flex-end',
          }}
        >
          <Button
            onClick={handleBack}
            sx={{
              color: '#DA6CFF',
              background: 'rgba(218, 108, 255, 0.1)',
              border: '1px solid rgba(218, 108, 255, 0.2)',
              borderRadius: '10px',
              padding: { xs: '8px 16px', md: '8px 20px' },
              fontSize: { xs: '0.9rem', md: '0.95rem' },
              fontWeight: 'bold',
              width: { xs: '100%', sm: 'auto' },
              minWidth: { sm: '120px' },
              textTransform: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                background: 'rgba(218, 108, 255, 0.15)',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(218, 108, 255, 0.15)',
                border: '1px solid rgba(218, 108, 255, 0.3)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>← Înapoi</span>
          </Button>
          <Button
            type="submit"
            disabled={submitting}
            sx={{
              background: 'linear-gradient(45deg, #DA6CFF 30%, #4800FF 90%)',
              color: 'white',
              padding: { xs: '8px 16px', md: '8px 20px' },
              fontSize: { xs: '0.9rem', md: '0.95rem' },
              fontWeight: 'bold',
              width: { xs: '100%', sm: 'auto' },
              minWidth: { sm: '120px' },
              borderRadius: '10px',
              textTransform: 'none',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, #4800FF 30%, #DA6CFF 90%)',
                opacity: 0,
                transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              },
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(218, 108, 255, 0.3)',
                '&::before': {
                  opacity: 1,
                },
              },
              '&:active': {
                transform: 'translateY(0)',
              },
              '&:disabled': {
                background: 'rgba(255, 255, 255, 0.1)',
                transform: 'none',
                boxShadow: 'none',
              }
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>
              {submitting ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Trimite Înscrierea 🚀"
              )}
            </span>
          </Button>
        </Stack>
      );
    }

    return (
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{
          width: '100%',
          mt: { xs: 3, md: 4 },
          justifyContent: 'space-between',
        }}
      >
        {activeStep > 0 && (
          <Button
            onClick={handleBack}
            sx={{
              color: '#DA6CFF',
              background: 'rgba(218, 108, 255, 0.1)',
              border: '1px solid rgba(218, 108, 255, 0.2)',
              borderRadius: '10px',
              padding: { xs: '8px 16px', md: '8px 20px' },
              fontSize: { xs: '0.9rem', md: '0.95rem' },
              fontWeight: 'bold',
              width: { xs: '100%', sm: 'auto' },
              minWidth: { sm: '120px' },
              textTransform: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                background: 'rgba(218, 108, 255, 0.15)',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(218, 108, 255, 0.15)',
                border: '1px solid rgba(218, 108, 255, 0.3)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>← Înapoi</span>
          </Button>
        )}
        <Button
          onClick={handleNext}
          disabled={!validateStep(activeStep)}
          sx={{
            background: 'linear-gradient(45deg, #DA6CFF 30%, #4800FF 90%)',
            color: 'white',
            padding: { xs: '8px 16px', md: '8px 20px' },
            fontSize: { xs: '0.9rem', md: '0.95rem' },
            fontWeight: 'bold',
            width: { xs: '100%', sm: 'auto' },
            minWidth: { sm: '120px' },
            borderRadius: '10px',
            textTransform: 'none',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            marginLeft: { xs: 0, sm: activeStep === 0 ? 'auto' : 0 },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, #4800FF 30%, #DA6CFF 90%)',
              opacity: 0,
              transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            },
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(218, 108, 255, 0.3)',
              '&::before': {
                opacity: 1,
              },
            },
            '&:active': {
              transform: 'translateY(0)',
            },
            '&:disabled': {
              background: 'rgba(255, 255, 255, 0.1)',
              transform: 'none',
              boxShadow: 'none',
            }
          }}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>
            Următorul →
          </span>
        </Button>
      </Stack>
    );
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ 
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            padding: { xs: "16px", md: "20px" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Selectează Proba
              </InputLabel>
              <Select
                value={selectedCompetition}
                onChange={handleCompetitionChange}
                label="Selectează Proba"
                sx={selectStyles}
              >
                <MenuItem value="web">Web Development</MenuItem>
                <MenuItem value="desktop-mobile">Desktop & Mobile Applications</MenuItem> 
                <MenuItem value="ctf">Capture the Flag</MenuItem> 
                <MenuItem value="junior">Junior Dev</MenuItem>
                <MenuItem value="design">Design UI / UX</MenuItem>
                <MenuItem value="cpu">CPU Design & Modeling</MenuItem> 
              </Select>
            </FormControl>
            {renderNavigationButtons()}
          </Box>
        );

      case 1:
        return (
          <Box sx={{ 
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            padding: { xs: "16px", md: "20px" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                Număr de Participanți
              </InputLabel>
              {selectedCompetition != 'junior' ? (
                <Select
                  value={teamSize}
                  onChange={handleTeamSizeChange}
                label="Număr de Participanți"
                sx={selectStyles}
              >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              ) : (
                <Select
                  value={teamSize}
                  onChange={handleTeamSizeChange}
                  label="Număr de Participanți"
                  sx={selectStyles}
                >
                  <MenuItem value={1}>1</MenuItem>
                </Select>
              )}
            </FormControl>

            {teamSize > 1 && (
              <TextField
                fullWidth
                required
                label="Numele Echipei"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                sx={commonTextFieldStyles}
              />
            )}
            {renderNavigationButtons()}
          </Box>
        );

      case 2:
        return (
          <Box sx={{ 
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            padding: { xs: "16px", md: "20px" },
            height: "100%",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(180deg, #DA6CFF 0%, #4800FF 100%)",
              },
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              margin: "1rem",
            },
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05)",
          }}>
            <Stack spacing={{ xs: 3, md: 4 }} sx={{ width: "100%", height: "100%" }}>
              {teamMembers.map((member, index) => (
                <Box
                  key={index}
                  sx={{
                    background: "transparent",
                    border: "none",
                    padding: { xs: "12px", md: "16px" },
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      marginBottom: { xs: "16px", md: "20px" },
                      background: "linear-gradient(45deg, #DA6CFF 30%, #4800FF 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    Participant {index + 1}
                  </Typography>
                  <Stack spacing={{ xs: 2, md: 3 }}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, md: 3 }}>
                      <TextField
                        required
                        label="Nume"
                        value={member.lastName}
                        onChange={(e) => handleMemberChange(index, "lastName", e.target.value)}
                        sx={{ ...commonTextFieldStyles, flex: 1 }}
                      />
                      <TextField
                        required
                        label="Prenume"
                        value={member.firstName}
                        onChange={(e) => handleMemberChange(index, "firstName", e.target.value)}
                        sx={{ ...commonTextFieldStyles, flex: 1 }}
                      />
                    </Stack>
                    <TextField
                      required
                      type="email"
                      label="Email"
                      value={member.email}
                      onChange={(e) => handleMemberChange(index, "email", e.target.value)}
                      sx={commonTextFieldStyles}
                    />
                    <TextField
                      required
                      type="tel"
                      label="Telefon"
                      value={member.phone}
                      onChange={(e) => handleMemberChange(index, "phone", e.target.value)}
                      sx={commonTextFieldStyles}
                    />
                    
                    <FormControl fullWidth>
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        Tip Instituție
                      </Typography>
                      {selectedCompetition == 'junior' ? (
                        <Select
                          value={member.institutionType}
                          onChange={(e) => handleMemberChange(index, "institutionType", e.target.value as string)}
                          sx={selectStyles}
                        >
                          <MenuItem value="highschool">Liceu</MenuItem>
                        </Select>
                      ) :
                      <Select
                          value={member.institutionType}
                          onChange={(e) => handleMemberChange(index, "institutionType", e.target.value as string)}
                          sx={selectStyles}
                        >
                          <MenuItem value="university">Universitate</MenuItem>
                          <MenuItem value="highschool">Liceu</MenuItem>
                        </Select>
                      }
                    </FormControl>

                    <TextField
                      required
                      label="Instituție (Facultate / Liceu)"
                      value={member.institution}
                      onChange={(e) => handleMemberChange(index, "institution", e.target.value)}
                      sx={commonTextFieldStyles}
                    />

                    <TextField
                      required
                      label="Localitate"
                      value={member.location}
                      onChange={(e) => handleMemberChange(index, "location", e.target.value)}
                      sx={commonTextFieldStyles}
                    />

                    {/* <FormControl>
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        Cazare
                      </Typography>
                      <RadioGroup
                        row
                        value={member.accommodation}
                        onChange={(e) => handleMemberChange(index, "accommodation", e.target.value)}
                        sx={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '8px',
                          padding: '10px 15px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <FormControlLabel 
                          value="yes" 
                          control={
                            <Radio 
                              sx={{ 
                                color: 'rgba(255, 255, 255, 0.7)',
                                '&.Mui-checked': {
                                  color: '#DA6CFF',
                                },
                              }} 
                            />
                          } 
                          label="Da" 
                          sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        />
                        <FormControlLabel 
                          value="no" 
                          control={
                            <Radio 
                              sx={{ 
                                color: 'rgba(255, 255, 255, 0.7)',
                                '&.Mui-checked': {
                                  color: '#DA6CFF',
                                },
                              }} 
                            />
                          } 
                          label="Nu" 
                          sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        />
                      </RadioGroup>
                    </FormControl> */}

                    <TextField
                      label="Facebook (opțional)"
                      value={member.facebook}
                      onChange={(e) => handleMemberChange(index, "facebook", e.target.value)}
                      sx={commonTextFieldStyles}
                    />
                  </Stack>
                </Box>
              ))}
              
              <Box sx={{ mt: 2 }}>
                <FormControl>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <input
                      type="checkbox"
                      id="gdpr-consent"
                      checked={gdprConsent}
                      onChange={(e) => setGdprConsent(e.target.checked)}
                      style={{
                        width: '20px',
                        height: '20px',
                        accentColor: '#DA6CFF',
                      }}
                    />
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Sunt de acord cu prelucrarea datelor mele personale conform{' '}
                      <a 
                        href="/gdpr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          color: '#DA6CFF',
                          textDecoration: 'none',
                        }}
                        className="hover-underline"
                      >
                        politicii de confidențialitate
                      </a>
                    </Typography>
                  </Stack>
                </FormControl>
              </Box>

              {renderNavigationButtons()}
            </Stack>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}
      
      {submitSuccess ? (
        <Stack spacing={2} sx={{ textAlign: "center", my: 4 }}>
          <Typography variant="h5" color="white">
            Înscrierea a fost trimisă cu succes!
          </Typography>
          <Typography color="rgba(255, 255, 255, 0.7)">
            Veți primi un email de confirmare în curând.
          </Typography>
        </Stack>
      ) : (
        <>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "#DA6CFF",
              },
              "& .MuiStepLabel-root .Mui-active": {
                color: "#DA6CFF",
              },
              "& .MuiStepLabel-root .Mui-disabled": {
                color: "rgba(255, 255, 255, 0.3)",
              },
              "& .MuiStepConnector-line": {
                borderColor: "rgba(255, 255, 255, 0.1)",
              },
              "& .MuiStepConnector-active": {
                "& .MuiStepConnector-line": {
                  borderColor: "#DA6CFF",
                },
              },
              "& .MuiStepConnector-completed": {
                "& .MuiStepConnector-line": {
                  borderColor: "#DA6CFF",
                },
              },
              "& .MuiStepLabel-label": {
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: { xs: "0.8rem", md: "0.9rem" },
                "&.Mui-disabled": {
                  color: "rgba(255, 255, 255, 0.3)",
                },
              },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ 
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1.5, md: 2 },
            minHeight: 0,
            mt: { xs: 2, md: 3 },
          }}>
            {renderStepContent(activeStep)}
          </Box>
        </>
      )}
    </Box>
  );
};

export default RegistrationForm; 