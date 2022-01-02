'use strict';
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-2' });

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' });

  const phoneNumber = '+18882228453';
  const companyName = 'AABUILD';
  const vanityNumber = convertVanity(phoneNumber, companyName);
  const params = {
    TableName: 'cus-phone-vanity-number',
    Item: {
      phone: phoneNumber,
      companyName: companyName,
      vanityNumber: vanityNumber
    }
  };

  try {
    const data = await documentClient.put(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }

};

const convertVanity = (number, callerId = "$") => {

  const lastSeven = number.slice(5).split('');

  const vanityOptions = [];

  if (digitOption(lastSeven[0]).includes(callerId[0])) {
    for (let i = 0; i < lastSeven.length; i++) {
      if (digitOption(lastSeven[i]).includes(callerId[i])) {
        vanityOptions.push(callerId[i]);
      } else {
        vanityOptions.push(digitOption(lastSeven[i])[Math.floor(Math.random() * (digitOption(lastSeven[i]).length))]);
      }
    }
  } else {

    for (let i = 0; i < lastSeven.length; i++) {
      const vanityOption = digitOption(lastSeven[i]);
      vanityOptions.push(vanityOption[Math.floor(Math.random() * (vanityOption.length))]);

    }
  }
  const lastSevenVanity = vanityOptions.join('');
  const vanityNumber = `${number.slice(0, 2)}-${number.slice(2, 5)}-${lastSevenVanity}`;
  return vanityNumber;
};

const digitOption = digit => {
  let option;
  if (digit === '0') {
    option = ['0'];
  } else if (digit === '1') {
    option = ['1'];
  } else if (digit === '2') {
    option = ['A', 'B', 'C'];
  } else if (digit === '3') {
    option = ['D', 'E', 'F'];
  } else if (digit === '4') {
    option = ['G', 'H', 'I'];
  } else if (digit === '5') {
    option = ['J', 'K', 'L'];
  } else if (digit === '6') {
    option = ['M', 'N', 'O'];
  } else if (digit === '7') {
    option = ['P', 'Q', 'R', 'S'];
  } else if (digit === '8') {
    option = ['T', 'U', 'V'];
  } else if (digit === '9') {
    option = ['W', 'X', 'Y', 'Z'];
  }

  return option;
};
