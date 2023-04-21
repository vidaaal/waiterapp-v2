import { S3Client } from '@aws-sdk/client-s3'

export class S3Storage {
  readonly client: S3Client

  constructor() {
    this.client = new S3Client({
      region: 'sa-east-1',
    })
  }
}
