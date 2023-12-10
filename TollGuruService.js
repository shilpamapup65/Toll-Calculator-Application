import React from 'react';
import {useState}from 'react';
import axios from "axios";
const axios = require('axios');

class TollGuruService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.tollguru.com/v1/calculation';
  }

  async calculateToll(route) {
    try {
      const response = await axios.post(`${this.baseUrl}?key=${this.apiKey}`, { route });
      return response.data;
    } catch (error) {
      console.error('Error calculating toll:', error);
      throw error;
    }
  }
}

export default TollGuruService;
