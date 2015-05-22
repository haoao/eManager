

appServices.factory('Shares', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var shares = [{
        id: 0,
        name: '小李',
        lastText: '公司规章制度',
        detail: '关于公司日常管理规范的说明，为提高各....',
        face: 'img/24767_large.jpg'
    }, {
        id: 1,
        name: '小张',
        lastText: '关于2015年“劳动节”放假的通知',
        detail: '公司领导、各部门：现将2015年劳动节放...',
        face: 'img/39784_large.jpg'
    },{
        id: 2,
        name: '小刘',
        lastText: '售前与调研的经验',
        detail: '从以往项目我们可以总结出几点经验，...',
        face: 'img/40182_large.jpg'
    }, {
        id: 3,
        name: '阿浩',
        lastText: '谈谈用户体验',
        detail: '用户体验有标准又没标准，人的主观感...',
        face: 'img/IMG_3872.JPG'
    }];

    return {
        all: function() {
            return shares;
        },
        remove: function(share) {
            shares.splice(shares.indexOf(share), 1);
        },
        get: function(shareId) {
            for (var i = 0; i < shares.length; i++) {
                if (shares[i].id === parseInt(shareId)) {
                    return shares[i];
                }
            }
            return null;
        }
    };
});
