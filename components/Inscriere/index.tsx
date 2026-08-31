import React, { useState } from "react";
import { Box, Typography, Stack, Button, Modal } from "@mui/material";
import MainLayout from "../MainLayout";
import RegistrationForm from "../RegistrationForm";
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

const Inscriere: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MainLayout>
     <Box
  sx={{
    height: "100svh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    background: "#000000",  // Changed to black
    '&::after': {
      content: '""',
      position: "absolute",
      top: "0%",
      right: "0%",
      width: "40%",
      height: "40%",
      background: "radial-gradient(circle at center, rgba(72, 0, 255, 0.1) 0%, transparent 70%)",
      filter: "blur(100px)",
      zIndex: 0,
    },
  }}
      >
        {/* Navigation Bar */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            position: 'fixed',
            top: { xs: 'auto', md: '2rem' },
            bottom: { xs: '1rem', md: 'auto' },
            right: { xs: '50%', md: '2rem' },
            transform: { xs: 'translateX(50%)', md: 'none' },
            zIndex: 1000,
            width: { xs: '90%', md: 'auto' },
            maxWidth: { xs: '300px', md: 'none' },
            justifyContent: { xs: 'center', md: 'flex-end' },
            gap: { xs: 1, md: 2 },
          }}
        >
          <Button
            onClick={handleOpen}
            startIcon={<InfoIcon />}
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 1.5 },
              fontSize: { xs: '0.875rem', md: '1rem' },
              flex: { xs: 1, md: 'initial' },
              minWidth: { xs: '0', md: '120px' },
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
              textTransform: 'none',
              borderRadius: '12px',
            }}
          >
            Info
          </Button>

          <Button
            onClick={() => navigate('/')}
            startIcon={<HomeIcon />}
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              px: { xs: 2, md: 3 },
              py: { xs: 1.5, md: 1.5 },
              fontSize: { xs: '0.875rem', md: '1rem' },
              flex: { xs: 1, md: 'initial' },
              minWidth: { xs: '0', md: '120px' },
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
              textTransform: 'none',
              borderRadius: '12px',
            }}
          >
            Home
          </Button>
        </Stack>

        <Box
          sx={{
            maxWidth: "800px",
            height: { xs: "88%", md: "92%" },
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            padding: { xs: "1rem", md: "2rem" },
            position: "relative",
            zIndex: 1,
            gap: "8px",
          }}
        >
          <Stack spacing={2} sx={{ textAlign: "center", mb: 3, justifyContent: "center", alignItems: "center" }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "800",
                fontSize: { xs: "2rem", md: "2.5rem" },
                textAlign: "center",
                "& span": {
                  background: "linear-gradient(45deg, #DA6CFF 30%, #4800FF 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
                "& span:first-of-type": {
                  color: "white",
                  WebkitTextFillColor: "white",
                  background: "none",
                },
              }}
            >
              <span>Înscriere</span> <span>ITMarathon</span>
            </Typography>
          </Stack>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                flex: 1,
                padding: { xs: "1.5rem", md: "2rem" },
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
              }}
            >
              <RegistrationForm />
            </Box>
          </Box>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '90%', md: '600px' },
                bgcolor: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                p: 4,
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  color: 'white',
                  mb: 2,
                  fontWeight: 'bold',
                }}
              >
                Detalii despre înscriere
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 2,
                }}
              >
                Completează formularul de mai jos pentru a te înscrie la ITMarathon. 
                Alege proba dorită și completează toate detaliile necesare pentru echipa ta.
              </Typography>
              <Button
                onClick={handleClose}
                sx={{
                  color: 'white',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '8px 16px',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                Am înțeles
              </Button>
            </Box>
          </Modal>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Inscriere; 