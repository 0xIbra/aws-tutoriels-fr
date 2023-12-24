/**
 * Ce code est exécuté à chaque fois qu'un fichier est ajouté dans le bucket S3, il permet de récupérer le contenu du fichier et de le traiter.
 * Dans notre cas, on utilise le module sharp pour compresser l'image et on la réenregistre dans le même bucket.
 */

const aws = require('aws-sdk');
const sharp = require('sharp');

module.exports.handler = async (event) => {
    const s3 = new aws.S3();
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
      Bucket: bucket,
      Key: key,
    };

    try {
        const response = await s3.headObject(params).promise();
        const contentType = response.ContentType;
        if (!contentType.startsWith('image/')) {
            console.log('[WARN] file is not an image, skipping compression.');
            return;
        }

        const data = await s3.getObject(params).promise();
        const compressedImage = await sharp(data.Body).jpeg({ quality: 80 }).toBuffer();
        const uploadParams = {
            Bucket: bucket,
            Key: key,
            Body: compressedImage
        };
        await s3.upload(uploadParams).promise();

        console.log('[INFO] image compressed successfully.')
    } catch (err) {
        console.log(err);
        throw err;
    }
};
