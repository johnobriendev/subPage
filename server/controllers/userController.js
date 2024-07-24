const pool = require('../config/db');

// Controller to handle subscription
exports.subscribe = async (req, res) => {
  const { name, email } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(200).json({ message: 'Subscription successful!', user: result.rows[0] });
  } catch (err) {
    console.error(err);
    if (err.code === '23505') { // Unique violation
      res.status(400).json({ error: 'Email already subscribed.' });
    } else {
      res.status(500).json({ error: 'An error occurred while subscribing.' });
    }
  }
};

// Controller to list all subscribers
exports.listSubscribers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching subscribers.' });
  }
};