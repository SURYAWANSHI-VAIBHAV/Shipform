import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define a schema for the User model
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      minlength: [3, 'Username must be at least 3 characters long'],
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      unique: true,
    },
    verificationTokenExpiresAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Hash the password before saving the user document
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
