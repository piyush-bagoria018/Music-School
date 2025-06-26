import ContactMessage from '../models/ContactMessage.js';

export const saveContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newMessage = new ContactMessage({
      name,
      email,
      message,
      date: new Date().toISOString(),
    });

    await newMessage.save();

    res.status(200).json({ message: 'Message saved successfully.' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to save message.' });
  }
};