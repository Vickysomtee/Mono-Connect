import { Schema, model} from "mongoose"
import bcrypt from "bcrypt";

export interface IUser {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
  },
  {
    timestamps: true
  }
)

userSchema.pre('save', async function(next) {
  if (this.isModified(this.password)) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hashSync(this.password, salt);

  this.password = hash;

  return next()

});

export default model('User', userSchema);

// userSchema.methods.comparePassword = async function(userPassword : String, next): Promise<boolean> {
//   return bcrypt.compare(userPassword, )
// }


