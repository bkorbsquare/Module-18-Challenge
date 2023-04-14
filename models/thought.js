// Description: This file contains the schema for the thought model
const { Schema, model, Types } = require('mongoose');

// Reaction schema
const reactionSchema = new Schema (
  {
     reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
     },

     reactionBody: {
      type: String,
      required: true,
      maxlength: 280
     },

     username: {
      type: String,
      required: true,
     },

     createdAt: {
      type: Date,
      default: Date.now,
     },
  },
  {
      toJSON: {
          getters: true
      },
      id: false,
  }
)

// Thought schema
const thoughtSchema = new Schema (
  {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },

      createdAt: {
        type: Date,
        default: Date.now,
      },

      username: {
        type: String,
        required: true,
      },

      reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// Get total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

// Create the Thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

// Export the Thought model
module.exports = Thought;