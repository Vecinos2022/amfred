import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    description: {
      type: String
    },
    role: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
)

export default models.User || model('User', UserSchema)
