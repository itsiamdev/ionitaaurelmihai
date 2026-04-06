import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ionitaaurel32@gmail.com",
    pass: "YOUR_APP_PASSWORD",
  },
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: "ionitaaurel32@gmail.com",
      to: "ionitaaurel32@gmail.com",
      subject: `Contact de la ${name}`,
      text: `Nume: ${name}\nEmail: ${email}\n\nMesaj:\n${message}`,
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Eroare la trimitere" });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));