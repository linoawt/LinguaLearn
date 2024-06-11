const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


// Insert data into the database

const db = client.db('<database-name>');

async function insertData() {
  try {
    const collection = db.collection('<collection-name>');
    const result = await collection.insertOne({ name: 'John Doe', age: 25 });
    console.log('Data inserted:', result.insertedId);
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    await client.close();
  }
}

insertData();


// Review data from the database
async function reviewData() {
    try {
      const collection = db.collection('<collection-name>');
      const cursor = collection.find();
      const result = await cursor.toArray();
      console.log('Data retrieved:', result);
    } catch (error) {
      console.error('Error retrieving data:', error);
    } finally {
      await client.close();
    }
  }
  
  reviewData();