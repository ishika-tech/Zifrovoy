import axios from "axios";
import { Authsignal } from "react-native-authsignal";
import AsyncStorage from '@react-native-async-storage/async-storage';

const authsignal = new Authsignal({
    tenantID: "d9d4c210-fd48-4376-b6f6-86129bb4e6b3",
    baseURL: "https://api.authsignal.com/v1",
});

async function fetchData(email) {
    try {
        const url = `http://10.0.0.206:5000/api/auth/${email}`;
        const response = await fetch(url);

        if (!response.ok) {
            console.error("HTTP error:", response.status, response.statusText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

async function fetchPass(email) {
    try {
        const url = `http://10.0.0.206:5000/api/passKey/${email}`;
        const response = await fetch(url);

        if (!response.ok) {
            console.error("HTTP error:", response.status, response.statusText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}


async function storeToken(token) {
    try {
        await AsyncStorage.setItem('authToken', token);
    } catch (error) {
        console.error("Error storing token:", error);
    }
}


async function getToken() {
    try {
        const token = await AsyncStorage.getItem('authToken');
        return token;
    } catch (error) {
        console.error("Error retrieving token:", error);
        return null;
    }
}

export async function sendOTPVerification({ email = "", sms = "" }) {
    try {
        if (email) {
            console.log("Email:", email);

            const data = await fetchData(email);

            console.log(data);
            
            await authsignal.setToken(data);
            await storeToken(data);
            const temp = await authsignal.email.enroll({ email: email });
            console.log("Enrollment Response:", temp);
        } else {
            console.log("No authentication method found.");
        }
    } catch (error) {
        console.error("Error during authentication:", error);
    }
}

export async function verifyOTP({ email = "", otp = "" }) {
    try {
        if (email) {
            console.log("Email:", email);
            console.log("OTP:", otp);

            const storedToken = await getToken();
            await authsignal.setToken(storedToken);

            const temp = await authsignal.email.verify({ code: otp });
            console.log("Enrollment Response:", temp);


            if (temp.data && temp.data.failureReason) {
                console.log(temp.data.failureReason);
                return 0;
            } else {
                return 1;
            }
        } else {
            console.log("No authentication method found.");
        }
    } catch (error) {
        console.error("Error during authentication:", error);
    }
}

export async function setPasskey({ email = "", otp = "" }) {
    try {
        if (email) {
            console.log("Email:", email);

            // Retrieve token from AsyncStorage
            const token = await fetchPass(email);
            await storeToken(token);
            console.log(token);

            const temp = await authsignal.passkey.signUp({
                token,
                userName: email,
                displayName: email,
            });

            console.log("Enrollment Response:", temp);

            // Check for failureReason in the response
            if (temp.data && temp.data.failureReason) {
                console.log(temp.data.failureReason);
                return 0; // Return 0 for error
            } else {
                return 1; // Successfully verified
            }
        } else {
            console.log("No authentication method found.");
        }
    } catch (error) {
        console.error("Error during authentication:", error);
    }
}
export async function verifyPasskey({ email = "", otp = "" }) {
    try {

        const storedToken = await getToken();
        await authsignal.setToken(storedToken);

        let temp = await authsignal.passkey.signIn({ action: "signInWithPasskey" })


        console.log("Enrollment Response:", temp);

        // Check for failureReason in the response
        if (temp.data && temp.data.failureReason) {
            console.log(temp.data.failureReason);
            return 0; // Return 0 for error
        } else {
            return 1; // Successfully verified
        }
    } catch (error) {
        console.error("Error during authentication:", error);
    }
}

