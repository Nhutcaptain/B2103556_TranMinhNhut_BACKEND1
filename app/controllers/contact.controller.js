exports.create = (req, res) => {
    res.send({massage: 'create handle.'});
} ;

exports.findAll = (req, res) => {
    res.send({massage: 'find all handle.'});
};

//exports module dùng để dùng ở bất cứ đâu khi được gọi tên

exports.findOne = (req, res) => {
    res.send({massgae: 'Find One handle.'});
};

exports.update = (req, res) => {
    res.send({massage: 'update handle.'});
};

exports.delete = (req, res) => {
    res.send({massage: 'delete handle.'});
};

exports.deleteAll = (req, res) => {
    res.send({massage: 'deleteAll handle.'});
};

exports.findAllFavorite = (req, res) => {
    res.send({massage: 'findAllFavorite handle.'});
};

