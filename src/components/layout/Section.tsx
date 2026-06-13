import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

export default function Section({ id, title, subtitle, children, ariaLabel }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      aria-label={ariaLabel ?? title}
      sx={{
        py: { xs: 8, md: 12 },
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "0.12em",
              display: "block",
              mb: 1,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                maxWidth: 640,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        {children}
      </Container>
    </Box>
  );
}
