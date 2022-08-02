const SubList = require('../models/subscribers');
exports.getSubListById = (req, res, next, id) => {
    SubList.findById(id).exec((err,sub) => {
      if (err) {
        return res.status(400).json({
          error: "Subscriber  not found in DB"
        });
      }
      req.subscriber = sub;
      next();
    });
  };

exports.addSubList=(req,res)=>{
    console.log(req.body);
    const sub=new SubList(req.body);
    sub.save((err,sub)=>{
        if(err){
            return res.status(400).json({
                error: "NOT able to save subscriber in DB",
                
              });
        }
        res.json({sub})
    })
}




exports.getSub=(req,res)=>{
    return res.json(req.subscriber)
}

exports.getSubList=(req,res)=>{
    SubList.find().exec((err,subs)=>{
        if(err){
            return res.status(400).json({
                "msg":"no subs found"})
        }
        res.json(subs)
    })
}

exports.delById=(req,res)=>{
    const sub=req.subscriber;
    sub.remove((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"failed to delete this subscriber"
            })

        }  
    res.json({
        message:"deleted subscriber successfully"
    })  })
}

exports.delByMail=(req,res)=>{
    const mail=req.body.email;
    SubList.findOneAndDelete({"email":mail},(err,sub)=>{
        if(err){
            return res.status(400).json({
                message:"couldn't delete"
            })
        }
        res.json({message:`successfully deleted ${sub}`})
    })
}

exports.getSubListMail=(req,res)=>{
    const mails=[]
    SubList.find().exec((err,subs)=>{
        if(err){
            return res.status(400).json({
                "msg":"no subs found"})
        }
     for(x in subs){
        
        mails.push(subs[x].email)
     }
     
        res.json(mails)
    })
}
