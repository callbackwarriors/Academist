import nc from "next-connect";
const handler = nc();
const multer = require('multer');
const path = require('path')
const DatauriParser = require('datauri/parser')
const parser = new DatauriParser();
console.log(process.env.CLOUDINARY_NAME)
const ALLOWED_FORMATES = ['image/jpg', 'image/jpeg', 'image/png']
const storage = multer.memoryStorage();



const upload = multer({
  storage,
  fileFilter: function(req, file, cb){
    if(ALLOWED_FORMATES.includes(file.mimetype)){
      cb(null, true);
    }else{
      cb(new Error("not supported file"), false)
    }
  }
})


const singleUploade = upload.single('image');

const singleUploadeCtrl = (req, res, next) => {
  singleUploade(req, res, (error)=>{
    if(error){
     return res.status(422).send({message:'img upload failed'})
    }
    next();
  })
}



// const formateBufferTo64 = file =>
//  parser.format(path.extname(file.originalname).toString(), file.buffer);

// const cloudinary = require('cloudinary').v2;

// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET, 
// })

// const cloudinaryUpload = file => cloudinary.uploader.upload(file)

handler.post( singleUploadeCtrl, (req, res) => {

  try{
    if(!req.file) { throw new Error('img is not presented!');}
    console.log(req.file)
  //   const file64 = formateBufferTo64(req.file)
  //  const uploadResult = await cloudinaryUpload(file64.content)
  //   console.log(file64)
    // return res.json({cloudinaryId: uploadResult.public_id, url: uploadResult.secure_url})
    return res.json({message: 'hurray'})
  }catch(e){
    return res.status(422).send({message: e.message})
  }
});

export default handler;