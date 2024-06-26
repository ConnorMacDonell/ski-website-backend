"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = __importDefault(require("../../lib/logger"));
// Override the stream method to use custom logger
const stream = {
    // Use http severity level
    write: (message) => logger_1.default.http(message),
};
// Skip Morgan http logging unless in dev mode
const skip = () => {
    const env = process.env.NODE_ENV || "development";
    return env !== "development";
};
// Build morgan middleware
const morganMiddleware = (0, morgan_1.default)(
// Define message format string (this same as default).
":method :url :status :res[content-length] - :response-time ms", 
// Options: stream and skip overwritten above
{ stream, skip });
exports.default = morganMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZ2FuLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2hhcmVkL21pZGRsZXdhcmUvbW9yZ2FuLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsOERBQXNDO0FBRXRDLGtEQUFrRDtBQUNsRCxNQUFNLE1BQU0sR0FBa0I7SUFDNUIsMEJBQTBCO0lBQzFCLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0NBQ3pDLENBQUM7QUFFRiw4Q0FBOEM7QUFDOUMsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO0lBQ2hCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQztJQUNsRCxPQUFPLEdBQUcsS0FBSyxhQUFhLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBRUYsMEJBQTBCO0FBQzFCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBQSxnQkFBTTtBQUM3Qix1REFBdUQ7QUFDdkQsK0RBQStEO0FBQy9ELDZDQUE2QztBQUM3QyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FDakIsQ0FBQztBQUVGLGtCQUFlLGdCQUFnQixDQUFDIn0=