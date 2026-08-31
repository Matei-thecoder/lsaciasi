import { Grid, Box } from "@mui/material";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        width: "100vw",
        padding: {xs: "0rem 1rem", md: 0},
        // maxWidth: "100vw",
        // overflowX: "hidden", 
        alignItems: "center",
        zIndex: "2",
        // padding: { xs: '0px 16px', md: 0 },
        scrollBehavior: "smooth",
        "&::-webkit-scrollbar": {
          width: "8px",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "linear-gradient(90deg, #DA6CFF, #4800FF)",
          borderRadius: "4px",
          "&:hover": {
            background: "linear-gradient(90deg, #4800FF, #DA6CFF)",
          },
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: "4px",
        },
        scrollbarWidth: "thin",
      }}
    >
      <Box
        sx={{
          // minHeight: "100dvh",
          // overflowX: 'hidden',
          position: "relative",
          zIndex: "2",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
}
export default MainLayout;
