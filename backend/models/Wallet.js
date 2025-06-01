const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  balance: { type: Number, default: 1000 }, 
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;
