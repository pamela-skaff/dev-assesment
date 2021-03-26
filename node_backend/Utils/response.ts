import { ApiResponse } from "../models/apiResponse";

/**
 * @description API Response for Lambda function Handlers
 * @param {object} responseBody An object containing key value pairs for the JSON response body
 * @param {number} statusCode The status code to be returned with the JSON response
 * @var {object} headers API Response headers
 * @returns {ApiResponse}
 */
export const response = (
  responseBody: any,
  statusCode: number
): ApiResponse => {
  // console.log("response body", JSON.stringify(responseBody));
  return {
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: responseBody,
    statusCode,
  };
};
