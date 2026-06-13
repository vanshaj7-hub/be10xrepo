"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            {...register("name")}
            label="Name"
            fullWidth
            margin="normal"
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
            autoComplete="name"
          />
          <TextField
            {...register("email")}
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            autoComplete="email"
          />
          <TextField
            {...register("message")}
            label="Message"
            fullWidth
            margin="normal"
            multiline
            rows={5}
            error={Boolean(errors.message)}
            helperText={errors.message?.message}
          />

          {/* Honeypot field — hidden from users */}
          <TextField
            {...register("website")}
            label="Website"
            tabIndex={-1}
            autoComplete="off"
            sx={{
              position: "absolute",
              left: "-9999px",
              width: 1,
              height: 1,
              overflow: "hidden",
            }}
            aria-hidden="true"
          />

          {submitStatus === "success" && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Thanks for reaching out! I&apos;ll get back to you soon.
            </Alert>
          )}

          {submitStatus === "error" && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            sx={{ mt: 3 }}
            startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : undefined}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
