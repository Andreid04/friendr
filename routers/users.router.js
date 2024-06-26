const express =require('express');
const router= express.Router();

//TODO remove
const users = [{id: 1, firstName: "Forrest", lastName: "Gump"},
    {id: 2, firstName: "Hari", lastName: "Seldon"},
    {id: 3, firstName: "Tom", lastName: "Cruise"},
];

router.post('/',(req,res) => {
    console.log(req.body);
    res.status(201);//custom error code
    res.send("Succsefully created!")
})

router.get('/',(req,res) => {
    console.log(req.query.id);
    const userId  = req.query.id;
    let found = false;
    for(let i=0; i< users.length;i++){
            if(users[i].id == userId){
                    res.send(users[i]);
                    found=true;
                    return;
                }
        }
    if(!found){
    res.status(404).send();
    }

})

module.exports = router;