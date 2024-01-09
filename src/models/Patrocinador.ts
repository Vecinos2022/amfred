import { Schema, model, models } from 'mongoose'

const PatrocinadorSchema = new Schema(
  {
    nombre_patrocinador: {
      type: String,
      require: true
    },
    descripcion: {
      type: String,
      require: true
    },
    sitio_web: {
      type: String,
      require: true
    },
    direccion: {
      type: String,
      require: true
    },
    telefono: {
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

export default models.Patrocinador || model('Patrocinador', PatrocinadorSchema)
