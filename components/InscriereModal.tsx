import React, { useState } from "react";
import { Box, Typography, Stack, Button, Modal, Backdrop } from "@mui/material";
import RegistrationForm from "./RegistrationForm";
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

interface InscriereModalProps {
  open: boolean;
  onClose: () => void;
}

const InscriereModal: React.FC<InscriereModalProps> = ({ open, onClose }) => {
  const [infoOpen, setInfoOpen] = useState(false);

  const handleInfoOpen = () => setInfoOpen(true);
  const handleInfoClose = () => setInfoOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="inscriere-modal"
        BackdropComponent={Backdrop}
        BackdropProps={{
          sx: {
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '95%', md: '900px' },
            maxHeight: '90vh',
            bgcolor: 'rgba(0, 0, 0, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            p: { xs: 2, md: 4 },
            backdropFilter: 'blur(10px)',
            overflow: 'auto',
            background: "#000000",
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
          {/* Close Button */}
          <Box
            component="button"
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: { xs: '1rem', md: '2rem' },
              right: { xs: '1rem', md: '2rem' },
              color: 'white',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '8px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <CloseIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
          </Box>

          {/* Info Button */}
          <Button
            onClick={handleInfoOpen}
            startIcon={<InfoIcon />}
            sx={{
              position: 'absolute',
              top: { xs: '1rem', md: '2rem' },
              left: { xs: '1rem', md: '2rem' },
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              px: 2,
              py: 1.5,
              fontSize: '0.875rem',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
              textTransform: 'none',
              borderRadius: '12px',
              zIndex: 1,
            }}
          >
            Info
          </Button>

          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              pt: { xs: '3rem', md: '2rem' },
            }}
          >
            <Stack spacing={2} sx={{ textAlign: "center", mb: 3, justifyContent: "center", alignItems: "center" }}>
              <Typography
                variant="h2"
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
                display: "flex",
                flexDirection: "column",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                maxHeight: '70vh',
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
          </Box>

          {/* Info Modal */}
          <Modal
            open={infoOpen}
            onClose={handleInfoClose}
            aria-labelledby="info-modal-title"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '90%', md: '500px' },
                bgcolor: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                p: 4,
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography
                id="info-modal-title"
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
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 3,
                }}
              >
                Completează formularul de mai jos pentru a te înscrie la ITMarathon. 
                Alege proba dorită și completează toate detaliile necesare pentru echipa ta.
              </Typography>
              <Button
                onClick={handleInfoClose}
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
      </Modal>
    </>
  );
};

export default InscriereModal;