const multer = require('multer');
const path = require('path');
const { cloudinary } = require('../config/cloudinaryConfig');
const fs = require('fs').promises;


// const storage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null,'uploads/');
//     },
//     filename: (req,file,cb)=>{
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
//         cb(null, file.fieldname + '-' + uniqueSuffix);
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: {
//         fieldSize: 1024 * 1024 * 5
//     },
//     fileFilter: (req, file, cb)=>{
//         if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
//             cb(null,true);
//         } else {
//             cb(new Error('Invalid file type. Only JPEG and PNG files are allowed.'));
//         }
//     }
// })

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const fileUploader = async (file) => {
    const tempFilePath = path.join(__dirname, `temp_${Date.now()}`);
    await fs.writeFile(tempFilePath, file.buffer);

    try {
        const result = await cloudinary.uploader.upload(tempFilePath, {
            format: 'png', 
            public_id: `custom_public_id_${Date.now()}`,
        });
        await fs.unlink(tempFilePath);

        return result.secure_url;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        try {
            await fs.unlink(tempFilePath);
        } catch (deleteError) {
            console.error('Error deleting temporary file:', deleteError);
        }

        throw error; 
    }
};


const uploadSingleToCloudinary = (req,res,next)=>{
    upload.single('profileImage')(req,res,async (err)=>{
        if(err){
            return res.status(500).json({error:'Error uploading file'})
        }
        try {
            const secureUrl = await fileUploader(req.file)
            req.fileUrl = secureUrl
            next()
        } catch (error) {
            console.error('Error uploading to Cloudinary:', error);
            return res.status(500).json({ error: 'Error uploading file to Cloudinary.' });
        }
    })
}



const uploadMultipleToCloudinary = (req,res,next)=>{
    upload.array('images',5)(req,res, async (err)=>{
        if(err){
            return res.status(500).json({ error: 'Error uploading files' });
        }
        try {
            const promises = req.files.map(async (file)=>{
                return await fileUploader(file);
            })
            const fileUrls = await Promise.all(promises);
            req.fileUrls = fileUrls;
            next()
        } catch (error) {
            console.error('Error uploading to Cloudinary:', error);
            return res.status(500).json({ error: 'Error uploading files to Cloudinary' });
        }
    })
}


module.exports = {
    upload, uploadSingleToCloudinary, uploadMultipleToCloudinary
}