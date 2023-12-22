import { Schema, model, models } from 'mongoose'

const NoticiaSchema = new Schema(
  {
    titulo: {
      type: String,
      require: true
    },
    descripcion: {
      type: String,
      require: true
    },
    imagen: {
      type: String,
      require: true
    },
    estatus: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)

export default models.Noticia || model('Noticia', NoticiaSchema)
