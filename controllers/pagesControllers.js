module.exports={
index:(req,res)=>{
    res.render('index');
},
getBlog:(req,res)=>{
    res.render('blog');
},

getDestination:(req,res)=>{
    res.render('destination');

},
getGuide:(req,res)=>{
    res.render('guide');

},
getPackage:(req,res)=>{
    res.render('package');

},
getService:(req,res)=>{
    res.render('service');

},
getSingle:(req,res)=>{
    res.render('single');

},
getTestimonial:(req,res)=>{
    res.render('testimonial');
}}