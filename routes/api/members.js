const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

// Set REST api
// Get all members.
router.get('/', (req, res) => {
    res.json(members);
});


// Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
    
});


// Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    // console.log(newMember.name + " " + newMember.email);

    if (!newMember.name || !newMember.email) {
        res.status(400).json({msg: 'Please include a name and email'});
    }
    else {
        members.push(newMember);
        res.json(members);
    }
});

// Update Member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
       const updMember = req.body;
       members.forEach(member => {
           if (member.id === parseInt(req.params.id)) {
               member.name = updMember.name ? updMember.name : req.body.name;
               member.email = updMember.email ? updMember.email : req.body.email;
               res.json({ msg: 'Member updated', member});
           }
       })
    }
    else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
    
});

// Delete Member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
       res.json({
           msg: 'Member deleted',
           members: members.filter(member => member.id !== parseInt(req.params.id))
       });
    }
    else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
    
});

module.exports = router;