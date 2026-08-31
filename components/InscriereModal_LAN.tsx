import React, { useState } from "react";
import { Box, Typography, Stack, Button, Modal, Backdrop } from "@mui/material";
import RegistrationForm from "./RegistrationForm_LAN";
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
            bgcolor: '#0a0a0a',
            border: '1px solid rgba(0, 255, 0, 0.2)', // Border verde subtil
            borderRadius: '20px',
            boxShadow: '0 0 30px rgba(0, 255, 0, 0.1)',
            p: { xs: 2, md: 4 },
            backdropFilter: 'blur(10px)',
            overflow: 'auto',
            '&::after': {
              content: '""',
              position: "absolute",
              top: "0%",
              right: "0%",
              width: "40%",
              height: "40%",
              background: "radial-gradient(circle at center, rgba(0, 255, 0, 0.05) 0%, transparent 70%)",
              filter: "blur(80px)",
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
              top: { xs: '1rem', md: '1.5rem' },
              right: { xs: '1rem', md: '1.5rem' },
              color: 'white',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '8px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                borderColor: '#ff0000',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <CloseIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
          </Box>

          {/* Info Button */}
          <Button
            onClick={handleInfoOpen}
            startIcon={<InfoIcon />}
            sx={{
              position: 'absolute',
              top: { xs: '1rem', md: '1.5rem' },
              left: { xs: '1rem', md: '1.5rem' },
              background: 'rgba(0, 255, 0, 0.1)',
              border: '1px solid rgba(0, 255, 0, 0.2)',
              color: '#00FF00',
              px: 2,
              py: 1,
              fontSize: '0.75rem',
              '&:hover': {
                background: 'rgba(0, 255, 0, 0.2)',
              },
              textTransform: 'none',
              borderRadius: '8px',
              zIndex: 1,
            }}
          >
            Info Probe
          </Button>

          <Box sx={{ position: 'relative', zIndex: 1, pt: { xs: '4rem', md: '2rem' } }}>
            <Stack spacing={1} sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "900",
                  fontSize: { xs: "1.8rem", md: "2.8rem" },
                  letterSpacing: '-1px',
                  "& span": {
                    background: "linear-gradient(45deg, #00FF00 30%, #00D1FF 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                }}
              >
                <span>ÎNSCRIERE</span> <span>LAN PARTY</span>
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                Locurile sunt limitate. Asigură-ți participarea acum!
              </Typography>
            </Stack>

            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "15px",
                maxHeight: '65vh',
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Box
                sx={{
                  padding: { xs: "1rem", md: "2rem" },
                  overflowY: "auto",
                  "&::-webkit-scrollbar": { width: "5px" },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#00FF00",
                    borderRadius: "10px",
                  },
                }}
              >
                <RegistrationForm />
              </Box>
            </Box>
          </Box>

          {/* Info Modal Contextual */}
          <Modal
            open={infoOpen}
            onClose={handleInfoClose}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '90%', md: '450px' },
                bgcolor: '#111',
                border: '1px solid #00FF00',
                borderRadius: '15px',
                p: 4,
                boxShadow: '0 0 20px rgba(0,255,0,0.2)',
              }}
            >
              <Typography variant="h6" sx={{ color: '#00FF00', mb: 2, fontWeight: 'bold' }}>
                Informații Înscriere
              </Typography>
              <Stack spacing={2} sx={{ color: 'rgba(255,255,255,0.8)' }}>
                <Typography variant="body2">• <b>CS2/LoL:</b> Echipe de exact 5 jucători.</Typography>
                <Typography variant="body2">• <b> MC / EAFC:</b> Înscrieri individuale (Solo).</Typography>
                <Typography variant="body2">• <b>Discord:</b> Obligatoriu pentru comunicarea cu staff-ul.</Typography>
                <Typography variant="body2">• <b>Steam:</b> Necesar doar pentru jucătorii de CS2.</Typography>
              </Stack>
              <Button
                fullWidth
                onClick={handleInfoClose}
                sx={{
                  mt: 3,
                  color: 'black',
                  background: '#00FF00',
                  '&:hover': { background: '#00cc00' },
                  fontWeight: 'bold'
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