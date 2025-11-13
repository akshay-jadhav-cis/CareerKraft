import React, { useEffect, useState } from "react";
import {
    Box,
    Paper,
    Typography,
    Button,
    TextField,
    Snackbar,
    Alert,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function TwoFactorSetup() {
    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email;

    const [qr, setQr] = useState("");
    const [secret, setSecret] = useState("");
    const [otp, setOtp] = useState("");

    const [alert, setAlert] = useState({
        open: false,
        message: "",
        severity: "error",
    });

    // Redirect if email missing
    useEffect(() => {
        if (!email) navigate("/signup");
    }, [email]);

    // Fetch QR Code
    useEffect(() => {
        async function fetchQR() {
            const res = await fetch("http://localhost:5000/2fa/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            setQr(data.qr);
            setSecret(data.secret);
        }
        fetchQR();
    }, [email]);

    const verifyOTP = async () => {
        const res = await fetch("http://localhost:5000/2fa/verify-signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, secret, token: otp }),
        });

        const data = await res.json();

        if (data.success) {
            // Save full user
            localStorage.setItem("user", JSON.stringify(data.user));

            navigate("/dashboard");
        } else {
            setAlert({
                open: true,
                message: data.error || "Invalid OTP",
                severity: "error",
            });
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
            }}
        >
            <Paper elevation={6} sx={{ p: 4, borderRadius: "20px", maxWidth: 420 }}>
                <Typography variant="h5" align="center">
                    Set Up Google Authenticator
                </Typography>

                <Typography sx={{ mt: 2 }}>
                    Scan this QR code using Google Authenticator:
                </Typography>

                {qr ? (
                    <img
                        src={qr}
                        alt="QR Code"
                        style={{ width: "100%", marginTop: "20px" }}
                    />
                ) : (
                    <Typography sx={{ mt: 3, textAlign: "center" }}>
                        Loading QR Code...
                    </Typography>
                )}


                <TextField
                    fullWidth
                    label="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    sx={{ mt: 3 }}
                />

                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, py: 1 }}
                    onClick={verifyOTP}
                >
                    Verify OTP
                </Button>

                <Snackbar
                    open={alert.open}
                    autoHideDuration={4000}
                    onClose={() => setAlert({ ...alert, open: false })}
                >
                    <Alert severity={alert.severity}>{alert.message}</Alert>
                </Snackbar>
            </Paper>
        </Box>
    );
}
