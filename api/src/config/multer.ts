import { diskStorage, Options } from 'multer'
import { resolve } from 'node:path'
import crypto from 'crypto'
import { S3Storage } from '@/utils/s3-storage'
import multerS3 from 'multer-s3'

export const imageLocalDest = resolve(__dirname, '..', '..', 'tmp')

const multerConfig: Options = {
  limits: {
    fileSize: 1024 * 1024 * 4, // 4 MB
  },
  fileFilter: (req, file, callback) => {
    const formats = ['image/jpg', 'image/jpeg', 'image/png']

    if (formats.includes(file.mimetype)) {
      callback(null, true)
    } else {
      callback(new Error('Invalid file type'))
    }
  },
}

const local: Options = {
  dest: imageLocalDest,
  storage: diskStorage({
    destination: (req, file, callback) => {
      callback(null, imageLocalDest)
    },
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) {
          callback(error, file.filename)
        }

        const filename = `${hash.toString('hex')}-${file.originalname}`

        callback(null, filename)
      })
    },
  }),
  limits: multerConfig.limits,
  fileFilter: multerConfig.fileFilter,
}

const s3: Options = {
  storage: multerS3({
    s3: new S3Storage().client,
    bucket: 'waiterapp-uploads',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, callback) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) {
          callback(error, file.filename)
        }

        const filename = `${hash.toString('hex')}-${file.originalname}`

        callback(null, filename)
      })
    },
  }),
  limits: multerConfig.limits,
  fileFilter: multerConfig.fileFilter,
}

const storageTypes = {
  local,
  s3,
}

export { storageTypes }
