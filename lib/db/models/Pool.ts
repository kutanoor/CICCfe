import mongoose from 'mongoose';

// Pool Schema
const poolSchema = new mongoose.Schema({
  propertyType: { type: String, required: true },
  propertyTitle: { type: String, required: true },
  location: { type: String, required: true },
  images: [{ type: String }], // Assuming these are URLs or paths to the images
  keyHighlights: { type: String, required: true },
  documents: [{ type: String }], // Assuming these are URLs or paths to the documents
  poolSize: { type: String, required: true },
  estimatedMPY: { type: String, required: true },
  estimatedReturn: { type: String, required: true },
  estimatedMaturity: { type: String, required: true },
  softCap: { type: String, required: true },
  hardCap: { type: String, required: true },
  minInvest: { type: String, required: true },
  maxInvest: { type: String, required: true },
  poolOpenFor: { type: String, required: true },
  actualMPY: { type: String, required: true },
  actualReturn: { type: String, required: true },
  actualMaturity: { type: String, required: true },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

// You can add methods or statics to the schema if needed
// For example, a method to handle some business logic related to pools

const Pool = mongoose.models.Pool || mongoose.model('Pool', poolSchema);
export default Pool;
