"use client";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Section from "@/components/layout/Section";
import SocialIconButton from "@/components/layout/SocialIconButton";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig, socialLinks, testimonials } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  return (
    <Section id="contact" title="Contact" subtitle="Let's build something meaningful together">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <ContactForm />
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Connect
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                {socialLinks.map((link) => (
                  <SocialIconButton key={link.id} link={link} />
                ))}
              </Stack>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Email
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body1" fontWeight={500}>
                  {siteConfig.email}
                </Typography>
                <IconButton
                  size="small"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Stack>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 3, mb: 1 }}>
                Location
              </Typography>
              <Typography variant="body1">{siteConfig.location}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
          What collaborators say
        </Typography>
        <Grid container spacing={3}>
          {testimonials.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%", bgcolor: "background.default" }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: "italic", lineHeight: 1.8, mb: 2 }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {item.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
        message="Email copied to clipboard"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Section>
  );
}
