export const GalaxySchema = new Schema(
  {
    name: {type: String, required: true, maxlength: 50, minlength: 2},
    type: {type: String, enum: ['spiral', 'cluster', 'elliptical', 'dwarf', 'colliding', 'quasar', 'barred-spiral', 'lenticular', 'peculiar', 'irregular'], required: true,},
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamp:true
    toJSON: { virtuals: true }
  }

)