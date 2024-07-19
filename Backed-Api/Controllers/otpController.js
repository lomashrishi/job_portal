const express = require('express');
const axios = require('axios');

// Generate OTP function
function generateOTP(length = 6) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * digits.length)];
    }
    return otp;
}

// Send OTP function
async function sendOTP(phoneNumber, otp) {
    const apiKey = "xUNYy9lqpgK2V1vz";
    const senderId = "SBJSWL";
    const message = encodeURIComponent(`Dear User, This OTP is ${otp}. This OTP Will Expire in 30 Minutes.`);
    const url = `http://216.48.183.136/vb/apikey.php?apikey=${apiKey}&senderid=${senderId}&number=${phoneNumber}&message=${message}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error sending OTP:', error);
        return null;
    }
}

// Store OTP in the database
function storeOTP(phoneNumber, otp) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO otps (phone_number, otp) VALUES (?, ?)";
        db.query(query, [phoneNumber, otp], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

// Endpoint to handle OTP requests
app.post('/send-otp', async (req, res) => {
    const { phoneNumber } = req.body;
    const otp = generateOTP();

    try {
        await storeOTP(phoneNumber, otp);
        const response = await sendOTP(phoneNumber, otp);

        if (response && response.includes('OK')) {
            res.json({ status: "success", message: `OTP sent to ${phoneNumber}` });
        } else {
            res.json({ status: "error", message: "Failed to send OTP" });
        }
    } catch (error) {
        res.json({ status: "error", message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
