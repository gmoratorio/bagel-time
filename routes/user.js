const express = require('express');
const router = express.Router();
const User = require('../db/user');
const Bagel = require('../db/bagel');
/* GET users listing. */
router.get('/:id', function(req, res) {
    const id = req.params.id;

    if (isInteger(id)) {
        User.getSingleUserById(id)
            .then((result) => {
                if (result) {
                    delete result.password; //delete result.object deletes object!!!!!!!
                    res.json(result);
                } else {
                    res.status(404);
                    res.send("User not found!");
                }
            })
            .catch((err) => {
                res.send(err);
            });
    } else {
        res.status(500);
        res.send("Invalid ID");
    }
});

router.get('/', function(req, res) {

    User.getAllUsers()
        .then((result) => {
            if (result) {
                res.json(result);
            } else {
                res.status(404);
                res.send("Users not found!");
            }
        })
        .catch((err) => {
            res.send(err);
        });

});

router.post('/bagel', (req, res) => {
    Bagel.createNewBagel(req.body)
        .then((newId) => {
            res.json(newId)
        })
        .catch((err) => {
            res.send(err);
        })
});

router.get('/:userId/bagel', function(req, res) {
    const id = req.params.userId;

    if (isInteger(id)) {
        Bagel.getBagelByUser(id)
            .then((result) => {
                if (result) {
                    res.json(result);
                } else {
                    res.status(404);
                    res.send("Bagels not found!");
                }
            })
            .catch((err) => {
                res.send(err);
            });
    } else {
        res.status(500);
        res.send("Invalid ID");
    }
});



router.get('/:userId/bagel/:bagelId', function(req, res) {
    const userId = req.params.userId;
    const bagelId = req.params.bagelId;

    if (isInteger(userId) && isInteger(bagelId)) {
        Bagel.getSingleBagelById(bagelId)
            .then((result) => {
                if (result) {
                    res.json(result);
                } else {
                    res.status(404);
                    res.send("Bagel not found!");
                }
            })
            .catch((err) => {
                res.send(err);
            });
    } else {
        res.status(500);
        res.send("Invalid ID");
    }
});

router.put('/:id', function(req, res) {
    const id = req.params.id;

    if (isInteger(id)) {
        User.getSingleUserById(id)
            .then((result) => {
                if (result) {
                    User.updateUserById(id, req.body)
                        .then(updatedUser => {
                            console.log(updatedUser);
                            res.json(updatedUser);
                        });
                } else {
                    res.status(404);
                    res.send("User not found!");
                }
            })
            .catch((err) => {
                res.send(err);
            });
    } else {
        res.status(500);
        res.send("Invalid ID");
    }
});

router.delete('/:id', function(req, res) {
    const id = req.params.id;
    if (isInteger(id)) {
        User.getSingleUserById(id)
            .then((result) => {
                if (result) {
                    User.makeUserInActive(id)
                        .then(updatedUser => {
                            res.json(updatedUser);
                        });
                } else {
                    res.status(404);
                    res.send("User not found!");
                }
            })
            .catch((err) => {
                res.send(err);
            });
    } else {
        res.status(500);
        res.send("Invalid ID");
    }
});
router.delete('/:userId/bagel/:bagelId', function(req, res) {
  const userId = req.params.userId;
  const bagelId = req.params.bagelId;
    if (isInteger(userId) && isInteger(bagelId) ){

        Bagel.getSingleBagelById(bagelId)
            .then((result) => {
                if (result) {
                    Bagel.deleteBagel(bagelId)
                        .then(result=> {
                            res.json(result);
                        });
                } else {
                    res.status(404);
                    res.send("Bagel not found!");
                }
            })
            .catch((err) => {
                res.send(err);
            });
    } else {
        res.status(500);
        res.send("Invalid ID");
    }
});
router.put('/:userId/bagel/:bagelId', function(req, res) {
  const userId = req.params.userId;
  const bagelId = req.params.bagelId;
    if (isInteger(userId) && isInteger(bagelId) ){

        Bagel.getSingleBagelById(bagelId)
            .then((result) => {
                if (result) {
                    Bagel.updateBagelById(bagelId, req.body)
                        .then(result=> {
                            res.json(result);
                        });
                } else {
                    res.status(404);
                    res.send("Bagel not found!");
                }
            })
            .catch((err) => {
                res.send(err);
            });
    } else {
        res.status(500);
        res.send("Invalid ID");
    }
});

function isInteger(id) {
    if (isNaN(id)) {
        return false;
    } else {
        return true;
    }
}



module.exports = router;
